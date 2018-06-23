import Vue from 'vue';
import axios from '@/utils/fetch';
const app={
  state:{
    Loadings:false,
    articleInfo:{}
  },
  actions:{
    getArticle({commit},param){
      return new Promise((resolve,reject)=>{
        axios.get('article/info',param)
          .then(res=>{
            commit('GETARTICLE',res.data);
            resolve(res.data)
          }).catch(err=>{
            reject(err)
        })
      })
    }
  },
  mutations:{
    Alerts(){
      alert('请登录')
    },
    GETARTICLE(satate,info){
      satate.articleInfo=info
    }
  }
};
export  default app
