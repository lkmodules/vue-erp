<template>
  <div :class="cls">
    <div :class="cls+'-one'">
      <div
        :class="cls+'-one-item'"
        v-for="(menu, index) in menuList"
        :key="index"
        @mouseenter="getFallList(menu)"
      >
        <Icon :type="menu.icon" size="20"></Icon>
        <span :class="cls+'-one-title'">{{menu.name}}</span>
      </div>
    </div>
    <div :class="cls+'-mask'" v-show="showFall" :style="{width:containerWidth+'px',left:siderWidth+'px'}"></div>
    <div :class="cls+'-fall'" :style="{width:fallWidth*col+'px',left:siderWidth+'px'}" v-show="showFall" @mouseleave="showFall=false">
      <div
        :class="cls+'-fall-item'"
        v-for="(fall, index) in fallList"
        :key="index"
        :style="{left:fall.x+'px',top:fall.y+'px',width:fallWidth+'px',paddingBottom:fallPadding+'px'}"
      >
        <div :class="cls+'-two'" :style="{height:twoHeight+'px',lineHeight:twoHeight+'px'}"><Icon :class="cls+'-icon'" :type="fall.icon||'md-information'"></Icon>{{fall.name}}</div>
        <div
          :class="cls+'-three'"
          v-for="(three, index) in fall.children"
          :key="index"
          :style="{height:threeHeight+'px',lineHeight:threeHeight+'px'}"
          @click="handleThreeClick(three)"
        ><Icon :class="cls+'-icon'" size="14" :type="three.icon||'md-information'"></Icon>{{three.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
const cls = 'km-waterfall'
export default {
  name: 'Waterfall',
  data () {
    return {
      cls,
      fallList: [],
      col: 0,
      showFall: false
    }
  },
  props: {
    // 菜单
    menuList: {
      type: Array
    },
    // 单列列宽
    fallWidth: {
      type: Number,
      default: 200
    },
    // 二级标题高度
    twoHeight: {
      type: Number,
      default: 50
    },
    // 三级标题高度
    threeHeight: {
      type: Number,
      default: 36
    },
    // 菜单间距
    fallPadding: {
      type: Number,
      default: 50
    },
    containerHeight: Number,
    containerWidth: Number,
    siderWidth: Number
  },
  methods: {
    getFallList (menu) {
      this.showFall = true
      let fallList = menu.children
      let three = 0
      let col = 1
      fallList.forEach(v => {
        let item = this.fallPadding + this.twoHeight + this.threeHeight * v.children.length
        if (three + item > this.containerHeight) {
          col += 1
          three = 0
        }
        this.col = col
        v.x = (col - 1) * this.fallWidth
        v.y = three
        three += item
      })
      this.fallList = fallList
    },
    handleThreeClick (three) {
      this.showFall = false
      this.$emit('on-select', three)
    }
  }
}
</script>

<style lang="less">
@cls: ~"km-waterfall";
.@{cls} {
  width: 100%;
  height: 100%;
  position: relative;
  &-one {
    width: 100%;
    height: 100%;
  }
  &-one-item {
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    padding: 10px;
    padding-right: 20px;
    width: 100%;
    color: #8f9bb3;
    font-size: 15px;
    & .ivu-icon {
      margin-right: 10px;
    }
  }
  &-one-title {
    // width: 30px;
    display: inline-block;
    float: right;
  }
  &-fall {
    height: 100%;
    position: fixed;
    top: 76px;
    background: #fff;
    z-index: 1001;
  }
  &-mask{
    height: 100%;
    position: fixed;
    top: 76px;
    background-color: rgba(55, 55, 55, 0.6);
    z-index: 1001;
  }
  &-icon{
    margin-right: 20px;
  }
  &-fall-item {
    width: 200px;
    padding: 0px 20px;
    position: absolute;
  }
  &-two {
    font-size: 14px;
    font-weight: 600;
    color: #1a2138;
  }
  &-three {
    color: #8f9bb3;
    cursor: pointer;
    font-size: 14px;
    margin-left: 15px;
    &:hover{
      color: #1A92FD;
    }
  }
}
</style>
