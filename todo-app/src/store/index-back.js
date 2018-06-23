import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//直接导出一个Store实例
export default new Vuex.Store({
  //类似vue的data
  state:{
    name:'lmm'
  },

  //类似vue的computed计算属性
  getters:{
    getReverName:state=>{
      return state.name.split('').reverse().join('')
    }
  }
  ,

  //类似vue的methods中的同步方法 组件中使用this.$store.commit('updateName')来触发方法
  mutations:{
    updateName(state){
      state.name='newlmm'
    }
  },

  //类似vue中的methods异步方法 触发异步操作 如发送ajax请求 组件中使用$dispatch触发
  actions:{
    updateNameAsync({commit}){
      setTimeout(()=>{
        commit('updateName')
      },1000)
    }
  }


})
