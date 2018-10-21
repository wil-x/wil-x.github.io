<template>
  <div class="navbar flex-row space-between">
    <a class="logo" href="/" />
    <div class="menu">
      <dropdown :menus="menus">
        <i class="iconfont icon-ic_menu" />
      </dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from './dropdown'

export default {
  data() {
    return {
      menus: [
        { url: '/', title: '首页' },
        { url: '/archive/', title: '归档' },
      ]
    }
  },
  components: {
    Dropdown,
  },
}
</script>

<style lang="stylus" scoped>
  @require '../styles/config'
  @require '../styles/function'

  .navbar
    align-items flex-end
    height px2rem(50)
    padding 0 px2rem(30)

  .logo
    background url(../public/logo.svg)
    height px2rem(15)
    width px2rem(60)

  .menu
    .icon-ic_menu
      font-size px2rem(18)
</style>
