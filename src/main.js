import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/index.css'
import ScrollAnimation from './ScrollAnimation'

Vue.config.productionTip = false

Vue.directive('scrollanimation', ScrollAnimation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
