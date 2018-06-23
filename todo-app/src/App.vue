<template>
  <div id="app">
    <transition :name="animate">
      <router-view id="view"/>
    </transition>

    <login :class="{'act':isLogin}" @close="$store.state.user.isLogin=false"></login>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Login from '@/components/Login'
export default {
  name: 'App',
  components:{Login},
  data(){
    return{
      animate:''
    }
  },
  watch:{
    $route(to,from){
      let animate=this.$router.animate||to.meta.slide
      if(!animate){
        this.animate=''
      }else {
        this.animate=animate==1?'slide-left'
                    :animate==2?'slide-right':
                    animate==3?'slide-top':
                    animate==4?'slide-bottom':''
      }
      this.$router.animate=0
    }
  },
  computed:{
    ...mapGetters([
      'isLogin','Loadings'
    ])
  }
}
</script>

<style>
#view{
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  size:100%;position: absolute;t:0;l:0;
}
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-100%, 0);
  }




  #app .act{opacity: 1;t:0;}
  i{    font-style: normal;}
  .bgfff{bg:#fff;}
  .clear{zoom:1;}
  .clear:after {
    content: "";
    display: block;
    clear: both;}
  a{td:none}
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  header,
  nav,
  section,
  article,
  aside,
  footer,
  figure,
  figcaption,
  menu,
  button {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #f4f4f4;  font-family: "Helvetica Neue", "Microsoft Yahei", sans-serif;
    w:100vw;overflow-x: hidden;
  }
  li{list-style: none;}
  .icon {
    width:80px; height:80px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  [flexcont]{d:flex;}
  [flexcont2]{   align-items: center;}
  [flexcont3]{justify-content: center;align-items: center;}
  * {
    box-sizing: inherit;

  &:before,
  &:after {
     box-sizing: inherit;
   }
  }
  img{content: normal!important;}
  [aspectratio]{
    position: relative;
  }
  [aspectratio]::before{
    content:'';display: block;width: 1px;margin-left: -1px;height: 0;
  }
  [aspectratio-content]{
    position: absolute;top:0;left: 0;
    right: 0;bottom: 0;width: 100%;height: 100%;
  }
  [flexcont]{display: flex;}
  .ww1{w:100vw;}
  .ww3{m:o auto;}
  .fff{c:#fff;}
  .text-center{text-align: center;}
  .text-left{text-align: left;}
  .text-right{text-align: right;}
  .font12{font-size: 12px;}
  .font13{font-size: 13px;}
  .font14{font-size: 14px;}
  .font15{font-size: 15px;}
  .font16{font-size: 16px;}
  .font17{fz:17px;}
  .font18{font-size: 18px;}
  .font19{font-size: 19px;}
  .font20{font-size: 20px;}
  .font22{font-size: 22px;}
  .font24{font-size: 24px;}
  .font25{font-size: 25px;}
  .block{display: block;}
  .inline-block{display: inline-block;}
  .cursor{cursor: pointer;}
  .bold{font-weight: bold;}
  h4{font-weight: normal}
  h5{font-weight: bold;}
  .color-ff{color: #fff;}
  .pos-a{position: relative;}
  .pos-b{position: absolute;}
  .act-one{p:20px;w:100vw;mb:.2rem;}
  .tit-pub{fz:30px;c:#000;ml:6px;}
  .font26{fz:26px;}


</style>
