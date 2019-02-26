
import Vue from 'vue'
import App from './App'

// 兼容安卓4.4
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render:h=>h(App)
})




