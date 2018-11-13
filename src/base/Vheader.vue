<template>
	<div>
		<div class="headers">
			<slot></slot>
			<i v-if='back' @click='gohistr' class="iconfont icon-lvsefenkaicankaoxianban-1"></i>
		</div>
		
	</div>
</template>

<script>
	export default {
		props:{
			back:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			gohistr(){
				this.$router.go(-1)
			}
		}
	}
</script>
<!--//表示局部样式,只针对当前组件生效-->-->
<style lang='css' scoped>
	.header{
		width: 100%;
		height: 30px;
		text-align: center;
		font-weight: bold;
		line-height:30px;
		color: #fff;
		background:pink;
		position: fixed;
		top:0;
		z-index: 1;
	}
	.headers{
		width: 100%;
		height: 30px;
		text-align: center;
		font-weight: bold;
		line-height:30px;
		color: red;
		background:orange;
		position: fixed;
		top:0;
		z-index: 1;
	}
	.header>i{
		position: absolute;
		left:9px;
		color: #Fff;
		font-size: 20px;
		line-height: 30px;
		font-weight: normal;
		
	}
</style>