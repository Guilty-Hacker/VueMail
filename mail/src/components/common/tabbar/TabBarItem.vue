<template>
  <div class="table-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"> </slot></div> <!-- 字体控制 -->
    <div v-else><slot name="item-icon-active"> </slot></div>  <!-- 字体控制 -->
    <div :style="activeStyle"><slot name="item-text"> </slot></div> <!-- 导航文字 -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
        // isActive:true,
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} :{}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red',
      }
    },
    methods:{
      itemClick(){
        // 点击改变路径
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;

    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;

    box-shadow: 0 -2px 1px rgba(100,100,100,0.13);
  }
  .table-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .table-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
