<template>
  <div class="artcile-box" v-loading="Loadings">
    <h4 class="el-icon-arrow-left bgfff ww1" @click="goback($router)" flexcont>
      <span class="ww1 text-center block font26">{{getArticleList.title}}</span>
    </h4>
    <h5>ID:{{getArticleList.id}}</h5>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        async created(){
          this.$store.state.app.Loadings=true;
          await this.$store.dispatch('getArticle',{id:this.$route.params.id});
          this.$store.state.app.Loadings=false
        },
      computed:{
        ...mapGetters(['Loadings','getArticleList'])
      },
      watch:{
         async $route(){
           this.$store.state.app.Loadings=true;
           await this.$store.dispatch('getArticle',{id:this.$route.params.id});
           this.$store.state.app.Loadings=false
         }
      }
    }
</script>

<style scoped>
  .artcile-box{
    .el-icon-arrow-left{p:16px 0;fz:38px;align-items: center;}
  }
</style>
