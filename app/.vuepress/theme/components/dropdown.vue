<template>
  <div class="dropdown">
    <slot></slot>
    <div class="main">
      <ul>
        <li v-for="menu in menus">
          <a :href="menu.url || 'javascript:void(0);'">{{ menu.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: [ 'menus' ],
}
</script>
<style lang="stylus" scoped>
  @require '../styles/config'
  @require '../styles/function'

  .dropdown
    line-height 1
    position relative

    &:hover
      .main
        display block

  .main
    display none
    position absolute
    padding-top px2rem(16)
    right 0
    top 100%

  ul
    box-shadow 0 px2rem(2) px2rem(8) rgba($colorBlack, .2)
    background $colorWhite
    list-style none
    margin 0
    padding px2rem(4) 0

    a
      background $colorWhite
      color $colorBlack
      display block
      font-size px2rem(12)
      height px2rem(30)
      line-height: px2rem(30)
      text-align center
      transition background .5s, color .5s
      width px2rem(88)

      &:hover
        background $colorLightBack
        color $colorWhite
        text-decoration none
</style>
