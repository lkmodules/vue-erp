<template>
  <table cellspacing="0" cellpadding="0" border="0" :class="cls">
    <div :style="headScrollStyle" :class="cls+'-head-scroll'" ref="header">
      <div :style="headStyle">
        <thead>
          <tr>
            <th
              v-for="(col, colIndex) in columns"
              :key="colIndex"
              :width="col.width"
              :height="headerRowHeight"
              :class="AlignCls(col)"
            >{{col.title}}</th>
          </tr>
        </thead>
      </div>
    </div>
    
    <div :style="bodyScrollStyle" :class="cls+'-body-scroll'" @scroll="HandleBodyScroll">
      <div :style="bodyStyle" :class="cls+'-body'">
        <tbody>
          <tr v-for="(row, rowIndex) in localData" :key="rowIndex">
            <td
              v-for="(item, itemIndex) in row"
              :key="itemIndex"
              :width="item.width"
              :height="rowHeight"
              :rowspan="item.rowspan"
              :class="AlignCls(item)"
            >{{item.index?rowIndex+1:item.value}}</td>
          </tr>
        </tbody>
      </div>
    </div>
  </table>
</template>

<script>
import { deepCopy, typeOf } from '../../utils/assist'
import { on, off } from "../../utils/dom";
import { getScrollBarSize } from '../../utils/assist'

const cls = "km-grid-span";

export default {
  name: "KmGridSpan",
  data () {
    return {
      cls,
      localData: [],
      columnsWidth: 0,
      tableWidth: 0,
      localTableWidth: 0,
      flag: false,
      currentRowIndex: 0,
      scrollbarWidth: getScrollBarSize()
    };
  },
  props: {
    data: Array,
    columns: Array,
    headerRowHeight: {
      type: Number,
      default: 44
    },
    rowHeight: {
      type: Number,
      default: 40
    },
    height: Number
  },
  computed: {
    isHScroll () {
      return this.columnsWidth > this.tableWidth
    },
    isVScroll () {
      return this.headerRowHeight + this.localData.length * this.rowHeight > this.height
    },
    bodyScrollStyle(){
      let style = {}
      if (!this.isVScroll) {
        style.width = `calc(100% - ${this.scrollbarWidth}px)`
      } else {
        style.width = '100%'
      }
      return style
    },
    bodyStyle () {
      let style = {};
      if (this.height) {
        style.height = this.height - this.rowHeight;
      } else {
        style.height = this.localData * this.rowHeight;
      }
      if(this.isHScroll){
        style.width = this.columnsWidth + 'px'
        style.height -= this.scrollbarWidth
      }else{
        style.width = '100%'
      }
      style.height += "px";
      return style;
    },
    headScrollStyle () {
      let style = {}
      style.width = `calc(100% - ${this.scrollbarWidth}px)`
      return style
    },
    headStyle () {
      let style = {}
      if(this.height){
        style.height = this.headerRowHeight + 'px'
      }
      if(this.isHScroll){
        style.width = this.columnsWidth + this.scrollbarWidth + 'px'
      }else{
        style.width = '100%'
      }
      return style
    }
  },
  methods: {
    HandleBodyScroll(){
      this.$refs.header.scrollLeft = event.target.scrollLeft
    },
    AlignCls (col) {
      return col.align ? `${this.cls}-cell-${col.align}` : `${this.cls}-cell-left`
    },
    GetColByKey (key) {
      for (let i = 0; i < this.columns.length; i++) {
        if (this.columns[i].key === key) {
          return this.columns[i];
        }
      }
    },
    IsShowKey (key) {
      return this.columns.some(v => v.key === key);
    },
    ReBuildData (val) {
      val.forEach(row => {
        if (row.children) {
          if (row.children.length === 1) {
            let child = row.children[0]
            delete row.children
            row = Object.assign(row, child)
          } else {
            this.ReBuildData(row.children)
          }
        }
      })
    },
    GetValue (current, col, key) {
      if (col.enumData) {
        return col.enumData[current[key]]
      } else if (col.valueKey) {
        return current[key] ? `[${current[key]}]${current[col.valueKey]}` : ''
      } else if (col.bizType && ['price', 'amt', 'qty', 'rate'].includes(col.bizType)){
        const formatEnum = { price: 4, amt: 2, qty: 3, rate: 4 }
        if (typeOf(current[key]) === 'null') {
          return '-'
        } else {
          return parseFloat(current[key] / 10000).toFixed(col.format || formatEnum[col.bizType])
        }
      }
      return current[key]
    },
    BuildTableDataByDataAndColumns (val) {
      this.ReBuildData(val)
      let clone = deepCopy(val), localData = [], firstData = []

      const RecursivelyChildren = (row, parent = {}) => {
        let tmp = deepCopy(row)
        if (Object.keys(parent).length > 0) {
          if(!row.children || !row.children.length){
            this.flag = true
          }
          for (let key in parent) {
            if (key != "children" && this.IsShowKey(key)) {
              let col = this.GetColByKey(key)
              if (typeOf(parent[key]) === "object") {
                if(!parent[key].rowspan){
                  alert()
                  parent[key]["rowspan"] = parent.children.length
                }
              } else {
                parent[key] = {value: this.GetValue(parent, col, key)}
                parent[key]["rowspan"] = this.GetRealRowspan(parent.children)
              }
            }else{
              // delete parent[key]
            }
          }
        }       

        tmp = Object.assign(parent, row);

        for (let key in tmp) {
          if (key != "children" && this.IsShowKey(key)) {
            let col = this.GetColByKey(key)
            if (typeOf(tmp[key]) === "object") {
              tmp[key]["width"] = col.width
              tmp[key]["align"] = col.align
            } else {
              tmp[key] = {value: this.GetValue(tmp, col, key)}
              tmp[key]["width"] = col.width
              tmp[key]["align"] = col.align
            }
          } else {
            // delete tmp[key]
          }
        }

        if (this.flag) {
          localData.push(this.OrderRowByColumns(tmp))
        }else{
          firstData.push(this.OrderRowByColumns(tmp))
        }

        if (row.children && row.children.length) {
          let liTop = tmp
          tmp = {}
          row.children.forEach((child, i) => {
            if (i === 0) {
              if(child.children){
                RecursivelyChildren(child, row)
              }else{
                RecursivelyChildren(child, this.LiTopRow(liTop, row))
              }
            } else {
              if(child.children && child.children.length){
                this.flag = false
              }
              RecursivelyChildren(child)
            }
          })
        }
      }

      clone.forEach((row, i) => {
        this.flag = false
        this.currentRowIndex = i
        RecursivelyChildren(row)
      })

      // to do there where some problems
      this.localData = localData.length ? localData : firstData
      this.CalcTmpCol()
    },
    GetRealRowspan(children){
      let rowspan = 0
      children.forEach(child => {
        if(child.children && child.children.length){
          rowspan += child.children.length
        }else{
          rowspan ++
        }
      })
      return rowspan
    },
    CalcTmpCol(){
      this.$nextTick(() => {
        if (this.columnsWidth > 0 && this.tableWidth > 0 && this.tableWidth - this.columnsWidth > 0) {
          let __tmpCol = this.columns.find(v => v.key === '__tmp')
          if (__tmpCol) {
            __tmpCol.width = this.tableWidth - this.columnsWidth
          } else {
            this.columns.push({ key: '__tmp', width: this.tableWidth - this.columnsWidth})
          }
          this.localData.forEach(row => {
            let __tmpRow = row.find(v => v.key === '__tmp')
            if (__tmpRow) {
              __tmpRow.width = this.tableWidth - this.columnsWidth
            } else {
              row.push({ key: '__tmp', width: this.tableWidth - this.columnsWidth })
            }
          })
        }else{
          let __tmpCol = this.columns.findIndex(v => v.key === '__tmp')
          if(__tmpCol > -1){
            this.columns.splice(__tmpCol, 1)
          }
          this.localData.forEach(row => {
            let __tmpRow = row.findIndex(v => v.key === '__tmp')
            if (__tmpRow > -1) {
              row.splice(__tmpRow, 1)
            }
          })
        }
      })
    },
    LiTopRow(liTop, row){
      for(let key in liTop){
        if(row[key] === undefined){
          if(typeOf(liTop[key]) === 'object'){
            liTop[key].rowspan = this.GetallCountByRow()
          }else{
            let tmp = {value: liTop[key], rowspan: this.GetallCountByRow()}
            liTop[key] = tmp
          }
          row[key] = liTop[key]
        }
      }
      return row
    },
    GetallCountByRow(){
      let lastNodes = []
      const RecursivelyChildren = (row, parent) => {
        if (row.children && row.children.length) {
          row.children.forEach(child => {
            RecursivelyChildren(child, row)
          })
        }else{
          lastNodes.push(row)
        }
      }

      let current = this.data[this.currentRowIndex]
      if(current.children && current.children.length){
        current.children.forEach(row => {
          RecursivelyChildren(row)
        })
      }
      return lastNodes.length
    },
    OrderRowByColumns (row) {
      let tmp = []
      this.columns.forEach(col => {
        if (col.type === 'index') {
          tmp.unshift({ index: true, width: 60, align: 'center' })
        }
        if (row.hasOwnProperty(col.key)) {
          tmp.push(row[col.key])
        }
      })
      return tmp
    },
    HandleColumnsChange (columns) {
      this.columnsWidth = columns.map(cell => cell.key != '__tmp' && cell.width).reduce((a, b) => a + b, 0);
    },
    HandleResize () {
      this.tableWidth = this.$el.offsetWidth - 2;
    }
  },
  mounted () {
    if (this.width) {
      this.tableWidth = this.width - 2;
    } else {
      this.tableWidth = this.$el.offsetWidth - 2;
      this.localTableWidth = this.tableWidth
    }
    on(window, "resize", this.HandleResize);
  },
  beforeDestroy () {
    off(window, "resize", this.HandleResize);
  },
  watch: {
    '$store.state.app.shrink'(val){
      if(val){
        this.tableWidth += 40
      }else{
        this.tableWidth = this.localTableWidth
      }
    },
    data: {
      handler: "BuildTableDataByDataAndColumns",
      immediate: true,
      deep: true
    },
    columns: {
      handler: "HandleColumnsChange",
      deep: true,
      immediate: true
    },
    tableWidth(){
      this.CalcTmpCol()
    },
    columnsWidth () {
      this.CalcTmpCol()
    }
  }
};
</script>
