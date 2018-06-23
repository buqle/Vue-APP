<template>
    <div class="pub-head bgfff" flexcont flexcont2>
      <i class="el-icon-arrow-left" @click="goback($router)"></i>
      <p class="text-center">{{title}}</p>
    </div>
</template>

<script>
    export default {
        props:{
          title:{
            type:String,
            default:'今日头条'
          }
        }
    }
</script>

<style scoped>
  .pub-head{
    i{fz:48px;}
    p:24px;p{c:#555;fz:38px;w:100%}bdb:1px solid #ccc;
  }
</style>
