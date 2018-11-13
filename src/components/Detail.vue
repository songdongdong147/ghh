<template>
    <div>
       <vheader :back='true'>详情页</vheader>
            <div class='gethot'>
              <p>
                <label for='name'>名称：</label>
                  <input v-model='good.goodname' id='name' type='text' />
              </p>
              <p>
                <label for='price'>原价：</label>
            <input v-model='good.price' id='price' type='text' />
              </p>
               <p>
                <label for='info'>简介：</label>
                  <input v-model='good.info' id='info' type='text' />
               </p>         
              <p>
            <label for='img'>图片：</label>
            <input v-model='good.goodimg' id='img' type='text' />
           </p>
            <p>
            <label for='img'>现价：</label>
            <input v-model='good.num' id='img' type='text' />
           </p> 
        </div>
        <button class='but' @click='modeify'>修改商品详情</button>
    </div> 
</template>

<script>
import Vheader from '../base/Vheader.vue'
import {getOne,update} from '../api'
export default {

	async created(){
	 	this.Detail();
	 },
	components:{
		Vheader
	},
  data () {
   	 return {
      good:{

      }
    }
  },
//计算属性    将获取到的跳转过来的属性   这样bookid就可以获取到数据了也就是this.$route.params.detail
  computed:{
  	bookid(){
  		return this.$route.params.detail
  	}
  },
  methods:{
  	async Detail(){
  		let detail=await getOne(this.bookid);
  		Object.keys(detail).length>0?void 0:this.$router.push('/add')
  		this.good=detail;
  	},
    modeify(){
       let data = JSON.stringify(this.good)
      update(this.bookid,data);
      this.$router.push('/add')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gethot{
    padding:10px;
  }
  label{
    display:block;
    font-size:26px;
    margin-top:20px;
  }
  input{
    width:100%;
    border:1px solid #000;
    height:30px;
    font-size:25px;
    outline:none;
    text-indent:10px;
  }
  .but{
    display:block;
    width:60%;
    height:40px;
    background:green;
    margin:10px auto;
    text-algin:auto;
    font-size:18px;
    line-height:40px; 
    color:#fff; 
  }
</style>
