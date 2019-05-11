<template>
  <div id="app">
    <!-- name的用法：递归、缓存 、递归组件、清除滚动-->
    <!-- <route-view>显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive是只要路由渲染过的页面，会存储在内存中，再一次加载的时候，不会进行重新渲染 相当于添加了一个缓存-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
