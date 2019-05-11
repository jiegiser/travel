import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
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
    }, {
      // 动态路由 id为参数
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
