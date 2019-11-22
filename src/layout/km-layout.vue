<template>
  <div :class="cls">
    <div :class="cls+'-header'"></div>
    <div :class="cls+'-content'">
      <div :class="cls+'-menu'"></div>
      <div :class="cls+'-right'">
        <div :class="cls+'-tag-wrap'"></div>
        <div :class="cls+'-view'"></div>
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
  methods: {}
}
</script>
