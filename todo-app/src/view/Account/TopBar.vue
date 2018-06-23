<template>
    <div class="top-bar">
      <div class="top-bar-con1">
        <div class="top-bar-con2" flexcont flexcont2>
          <img :src="user.avatar" alt="" v-if="user.name">
          <svg class="icon" aria-hidden="true" v-else>
            <use xlink:href="#icon-xiangji"></use>
          </svg>
          <i v-if="!user.name" @click="login">点击登录</i>
          <i v-else>{{user.name}}</i>
        </div>
        <div class="top-bar-con3" flexcont>
          <p v-for="(item,index) in infoList" class="text-center fff font19">
           <span class="block">{{item.num}}</span>
            {{item.tit}}
          </p>
        </div>
      </div>
      <div class="top-bar-con3 text-center bgfff font19 top-bar-con4"  flexcont >
        <p v-for="(item,index) in resList" flexcont class="v-p" @click="skipFun(index)">
          <svg class="icon" :class="[item.icon]" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`"></use>
          </svg>
          {{item.tit}}
        </p>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
    export default {
      data(){
        return{
          infoList:[
            {num:0,tit:'动态'},
            {num:0,tit:'关注'},
            {num:0,tit:'粉丝'}
          ],
          resList:[
            {icon:'icon-wenjian',tit:'收藏'},
            {icon:'icon-Pageswengao',tit:'历史'},
            {icon:'icon-duanxin',tit:'推送'}
          ]
        }
      },
      methods:{
        login(){
          this.$store.state.user.isLogin=true
        },
        skipFun(index){
          this.$router.push({name:'我的记录',params:{type:index}});
          //this.$message('请先登录');
        }
      },
        computed:{
          ...mapGetters(['user','isLogin'])
        }

    }
</script>

<style scoped>
  .top-bar-con1{p:28px 0;bg:#777;}
  .top-bar-con2{.icon{size:110px;}pl:40px;c:#fff;i{ml:8px;}img{size:14vw;bdrs:50%;}}
  .top-bar-con3{justify-content: space-around;mt:10px;}
  .top-bar-con4{mt:0;p:16px 0;}
  .v-p{flex-direction: column;.icon{size:60px;}.icon-Pageswengao,.icon-duanxin{size:50px;mt:10px;}}

</style>
