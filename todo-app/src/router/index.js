import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
Router.prototype.animate=0;
const _import=file=>()=>import('@/components/'+file+'.vue');
const _imports=file=>()=>import('@/view/'+file+'.vue');
export const constanRouterMap=[
  {
    path:'/',
    name:'首页',
    meta:{page:true},
    component:_imports('Layout/index'),
    redirect: '/home',
    children: [
      { path: 'home', component: _imports('Home/index'), name: '首页' }
    ]
  },
  {
    path:'/video',
    meta:{page:true},
    component:_imports('Layout/index'),
    redirect:'/',
    children:[{
      path:'/',component:_imports('Video/index'),name:'视频'
    }]
  },
  {
    path:'/headline',
    meta:{page:true},
    component:_imports('Layout/index'),
    redirect:'/',
    children:[
      {path:'/',component:_imports('Headline/index'),name:'头条'}
    ]
  },
  {
    path:'/account',
    meta:{page:true},
    component:_imports('Account/index'),
    name:'个人中心'
  },
  {
    path:'/search',
    name:'搜索',
    meta:{slide:1},
    component:_imports('Search/index')
  },
  {
    path:'/article/:id',
    name:'文章',
    meta:{slide:1},
    component:_imports('Article/index')
  },
  {
    path:'/system',
    name:'系统设置',
    meta:{
      slide:1,
      login:true
    },
    component:_imports('System/index')
  },
  {
    path:'/record',
    name:'我的记录',
    meta:{
      slide:1,
      login:true
    },
    component:_imports('Record/index')
  }
];

export  const router=new Router({
  routes:constanRouterMap
})
