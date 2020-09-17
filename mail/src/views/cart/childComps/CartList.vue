<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item :itemInfo="item" v-for="(item,index) in GoodsList" :key="index"> </cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  export default {

    name: "CartList",
    activated() {
      this.$refs.scroll.refresh()
    },
    components:{
      Scroll,
      CartListItem,
    },
    computed:{
      GoodsList(){
        return this.$store.state.cartList;
      },
    },

  }
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px);
  }
  .content{
    /*height: calc(100% - 44px - 49px);*/
    height: 100%;
    overflow:hidden;
  }
</style>
