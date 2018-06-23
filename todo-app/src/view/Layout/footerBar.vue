<template>
    <div class="foot ww1 bgfff">
      <ul flexcont class="text-center">
        <router-link tag="li" v-for="(item,index) in footerBarList" :to="item.path" :class="[{'active':($route.matched[0].path||$route.matched[1].path)===item.path,},item.icon]">
          <h4 flexcont>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
          </h4>
          <p class="font24">{{item.title}}</p>
        </router-link>
      </ul>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "footer-bar",
      computed:{
          /*getFootlist(){
            return this.$store.state.user.footerBarList
          }*/
        ...mapGetters([
          'footerBarList',
          'user'
        ])
      }
    }
</script>

<style scoped>
  .foot{
    position: fixed;b:0;
    ul{
      justify-content: space-around;.icon-yinsi,.icon-shipin,.icon-shezhigengxin{.icon{size:60px;}}
      h4{h:80px;justify-content: center;align-items: center;}
    }
  }

</style>
