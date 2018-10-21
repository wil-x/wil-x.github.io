<template>
  <div class="container">
    <navbar />
    <div class="main flex-col col-center">
      <div class="hd">- 归档 -</div>
      <div class="bd">
        <a class="post" :href="post.path" v-for="post in posts">
          <div class="post-hd flex-row space-between col-center">
            <div class="title">{{ post.title }}</div>
            <div class="date">{{ post.lastUpdated | dateDiagonal }}</div>
          </div>
          <div class="content" v-html="post.excerpt" />
        </a>
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
  computed: {
    posts() {
      const posts = this.$site.pages.filter(i => i.frontmatter.layout === 'post')
      posts.sort((prev, next) => prev.lastUpdated < next.lastUpdated)
      return posts
    }
  }
}
</script>
<style lang="stylus" scoped>
  @require '../styles/config'
  @require '../styles/function'

  .container
    background $colorLightGray

  .hd, .bd
    width px2rem(640)

  .hd
    font-size px2rem(24)
    font-weight bold
    line-height lineHeight(24, 35)
    margin-top px2rem(14)
    text-align center

  .bd
    padding-bottom: px2rem(24)

  .post
    background $colorWhite
    display block
    margin-top px2rem(24)
    padding px2rem(30) px2rem(50)
    text-decoration none

    .title
      color $colorBlack
      font-size px2rem(16)
      line-height lineHeight(16, 23)

    .date
      color $colorBlack
      font-size px2rem(14)
      line-height lineHeight(14, 20)

    .content
      color $colorGray
      margin-top px2rem(15)
      letter-spacing px2rem(.4)
      line-height lingHeight(14, 24)
      text-align justify
</style>
