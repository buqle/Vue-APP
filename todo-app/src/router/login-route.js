import store  from '@/store'//调用index.js 默认不用写
import Vue from 'vue';
import {router} from "./index";

router.beforeEach((to,from,next)=>{
  if(to.meta.login){//判断前往的页面是否要登录
    if(store.state.user.user.name){
      next()
    }else {
      store.commit('Alerts')
      store.state.user.isLogin=true
    }
  }else {
    if(to.meta.page){

    }next()
  }

});
router.afterEach((to,from)=>{
  if(to.meta.page){
   store.state.app.Loadings=false
  }
  document.title=to.name;
  console.log(to)
});
export  default router;
