<template>
    <div class='news'>
       	<Vheader>个人中心</Vheader>
       <div v-if='bol' class='gethot'>
       		<div>
       			<p>
					用户名：<input v-model='ss' placeholder='请输入手机号'   type="text">
       			</p>
				<p>
					密码：<input v-model='pas' type="password">
				</p>
					<button @click='debark'>登陆</button>
					<button @click='zuces'>注册</button>
       		</div>
		</div>
		<div v-if='bol==false&&zuce==false' class='xinxi'>
			<div v-if='xgyh==false'>
				<div class='img'>
					<img :src="good.img" alt="">
				</div>
				<p>名字：{{good.name}}</p>
				<p>年龄：{{good.age}}</p>
				<p>用户名:{{good.number}}</p>
				<p>性别:{{good.sex}}</p>
				<p>爱好:{{good.synopsis}}</p>
			</div>

			<div v-if='xgyh' class='xghsj'>
				<div>
					图片路径：
					<input type="text" v-model = 'goods.img' >
				</div>
				<div>
					名字：
					<input type="text" v-model = 'good.name'>
				</div>	
				<div>年龄：
					 <input type="text" v-model='good.age'>
				</div>
				<div>性别:
					<input type="text" v-model='good.sex'>
				</div>
				<div>爱好:
					<input type="text" v-model='good.synopsis'>
				</div>
			</div>
			<div class='qhyh'  @click='qhyhs' ref='qhyh'>切换用户</div>
			<div class='qhyh qhyh1'>
				<p v-if='xgyh==false' @click='qhyhs1xgyh'>修改用户</p>
				<p v-if='xgyh' @click='qhyhs1' class='userxg'>确认修改</p>
			</div>
			<div class='qhyh2' @click='deltea'>删除用户</div>
		</div>
		<div v-if='zuce' class='gethot gethots'>
       		<div>
       			<p>
					用户名：<input v-model='zuc.number' placeholder='请输入用户名'   type="text">
       			</p>
       			<p>
					密码：<input  v-model='zuc.pas' placeholder='请输入密码'   type="password">
       			</p>
				<p>
					名字：<input v-model='zuc.name' placeholder='请输入姓名' type="text">
				</p>
				<p>
					图片：<input v-model='zuc.img'  placeholder='请输入网络图片链接' type="text">
				</p>
				<p>
					爱好：<input v-model='zuc.synopsis' placeholder='请输入爱好' type="text">
				</p>
				<p>
					年龄：<input v-model='zuc.age' placeholder='请输入年龄' type="text">
				</p>
				<p>
					性别：<input v-model='zuc.sex' placeholder='请输入性别' type="text">
				</p>
					<button @click='qrzuce'>确认注册</button>
					<button @click='dlym'>返回登陆页面</button>
       		</div>
		</div>
    </div> 
</template>

<script>
import Vheader from '../base/Vheader.vue'
import {personage,grzx,xgh,del} from '../api'

export default {

  data () {
    return {
     bol:true,
     zuce:false,
  // 匹配到的电话号
      good:{},
      // 用户输入的信息
      zuc:{},
      // 修改用户信息
      goods:{},
      ss:'',
      pas:'',
      xgyh:false,
      xghsj:[]
    }
  },
  updated(){

  	
  },
  components:{
  	Vheader
  },
  methods:{
  	async debark(){
  		 // personage(this.ss);
  		 let [age] = await  personage(this.ss,this.pas)
  		 this.good=age;
  		  this.bol=false;
  		 if(this.good==undefined&&this.pas!==''&&this.ss!==''){
  		 	alert('用户不存在，请重新输入')
  		 	 this.bol=true;
  		 }
  		 if(this.pas==''&&this.ss!==''){
  		 	alert('密码为空，请重新输入')
  		 	this.bol=true;
  		 }
  		  if(this.pas==''&&this.ss==''){
  		 	alert('密码账号为空，请重新输入')
  		 	this.bol=true;
  		 }
  		 if(this.ss==''&&this.pas!==''){
  		 	alert('账号为空，请重新输入')
  		 	this.bol=true;
  		 }
  		 this.xghsj=this.good
  		
  	},

  	// 注册页面
  	zuces(){
  		this.bol=false;
  		this.zuce=true;

  	},

  	//登陆页面
  	dlym(){
  		this.bol=true;
  		this.zuce=false;

  	},

  	//确认修改
  	qhyhs1(){
  		this.xgyh=false;
  		let xghs= JSON.stringify(this.good);
  		xgh(xghs);
  	},

  	// 修改用户
  	qhyhs1xgyh(){
  		this.xgyh=true;
  	},

  	//点击确认注册
  	qrzuce(){
		let zuc = JSON.stringify(this.zuc);
		grzx(zuc);

		this.zuce=false;
		this.bol=true;
  	},


  	// 点击切换用户
  	qhyhs(){
  		this.xgyh=false;
  		var that = this;
  		this.pas=''
  	  		setTimeout(function(){
  			that.bol=true;
  		},1000)

  		// 获取dom元素
  		this.$refs.qhyh.style.color='red';
  		
  	},


  	//点击删除用户
  	async deltea(){
  		await del(this.good.id)

  		
  	}

  }

}
</script>


<style scoped>
	.news{
		width: 100%;
		height: 100%;
		background-color: #ccc;
		top:0;
		position: absolute;

	}
	.gethot>div{
		width:90%;
		height:400px;
		/*background-color: red;*/
		margin:120px auto;
	}
	.gethot>div>p{
		line-height: 30px;
		display: flex;
		justify-content: space-between;
	}
	.gethot>div>p>input{
		width:80%;
		height:50px;
		outline: none;
		border:1px solid #ccc;	
		margin-bottom: 30px;
		text-indent:10px;
		font-size: 20px;
	}
	.gethot>div>p>input{
		font-size: 12px;
		height: 30px;
		margin-bottom:10px; 
	}
	button{
		display: block;
		width:100%;
		height:40px;
		margin: 0 auto;
		background-color: green;
	}
	.xinxi{
		width:90%;
		height:400px;
		/*background-color: red;*/
		margin:120px auto;
	}
	.img{
		width: 200px;
		height: 200px;
		background-color:blue;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
		margin-bottom: 20px; 
	}
	.xinxi>div>div>img{
		width: 100%;
		height: 100%;
	}
	.xinxi>div>div{
		margin-bottom:10px; 
	}
	.qhyh{
		text-align: right;
	}
	.qhyh1{
		text-align: center;
	}
	.qhyh2{
		text-align: left;
	}
	.userxg{
		margin-bottom: 20px; 
	}
</style>












