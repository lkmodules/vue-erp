<template>
  <div :class="cls">
    <div :class="cls+'-header'"></div>
    <div :class="cls+'-content'" :style="{height:$store.state.app.contentHeight+'px'}">
      <div :class="cls+'-menu'">
        
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
const cls = 'km-layout'

export default {
  name: 'KmLayout',
  data () {
    return {
      cls
    }
  },
  methods: {},
  mounted () {
    
  }
}
</script>
