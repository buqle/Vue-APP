import axios from '@/utils/fetch';

const record={
  state:{
    types:[
      {title:'我的收藏',list:[]},
      {title:'阅读历史',list:[]},
      {title:'推送历史',list:[]}
    ],
    loading:false,
    index:0,
    loadingMore:false,
    end:false
  },
  actions:{
    getrecordList({commit,state},params={}){
      let obj=state.types.find(v=>v.title==params.title);
      console.log(obj)
      if(obj.list.length){
        return
      };//防止重复请求
      state.loading=true;
      console.log(params);
      return new Promise((resolve,reject)=>{
        axios.get('record/list',params)
          .then(res=>{
            state.loading=false;
            if(res.data.list.length<11){
              state.end=true
            };
            commit('GETRECORDLIST',res.data.list);
            resolve(res.data.list)
          }).catch(err=>{
            reject(err)
        })
      })

    }
  },
  mutations:{
    GETRECORDLIST(state,list){
     state.types[state.index].list=state.types[state.index].list.concat(list)//concat连接多个数组
    }
  }
};
export  default record;
