<template>
  <home-layout v-if="$page.frontmatter.layout === 'home'" />
  <archive-layout v-else-if="$page.frontmatter.layout === 'archive'" />
  <post-layout v-else-if="$page.frontmatter.layout === 'post'" />
  <page-layout v-else />
</template>
<script>
  import HomeLayout from './layouts/home'
  import PostLayout from './layouts/post'
  import ArchiveLayout from './layouts/archive'
  import PageLayout from './layouts/page'

  export default {
    components: {
      HomeLayout,
      PostLayout,
      ArchiveLayout,
      PageLayout,
    }
  }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles" lang="stylus"></style>
