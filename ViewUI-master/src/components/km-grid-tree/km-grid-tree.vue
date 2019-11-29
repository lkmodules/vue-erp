<template>
  <div :class="cls">
    <div :class="cls+'-head'">
      <div :class="cls+'-head-tr'">
        <div
          :class="cls+'-head-tr-td'"
          v-for="(col, colIndex) in columns"
          :key="colIndex"
          :style="tdSTyle(col, colIndex)"
        >{{col.title}}</div>
      </div>
    </div>
    <div :class="cls+'-body'">
      <km-table-tree-item
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
        :row="row"
        :columns="columns"
      ></km-table-tree-item>
    </div>
  </div>
</template>
<script>
const cls = "km-grid-tree";

import KmGridTreeItem from "./km-grid-tree-item";
import { deepCopy, typeOf } from '../../utils/assist'

export default {
  name: "KmGridTree",
  components: { KmGridTreeItem },
  data() {
    return {
      cls,
      leve: 0
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    BuildTreeData() {
      this.Recursively();
    },
    Recursively(callback) {
      const RecursivelyChildren = (row, leve) => {
        row.__leve = leve;
        leve++;
        callback && callback();
        if (row.children && row.children.length) {
          row.children.forEach(child => {
            RecursivelyChildren(child, leve);
          });
        }
      };
      this.data.forEach(row => {
        this.leve = 0;
        RecursivelyChildren(row, this.leve);
      });
    },
    tdSTyle(col, colIndex) {
      let style = {};
      style.width = col.width + "px";
      if(['left', 'center', 'right'].includes(col.align)){
        style.textAlign = col.align;
      }
      return style;
    },
  },
  mounted() {
    this.$on("toggle-expand", row => this.$emit("on-toggle-expand", row));
  },
  watch: {
    data: {
      handler: "BuildTreeData",
      immediate: true
    }
  }
};
</script>