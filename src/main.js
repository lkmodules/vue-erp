import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.less'
import iView from '../ViewUI-master/src/index'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
