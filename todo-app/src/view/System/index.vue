<template>
    <div class="systemcont">
      <h4 flexcont flexcont2 class="bgfff">
        <i class="el-icon-arrow-left" @click="goback($router)"></i>
        <p class="text-center">系统设置</p>
      </h4>
      <dl>
        <dt class="bgfff" @click="esc">退出登录</dt>
      </dl>
    </div>
</template>

<script>
    export default {
      mounted(){
        this.test();
        this.promiseFun()
      },
      methods:{
        esc(){
          this.$store.dispatch('esc');
          this.$set(this.$store.state.user.footerBarList,3,{title:'未登录',icon:'icon-yinsi',path:'/account'});
          this.$router.push('/account')
        },
        testSomething(){
          console.log('test1');
          return 'return test1'
        },
        async testAsync(){
          console.log('async1');
          return Promise.resolve('hello async1')
        },
        async test(){
          console.log('test start');
          const fun1=await this.testSomething();
          console.log(fun1);

          const fun2=await this.testAsync();
          console.log(fun2);

          //必须等awit的所有函数执行完毕才执行这里 这俩个最后执行
          console.log('end...')
          console.log('abbbb')
        },
        promiseFun(){
          return new Promise((resolve)=>{
            console.log('promise start');
            resolve('promise...')
          }).then((val)=>console.log('ABC'     +val));
          console.log('all end')
        }
      }
    }
</script>

<style scoped>
  .systemcont{

    h4{
      p:24px;c:#0c7ff9;;
      .icon{size:50px;}p{fz:34px;}
    }
    dl{
      mt:16px;
      dt{
        p:18px 24px;fz:25px;bdb:1px solid #ddd;
      }
    }

  }

</style>
