<template>
 <div class="record-box">
   <pub-head title="个人收藏"></pub-head>
    <p flexcont class="bgfff">
       <span v-for="(item,index) in types" :key="index" :class="{'tab-act':index==recordIndex}" @click="actTabs(index)">
      {{item.title}}
     </span>
    </p>

   <swiper ref="Myswiper"  v-loading="loading" @slideChangeTransitionEnd="end">
      <swiper-slide v-for="(item,index) in types" :key="index">
        <section class="swperbox">
          <p v-if="!loading">昨天共阅读了{{item.list.length||0}}篇</p>
          <dl v-for="list in item.list" @click="skip($router,list.id)">
            <dt class="bgfff">{{list.title}}</dt>
            <dd class="bgfff">
              <p>{{list.intro}}</p>
            </dd>
          </dl>
        </section>
      </swiper-slide>
   </swiper>

 </div>

</template>

<script>
  import PubHead from '@/components/PubHead';
  import {mapGetters} from 'vuex';
  import {swiper,swiperSlide} from 'vue-awesome-swiper';
    export default {
      components:{swiper,swiperSlide,PubHead},
      mounted(){
        this.slidePage(this.$route.params.type)
      },
      methods:{
        slidePage(i){
          this.$store.state.record.index=i||0;
          this.$store.dispatch('getrecordList',this.types[this.recordIndex]);
          this.swiper.slideTo(i)
        },
        actTabs(i){
          this.slidePage(i);
        },
        async end(){
          this.$store.state.record.index=this.swiper.activeIndex;//第几个滑块
          this.$store.dispatch('getrecordList',this.types[this.recordIndex]);
          //console.log(this.types[this.recordIndex])
        }
      },
        computed:{
          swiper(){
            return this.$refs.Myswiper.swiper
          },
          ...mapGetters(['types','loading','recordIndex','End'])
        },

    }
</script>

<style scoped>
  .record-box{
    p{justify-content: space-around;pt:18px;fz:22px;.tab-act{c:#79a1f2;bdb:4px solid #79a1f2;}span{pb:20px;}}
  }
  .swperbox{
    p{p:18px;}
    dl{
      p{p:0;}
      dd{bdb:2px solid #ccc;}
      dt,dd{p:14px;}
    }
  }
</style>
