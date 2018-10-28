<template>
  <div class="container flex-row">
    <div
      class="pics"
      :style="picStyles" />
    <div class="main flex-col">
      <navbar />
      <div class="post flex-col row-center col-center">
        <div class="post-ctn">
          <div class="date">{{ lastPost.lastUpdated | date }}</div>
          <h1 class="title">{{ lastPost.title }}</h1>
          <div class="content" v-html="lastPost.excerpt" />
          <a class="readmore" :href="lastPost.path">阅读更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'

export default {
  data() {
    return {
      picStyles: {},
    }
  },
  components: {
    Navbar,
  },
  computed: {
    lastPost() {
      const posts = this.$site.pages.filter(i => i.frontmatter.layout === 'post')
      posts.sort((prev, next) => prev.lastUpdated < next.lastUpdated)
      return posts[0]
    },
  },
  methods: {
    asyncLoadImg() {
      const img = new Image()
      img.onload = (e) => {
        this.picStyles = {
          backgroundImage: `url(${e.currentTarget.src})`,
          backgroundSize: 'cover'
        }
      }
      img.src = 'https://source.unsplash.com/random/1600x900'
    },
  },
  mounted() {
    this.asyncLoadImg()
  }
}
</script>

<style lang="stylus" scoped>
  @require '../styles/config'
  @require '../styles/function'

  .pics
    background-image url(../public/loading.gif)
    background-position center
    background-repeat no-repeat
    background-size 60px
    flex 4

  .main
    flex 6

  .post
    flex 1

    .post-ctn
      width px2rem(540)

    .date
      color $colorGray
      line-height lineHeight(unit($fontSize, ''), 20)

    .title
      font-size px2rem(36)
      line-height lineHeight(36, 51)
      margin px2rem(7) 0px px2rem(30)

    .content
      color $colorGray
      line-height lineHeight(unit($fontSize, ''), 24)
      letter-spacing px2rem(.4)
      text-align justify

    .readmore
      color $colorBlack
      display block
      line-height lineHeight(unit($fontSize, ''), 20)
      margin-top: px2rem(24)
      text-align right
</style>
