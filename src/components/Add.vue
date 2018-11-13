<template>
    <div>
    	<!--:back='true'  定义的是判断为显示-->
       	<Vheader>商品列表</Vheader>
       	<div class="sx">
       		<div class='sous'>
		   		<i @click='gohistr' class="iconfont icon-fanhui"></i>
		   		<input type="text" class='ipt' placeholder='搜索' v-model='search'/>
       		</div>
       	</div>
       	
		<div class='gethot' >
			<div class='sous sousb' >
	       		<marquee direction="alternate" behavior="scroll" scrollamount="8" scrolldelay="0" loop="-1"  hspace="10" vspace="10">
	       			欢迎光临东东店铺，本店铺本这诚信可靠的宗旨
	       		</marquee>
       		</div>
			<div class='sous sousa souss' ref='scroll'>
	       		<span>综合
	       			<a>▲</a>
	       			<!-- <div class='zhList'>
	       				<li >
	       					综合
	       					<p></p>
	       				</li>
	       				<li @click='order'>
	       					价格降序
	       					<p></p>
	       				</li>
	       				<li>价格升序
	       					<p></p>
	       				</li>
	       			</div> -->
	       		</span>
	       		<span>销量</span>
	       		<span>视频</span>
	       		<span>筛选</span>
       		</div>
			<ul class='uls' @scroll='loadm' ref='scroll'>
					<router-link  v-if='boold'  v-for="(item,index,key) in cont" :key='key'
						:to="{name:'detail',params:{detail:item.id}}" tag="li">
						<img :src="item.goodimg" alt="" />
						<div>
							<p>{{item.goodname}}</p>
							<p>{{item.info}}</p>
							<p>原价:{{item.num}}</p>
							<p>￥:{{item.price}}&nbsp;
								<span @click.stop='add(item)'>添加</span>	
								<span @click.stop='delte(item.id)'>删除</span></p>
						</div>
					</router-link>
					<router-link  v-if='boold==false'  v-for="(item,index,key) in sousuo" :key='key'
						:to="{name:'detail',params:{detail:item.id}}" tag="li">
						<img :src="item.goodimg" alt="" />
						<div >
							<p>{{item.goodname}}</p>
							<p>{{item.info}}</p>
							<p>原价:{{item.num}}</p>
							<p>￥:{{item.price}}</p>
						</div>
					</router-link>

        <button class='btn' @click='jzgd' v-if='boold'>{{bb}}</button>
			</ul>
			<p v-if='boold==false' class='wss'>未搜索到相关商品,请重新输入!!!!</p>
		</div>
    </div> 
</template>

<script>
import Vheader from '../base/Vheader.vue'
import {listS,shouSuo,Delates} from '../api'

// 获取抛出文件方法
// 把tyoes那边所有的作为对象倒出
// * as 代表全部引入过来

// 如果单个就使用结构赋值方式倒入
import * as Types from '../vuex/mutations-Type.js'
export default {
	components:{
  		Vheader
  	},
 	async created(){
 		this.Lists();
 		this.shouSuo();
 		// this.Qgwc();
 		// this.Delates();

	},
  data (){
    return {
      delates:0,
      msg:'宋冬冬',
      search:'',
      lists:'',
      jzgds:0,
      ard:[],
      cont:[],
      saixuan:1,
      shousuo:[],
      boold:true,
      boolds:true,
      cc:true,
      bb:'加载更多',
      ss:[],
      ksk:''
    }
  },
  
  computed:{
    sousuo: function() {
      var _search = this.search;
      if (_search) {
		this.boold=false;
	        return this.shousuo.filter(function(product) {
				return  product.goodname.includes(_search);
	         })
      }else{
      	this.boold=true;
      }
      return this.shousuo;
    },
    
},

    methods:{
	
// 点击价格降序筛选
	order:function(){
		 
	},


	// 添加到购物车
	add(good){
		// console.log(this.ksk);
		// 通过this.$store.commit('事件名',提交的数据)来提交到mutations
		this.$store.commit(Types.ADD_CAR,good);
		

	},

//d

//删除列表项
// async 异步执行。  等后台先执行完以后。在执行前端删除
	async delte(id){
		await Delates(id);  //先执行后台

		// 通过过滤进行判断，当前的id不等于本身id的返回出去。进行过滤掉
		this.cont=this.cont.filter(function(options){
			return id!==options.id
		})
	},

//点击加载更多
	jzgd:function(){
		if(this.cc){
			this.jzgds++;
			this.Lists();
		}else{
			this.bb='没了'
		
		}	
		
	},

//滚动加载更多
	loadm(){
	//console.log(this.$refs.scroll.scrollTop)
    var {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
    // 判断滚动的距离大于底部的距离的时候，调用加载更多方法
    if (clientHeight+scrollTop+10>scrollHeight){
    	this.jzgd();
    	}
	},	



//搜索页
	async Lists(){
		let {aa,glist}=await listS(this.jzgds);
		this.cc=aa;
			this.cont=[...this.cont,...glist]
//	第一种写法	
//		this.cont=listss;
//		this.ard.push(this.cont)
//		var b = [].concat.apply([],this.ard)
//		this.cont=b;

//		第二种 es6扩展符写法:
		
	},
	async shouSuo(){
		let shousuo=await shouSuo();
		this.shousuo=shousuo
	},
	// async Qgwc(){
	// 	let Qgwcs = await qqgwc();

	// 	this.ksk=Qgwcs
	// },
	tj(){
		this.$router.push('/list')
	},
	gohistr(){
		this.$router.go(-1)
	}
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
	    margin-top: 50px;
	    overflow-y: scroll;
    	padding-bottom: 59px;
	}
	.gethot>ul>li{
		width: 100%;
		height:130px;
		background:#fff;
		padding-top: 8px;
		box-size: border-box;
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px;
	}
	.gethot>ul>li>img{
		width: 40%;
		height: 100%;
		margin-right: 10px;
	}
	.gethot>ul>li>div{
		width: 60%;
		height: 100%;
	}
	.gethot>ul>li>div>p{
		display: inline-block;
		overflow: hidden;
		width: 85%;
		text-overflow: ellipsis;
		white-space: nowrap; 
	}
	.gethot>ul>li>div>p:nth-of-type(3){
		color: blue !important;
	}
	.gethot>ul>li>div>p:nth-of-type(3)>span,
	.gethot>ul>li>div>p:nth-of-type(3)>a{
		color: #3e1528;
		font-size: 22px;
		font-weight: bold;
		text-decoration: underline;
	}
	.gethot>ul>li>div>p:nth-of-type(4){
		font-weight: bold;
		font-size: 20px;
		color: red !important;
	}
	.gethot>ul>li>div>p:hover{
		color: red;
	}
	.sx{
		width: 100%;
		height: 50px;
		background: #e63f57;
		position: fixed;
		top:0;
		z-index: 5555;
	}
	.ipt{
		display: block;
		width: 70%;
		height: 30px;
		background: #fff;
		padding-left: 20px;
		font-size:20px;
		box-sizing: border-box;
		margin: 10px auto;
		border-radius:20px;
		outline: none;
		border:none;
	}
	.sous{
		width: 100%;
		height: 30px;
		position: relative;
	}
	.sous>i{
		float: left;
		position: absolute;
		left:20px;
		top:3px;
		font-size: 20px;
		font-weight: bold;
	}
	.sousa{
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background: #fff;
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		/*position: fixed;*/
		justify-content: space-between;
		z-index: 555555555555555;
	}
	.souss{
		height: 40px;
	}
	.sousa>span{
		line-height: 40px;
	}
	.sousb{
		background:#e63f57;
	}
	.btn{
		display: block;
		width: 40%;
		height: 27px;
		background: #E63F57;
		border:0;
		color: #fff;
		font-size: 20px;
		margin: 0 auto;
		text-align: center;
		outline: none;

	}
	.uls{
		padding: 15px;
		width:100%;
		height:500px;
		box-sizing: border-box;
		background: #fff;
		position: fixed;
		overflow:scroll;
    	z-index: 5;	
	}
	.wss{
		color: red;
		line-height: 144px;
		font-weight: bold;
		font-size: 20px;
		position: absolute;
		top:120px;
		left: 35px;
	}
	.souss>span{
		/*position: relative;*/
	}
	.souss>span:nth-of-type(1){
		color:orange;
	}
	.zhList{
		position: fixed;
		top:120px;
		width: 100%;
		height: 200px;
		background: #fff;
		right:0;
		z-index: 5555555555555555555;
		padding:0px 8px;
		box-sizing: border-box;
		border-bottom:1px solid #ccc;

	}
	.zhList>li{
		color: #000;
		width: 100%;
		height: 25%;
		border-top:1px solid #ccc;
		padding-left:11px;
		box-sizing: border-box;
	}
	.zhList>li:nth-of-type(1){
		color:orange;
	}
</style>
