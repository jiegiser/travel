<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wapper">
                        <div class="button">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 对象循环，第一个为值，第二为键 -->
            <div class="area" v-for="(item,key) of cities"  :key="key" :ref="key">
                <div class="title border-bottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        // 获取对应的dom元素，进行滚动到对应的元素
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // 触发changeCity这个Action
      // this.$store.dispatch('changeCity', city)
      // 组件可以直接通过commit调用执行mutation里面的方法就行修改数据
      // this.$store.commit('changeCity', city)
      // 可以用下面的方法这样写
      this.changeCity(city)
      // 不仅可以使用<router-link></router-link>这种方法跳转，也可以使用编程式导航这种。进行push要跳转的地址就可以
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    // 将vuex的city映射到计算属性的currentCity
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    // 传入dom元素
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
