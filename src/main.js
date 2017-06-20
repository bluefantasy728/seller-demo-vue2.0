// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import App from './App'
import Goods from './components/Goods/Goods'
import Ratings from './components/Ratings/Ratings'
import Seller from './components/Seller/Seller'
import VResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VResource)
Vue.use(VRouter)
const router = new VRouter({
  mode: 'history',
  linkActiveClass: 'v-active',
  routes: [
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ]

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
