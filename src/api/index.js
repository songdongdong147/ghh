// 默认接口
// 跨域请求 
import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:2004'

//添加请求拦截器
axios.interceptors.request.use(function (res) {
    //在发送请求之前做一些事情
    return res
  }, function (error) {
    //做一些请求错误
    return Promise.reject(error);
  })

   //添加响应拦截器axios。
var myInterceptor=axios.interceptors.response.use(function (response) {
    //做一些响应数据
   return response.data
}, function (error) {
     //做一些响应错误
    return Promise.reject(error);
});




//返回的是一个promise
//获取轮播图
export let getSlider = ()=>{
	return axios.get('/slider')
} 

//获取热门商品
export let getHot=()=>{
	return axios.get('/hot')
}

//获取列表商品
export let listS=(fy)=>{
	return axios.get(`/page?page=${fy}`)
}


//查询每一个商品
export let getOne = (id)=>{
	return axios.get(`/hots?id=${id}`)
}

//搜索接口
export let shouSuo= ()=>{
	return axios.get('/hots')
}
  
// 添加商品
export let addGood = (data)=>{
  return axios.post('/add',data)
}

//删除商品
export let Delates = (id)=>{
   return axios.delete(`/delates?id=${id}`)
}

// 修改商品详情
export  let update = (id,data)=>{
   return axios.post(`update?id=${id}`,data)
}

// 通过axios方法让他俩同时执行。
export let getAll = ()=>{
   return axios.all([getSlider(),getHot()]); 
}

// 个人中心获取信息
export let personage = (id,id1)=>{
  return axios.post(`/user?id=${id}&&id1=${id1}`)
}

//个人中心注册信息
export let grzx = (data)=>{
  return axios.post('/grzx',data)
}


//修改后的个人信息
export let xgh = (data)=>{
  return axios.post('/xgh',data)
}

//购物车信息
export let gwc = (data)=>{
  return axios.post('/gwc',data)
}


// 删除用户信息
export let del = (id)=>{
  return axios.delete(`/del?id=${id}`)
}








