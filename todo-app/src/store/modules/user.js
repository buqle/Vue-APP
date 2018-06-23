import {Cookie} from "@/utils/storage";
import axios from '@/utils/fetch';
const user={
  //初始化 类似vue的data
  state:{
    isLogin:false,
    user:{
      name:Cookie.get('username') || '',
      avatar:Cookie.get('avatar') || ''
    },
    footerBarList:[
      {title:'首页',icon:'icon-jiating',path:'/home'},
      {title:'西瓜视频',icon:'icon-shipin',path:'/video'},
      {title:'头条',icon:'icon-zhaopianPhoto',path:'/headline'},
      {title:`${Cookie.get('username')?'我的':'未登录'}`,icon:`${Cookie.get('username')?'icon-shezhigengxin':'icon-yinsi'}`,path:'/account'}
    ]
  },

  //类似vue的methods异步方法
  actions:{
    login({commit},parms){
      return new Promise((resolve,reject)=>{
        axios.post('login',parms)
          .then(res=>{
            console.log(res);
            commit('LOGIN',res.data);
            resolve(res.data)
          }).catch(err=>{
            reject(err)
        })
      })
    },
    esc({commit}){
      commit('ESC')
    }
  },

  mutations:{
    LOGIN(state,data){
      state.user={
        name:data.username,
        avatar:require('../../assets/5.png')
      };
      Cookie.set({
        username:data.username,
        avatar:require('../../assets/5.png')
      })
    },
    ESC(state){
      state.user={
        name:'',
        avatar:''
      };
      Cookie.remove(['username','avatar'])
    }
  }


};
export  default  user
