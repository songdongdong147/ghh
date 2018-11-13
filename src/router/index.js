import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add'
import Car from '@/components/Car'
import Detail from '@/components/Detail'
import Home from '@/components/Home'
import List from '@/components/List'
import Err from '@/components/Err'

Vue.use(Router)
export default new Router({
  routes: [
  	{
      
  		path:'/',
  		redirect:'/home'
  	},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	name:'add',
    	path:'/add',
    	component:Add
    },
    {
    	path:'/car',
    	component:Car
    },
    {
    	name:'detail',
    	path:'/detail/:detail',
    	component:Detail
    },
    {
      // 判断是否缓存
      meta:{keepAlive:true},
    	path:'/home',
    	component:Home
    },
    {
      meta:{keepAlive:true},
    	name:"lists",
    	path:'/list/:lists',
    	component:List
    }
  ]
})
