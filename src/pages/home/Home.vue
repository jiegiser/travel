<template>
<!-- 这里需要注意的是template只能包裹一个内容，如果有多个，需要在外层再加一个div -->
  <div>
    <!-- <div>home</div> -->
    <!-- 页面跳转 to里面是跳转到根路径下的list页面，就是路由里面配置-->
    <!-- <router-link to="/list">列表</router-link> -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  // 组件的名字
  name: 'Home',
  // 引入homeheader组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    // 当被挂载的时候让显示的city为最后一次显示的city
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 如果添加了keep-alive会有这个事件
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSuccc)
    },
    getHomeInfoSuccc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style>
div {
  font-size: 19px;
}
</style>
