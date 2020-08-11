<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center"> 购物街 </div> </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <home-swiper :banners="banners"> </home-swiper>
      <recommend-view :recommends="recommends"> </recommend-view>
      <feature-view> </feature-view>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                    @tabClick="tabClick">

      </tab-control>
      <goods-list :goods="showGoods"> </goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"> </back-top>

  </div>

</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import {getHomeMultidata,getHomeGoods} from "@/network/home";
  import RecommendView from "./childComps/RecommendView";
  import GoodsList from "@/components/content/goods/GoodsList";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "@/components/content/tabControl/TabControl";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";



  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentIndex:'pop',
        isShow:false
      }
    },

    created() {
      //1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')

      this.getHomeGoods('new')

      this.getHomeGoods('sell')
    },
    computed:{
      showGoods(){
        return this.goods[this.currentIndex].list
      }
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentIndex = 'pop'
            break
          case 1:
            this.currentIndex = 'new'
            break
          case 2:
            this.currentIndex = 'sell'

        }
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isShow = -position.y > 1000
      },
    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

</style>
