<template>
    <div>
       	<Vheader>
       		home
       	</Vheader>
       	<div v-if='booold' class='zzz'>
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541583790994&di=19c1d26137bf1eb8ede818927b846b62&imgtype=0&src=http%3A%2F%2Fnn.zp365.com%2F2016gfj%2Fimages%2Floading.gif" alt="">
       	</div>
       	<template v-else>
	       	<div>
	       		<Swiper :msg="msg"/>
	       	</div>
			<div class='gethot'>
				<ul>
					<li v-for="item in gethot">
						<img :src="item.goodimg" alt="" />
						<div>
							<p>{{item.goodname}}</p>
							<p>{{item.info}}</p>
							
							<p>原价:{{item.num}}
								
							</p>
							<p>￥:{{item.price}}</p>
						</div>
					</li>
				</ul>
			</div>
		</template>
    </div> 
</template>

<script>
import Vheader from '../base/Vheader.vue'
import Swiper from '../base/swiper'

//解构赋值导出
import {getAll} from '../api'
export default {
//	异步执行  
	async created(){
		this.gethome();	
	},
  data () {
    return {
      msg:'', 
      gethot:'',
      booold:true
    }
  },
  methods:{
	async gethome(){
		let [sliders,gethot]=await getAll()
		this.gethot = gethot;
		this.msg=sliders;
		this.booold=false;
	}
  },
  mounted(){
  	
  },
  components:{
  	Vheader,
  	Swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.gethot{
		height: 458px;
		overflow-y: scroll;
		position: fixed;
		bottom: 50px;
	}
	
	.gethot>ul>li{
		width: 100%;
		height:100px;
		background:#fff;
		border-top:1px solid #000;
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
	.gethot>ul>li>img{
		width: 25%;
		height: 100%;
		margin-right: 10px;
	}
	.gethot>ul>li>div{
		width: 80%;
		height: 100%;
	}
	.gethot>ul>li>div>p{
		display: inline-block;
		overflow: hidden;
		width: 54%;
		text-overflow: ellipsis;
		white-space: nowrap; 
	}
	.gethot>ul>li>div>p:nth-of-type(3){
		color: blue !important;
	}
	.gethot>ul>li>div>p:nth-of-type(4){
		font-weight: bold;
		font-size: 20px;
		color: red !important;
	}
	.gethot>ul>li>div>p:hover{
		color: red;
	}
	.zzz{
		width:200px;
		height:200px;
		background: blue;
		margin:200px auto;
		text-align: center;
		line-height: 200px;
		color:orange;
	}
</style>
