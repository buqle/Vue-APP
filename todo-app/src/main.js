// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router/login-route'//路由

import axios from 'axios';//cnpm install axios -S cnpm install qs -S
Vue.prototype.$http = axios;

import VuexStore from './store/index';//vuex

import './utils/iconfont';//icon

import {Cookie} from "@/utils/storage";//获取cookie
Vue.prototype.Cookie=Cookie;

Vue.use(ElementUI);//ui

//返回上一个页面 并设置动画
Vue.prototype.goback=(route)=>{
  route.animate=2;
  console.log(route);
  history.go(-1);
};

//跳转文章页
Vue.prototype.skip=(route,id)=>{
  route.push('/article/'+id)
}

//滑块组件
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueSwiper);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store:VuexStore,
  render:h=>h(App)
})
