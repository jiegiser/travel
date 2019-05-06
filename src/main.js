// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 引入第三方轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
// 解决移动端border1像素边框的css文件
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 使用attach方法，绑定到body中。
fastClick.attach(document.body)
// 使用轮播组件
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 局部组件
  components: { App },
  // 下面这句话意思是将app组件渲染在页面中，可以不在这里写，直接在index里面进行书写app标签。
  template: '<App/>'
})

// 路由 <route-view>显示的是当前路由地址所对应的内容
