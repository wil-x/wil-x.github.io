<template>
  <div class="container">
    <navbar />
    <div class="main flex-col col-center">
      <div class="post">
        <div class="date">{{ $page.lastUpdated | date }}</div>
        <h1 class="title">{{ $page.title }}</h1>
        <Content class="content" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'

export default {
  components: {
    Navbar,
  },
  mounted() {
    console.log(this.$page)
  }
}
</script>
<style lang="stylus" scoped>
  @require '../styles/config'
  @require '../styles/function'

  .post
    margin-top px2rem(65)
    width px2rem(640)

    .date
      color $colorGray
      font-size px2rem(14)
      line-height lineHeight(14, 20)

    .title
      font-size px2rem(36)
      line-height lineHeight(36, 51)
      margin px2rem(7) 0px px2rem(30)

    .content
      color $colorGray
      margin-top px2rem(15)
      letter-spacing px2rem(.4)
      line-height lingHeight(14, 24)
      text-align justify
</style>
