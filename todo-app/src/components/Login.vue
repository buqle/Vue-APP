<template>
    <div class="text-center login-box bgfff"  v-loading="Loadings">
      <i class="el-icon-error pos-b" @click="closes"></i>
      <div class="login-box1">
        <p><el-input placeholder="请输入用户名" v-model="name"></el-input></p>
        <p :class="{'shake':username_msg,}" class="animated font19">{{username_msg}}</p>
        <p><el-input placeholder="请输入密码" v-model="word" type="password"></el-input></p>
        <p :class="{'shake':word_msg,}" class="animated font19">{{word_msg}}</p>
        <p><el-button type="primary" round size="400" @click="login">登录</el-button></p>

      </div>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
        data(){
          return{
            name:'',
            word:'',
            username_msg:'',
            word_msg:'',
            aa:this.$store.state.app.Loadings
          }
        },
    computed:{
      ...mapGetters([
       'Loadings'
      ])
    },
      methods:{
          closes(){
            this.$emit('close')
        },
       async login(){
            if(!this.name){
              this.username_msg='请输入用户名';
              return;
            }else{
              this.username_msg='';
            }
            if(!this.word){
              this.word_msg='请输入密码'

            }else if(this.word!='123456'&&this.word){
              this.word_msg='密码错误';

            }else {
              this.word_msg=''
            };
            if(this.word_msg){
              return false;
            }

            this.$store.state.app.Loadings=true
            try{
              await this.$store.dispatch('login',{
                username:this.name,
                password:this.word
              })
            }catch (e){

            }
            this.$store.state.app.Loadings=false;
            this.$set(this.$store.state.user.footerBarList,3,{title:'我的','icon':'icon-shezhigengxin',path:'/account'});
            this.$emit('close')
        }
      }

    }
</script>

<style scoped>
  .el-input{w:65vw;h:60px;}
  .login-box{
    size:100%;position: fixed;t:100%;l:0;z-index:5; transition: top .2s ease-out;
    .el-icon-error{t:30px;r:30px;}
    .login-box1{mt:60px;}
    p.animated{mb:4px;c:red;}
  }
  .animated {
    -webkit-animation-duration:1s;
    animation-duration:1s;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
  }
@keyframes shake {
     0%,to {
       -webkit-transform:translateZ(0);
       transform:translateZ(0)
     }
     10%,30%,50%,70%,90% {
       -webkit-transform:translate3d(-10px,0,0);
       transform:translate3d(-10px,0,0)
     }
     20%,40%,60%,80% {
       -webkit-transform:translate3d(10px,0,0);
       transform:translate3d(10px,0,0)
     }
   }.shake {
      -webkit-animation-name:shake;
      animation-name:shake
    }
  .animated.infinite {
    -webkit-animation-iteration-count:infinite;
    animation-iteration-count:infinite
  }
</style>
