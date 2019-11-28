<template>
  <div :class="cls">
    <div :class="cls+'-header'"></div>
    <div :class="cls+'-content'" :style="{height:$store.state.app.contentHeight+'px'}">
      <div :class="cls+'-menu'">
        <waterfall :sider-width="200" :container-height="$store.state.app.contentHeight" :container-width="$store.state.app.contentWidth"  @on-select="turnToPage" :menu-list="menuList"></waterfall>
      </div>
      <div :class="cls+'-right'">
        <div :class="cls+'-tag-wrap'"></div>
        <div :class="cls+'-view'">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuList from '@/router/menu.js'
import waterfall from './km-menu.vue'
const cls = 'km-layout'

export default {
  name: 'KmLayout',
  data () {
    return {
      cls,
      menuList
    }
  },
  components: { waterfall },
  methods: {
    turnToPage (route) {
      this.$router.push({ name: route.path })
    }
  },
  mounted () {
    
  }
}
</script>
