<template>
    <ul class="list">
        <li
          class="item"
          v-for="item of letter"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
         {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 页面渲染完更新之后执行
    // 元素离顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letter () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // 向外触发事件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 延迟16毫秒执行
        this.timer = setTimeout(() => {
          // 获取到手离开屏幕的高度，他是获取到设备的最顶部到手指离开时的高度，这里高度需要减去顶部的header
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index - 1])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .44rem
    text-align: center
    color: $bgColor
</style>
