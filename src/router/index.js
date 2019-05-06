import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    // 当用户访问根目录的时候，<router-view>显示home组件
    {
      path: '/',
      // 路由名字
      name: 'home',
      component: Home
    }, {
      path: '/city',
      // 路由名字
      name: 'City',
      component: City
    }
  ]
})
