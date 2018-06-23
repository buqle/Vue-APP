<template>
  <div>
    <top></top>
    <content-box></content-box>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import footerBar from '@/view/Layout/footerBar';
  import Top from './TopBar';
  import ContentBox from './Content'
    export default {
        name: "index",
      components:{footerBar,Top,ContentBox}
    }
</script>

<style scoped>

</style>
