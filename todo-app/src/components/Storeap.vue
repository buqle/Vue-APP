<template>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhaopianPhoto"></use>
      </svg>
     <!-- <p>原来的名字:{{getName}}</p>
      <p>反转名字{{getNames}}</p>
      <button @click="changeName">更新名字</button>
      <button @click="changeNameAsync">异步修改名字 一秒后</button>-->
    </div>
</template>

<script>
    export default {
        name: "login",
      /*computed:{
          getName(){
            return this.$store.state.name
          },
        getNames(){
            return this.$store.getters.getReverName
        }
      },
      methods:{
          changeName(){
            this.$store.commit('updateName')
          },
        changeNameAsync(){
            this.$store.dispatch('updateNameAsync')
        }
      }*/
    }
</script>

<style scoped>

</style>
