<template>
	<div v-if=msg.length>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in msg" :key="index" class='slide'>
    		<img :src="slide" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 </div>
	  
</template>

<script>
  export default {
    props:['msg'],

    data() {
      return {
        swiperOption: {
		  	loop : true,
		  	loopFillGroupWithBlank: true,
		   pagination: {
            el: '.swiper-pagination'
         },
          autoplay:{
          	 disableOnInteraction: false
          }
        }
      }
    }
   
  }
</script>
<style scoped>
	.swiper-slide {
    height:127px !important;	
    background: #fff;
    }
    .swiper-container{
    	position: fixed;
    	top:30px;
    }
  .swiper-slide>img{
	  width: 100%;
    height: 100%;
  }
</style>