import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/index.css'
import ScrollAnimation from './ScrollAnimation'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.directive('scrollanimation', ScrollAnimation)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
