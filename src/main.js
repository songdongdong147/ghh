// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引入vuex
import store from './vuex'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 挂载到实例上//
  store,
  components: { App },
  template: '<App/>'
})
