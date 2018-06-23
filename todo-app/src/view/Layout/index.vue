<template>
  <div>
    <header-bar></header-bar>
    <router-view class="main-container"></router-view>
    <footer-bar></footer-bar>

  </div>
</template>

<script>
  import footerBar from './footerBar';
  import headerBar from './headerBar'
    export default {
        name: "index",
      components:{footerBar,headerBar}
    }
</script>

<style scoped>

</style>
