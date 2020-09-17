<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list> </cart-list>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
    },
    computed:{
      cartLength(){
        return this.$store.state.cartList.length;
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
  }
</style>
