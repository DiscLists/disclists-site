import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/index.css'
import ScrollAnimation from './ScrollAnimation'
import i18n from './i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(fas)
library.add(far)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.directive('scrollanimation', ScrollAnimation)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
