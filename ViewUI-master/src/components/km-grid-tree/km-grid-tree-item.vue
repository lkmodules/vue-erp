<template>
  <collapse-transition>
    <div :class="cls+'-body-tr'" @click.stop="HandleExpand">
      <div
        :class="cls+'-body-tr-td'"
        v-for="(col, colIndex) in columns"
        :key="colIndex"
        :style="tdSTyle(col, colIndex)"
      >
        <Icon
          :type="row.expand?'ios-arrow-down':'ios-arrow-up'"
          :class="cls+'-expand-icon'"
          v-if="row.children&&row.children.length&&colIndex===0"
        ></Icon>
        <div :class="cls+'-row-content'">
          <template v-if="col.renderType==='switch'">
            <i-switch v-model="row[col.key]" size="km" true-value="1" false-value="0" />
          </template>
          <template v-else-if="col.renderType==='checkbox'">
            <Checkbox v-model="row[col.key]" true-value="1" false-value="0"></Checkbox>
          </template>
          <Cell v-else-if="col.render" :row="row" :column="col" :render="col.render"></Cell>
          <span v-else>{{row[col.key]}}</span>
        </div>
      </div>
      <template v-if="row.children&&row.children.length">
        <div :class="cls+'-body'">
          <km-table-tree-item
            v-for="(child, childIndex) in row.children"
            v-show="row.expand"
            :key="childIndex"
            :row="child"
            :columns="columns"
          ></km-table-tree-item>
        </div>
      </template>
    </div>
  </collapse-transition>
</template>
<script>
import Cell from "./expand";
import CollapseTransition from "../base/collapse-transition";
import Emitter from "../../mixins/emitter";
import { deepCopy, typeOf } from '../../utils/assist'

const cls = "km-grid-tree";

export default {
  name: "KmCridTreeItem",
  components: { CollapseTransition, Cell },
  mixins: [Emitter],
  props: {
    row: {
      type: Object,
      default() {
        return {};
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      cls
    };
  },
  methods: {
    tdSTyle(col, colIndex) {
      let style = {};
      style.width = col.width + "px";
      if (colIndex === 0) {
        style.paddingLeft = this.row.__leve * 20 + 15 + "px";
      }
      if (["left", "center", "right"].includes(col.align)) {
        style.textAlign = col.align;
      }
      return style;
    },
    HandleExpand() {
      const item = this.row;
      if (item.children && item.children.length) {
        this.$set(this.row, "expand", !this.row.expand);
        this.dispatch("KmTableTreeItem", "toggle-expand", this.row);
      }
    }
  }
};
</script>
