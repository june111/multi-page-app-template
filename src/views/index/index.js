
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()


Vue.use(VueI18n)
const i18n = new VueI18n({
    locale:'cn',
    messages:{
        'cn':require('./lang/cn.json'),
        'en':require('./lang/en.json')
    }
})

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  i18n,
  render:h=>h(App)
})




