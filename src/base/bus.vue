<template>
	<div>
			<ul>
					<router-link to='/home'>
				  <i class="iconfont icon-shouye"></i><br/>
					首页</router-link>
		    	<router-link to='/add'>
		    			 <i class="iconfont icon-liebiao"></i><br/>
		    		列表</router-link>
		    	<router-link to='/car'>
		    			<i class="iconfont iconfonts icon-icon-test"></i><br/>
		    			购物车
		    	</router-link>
		    	<router-link to='/list/:''>
		    			<i class="iconfont icon-lvsefenkaicankaoxianban-"></i><br/>
						个人中心   			
		    	</router-link>
    		</ul>
	</div>
</template>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	a{
		color: #fff;
	}
	a.router-link-active{
		color:blue;
	}
	ul{
		width: 100%;
		height: 50px;
		background-color: #000;
		display: flex;
		justify-content: space-between;
		padding: 0px 30px;
		box-sizing: border-box;
		position: fixed;
    	bottom: 0;
    	z-index:555;
	}
	i{
		margin-left: 8px;
	}
	.iconfonts{
		margin-left: 14px;
	}
</style>