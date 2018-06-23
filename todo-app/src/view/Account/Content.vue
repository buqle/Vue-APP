<template>
  <div class="content">
    <dl>
      <dt class="bgfff pos-a" flexcont @click="$router.push
      ('/system')">系统设置 <i class="el-icon-arrow-right pos-b"></i></dt>
    </dl>
  </div>
</template>

<script>
    export default {
        name: "body"
    }
</script>

<style scoped>
  .content{
    dl{mt:20px;dt{p:10px 16px;align-items: center;i{r:0;}}}
  }
</style>
