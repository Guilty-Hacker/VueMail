<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
  import Scroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default: 0
      }
    },
    mounted() {
      this.scroll = new Scroll(this.$refs.wrapper,{
        click:true,
        probeType: this.probeType
      })
      this.scroll.on('scroll',(postion)=>{
        this.$emit('scroll',postion)
      })
    },
    methods:{
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
