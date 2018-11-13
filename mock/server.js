let http = require('http');
//node的服务器模块
let fs = require('fs');
//fs node的文件模块
let url = require('url')
//请求路径和数据解析

//引入轮播图数据
let sliders = require('./slider.js')

//readFile 读取文件
// 读取文件 异步操作
 function read(cb) {
   fs.readFile('./good.json','utf8', (err,data)=>{
      if (err || data.length == 0) {
            cb([]) //如果有错误 或者文件没长度就是空数组
        } else {
            cb(JSON.parse(data)) //将读出来的内容转化为对象
        }
  })
 }


//读取个人信息
function reads(cb) {
   fs.readFile('./user.json','utf8', (err,data)=>{
      if (err || data.length == 0) {
            cb([]) //如果有错误 或者文件没长度就是空数组
        } else {
            cb(JSON.parse(data)) //将读出来的内容转化为对象
        }
  })
 }

//读取购物车信息
 function gwc(cb) {
   fs.readFile('./gwc.json','utf8', (err,data)=>{
      if (err || data.length == 0) {
            cb([]) //如果有错误 或者文件没长度就是空数组
        } else {
            cb(JSON.parse(data)) //将读出来的内容转化为对象
        }
  })
 }

 // writeFile写入文件
function write(data,cb){
    fs.writeFile('./good.json',JSON.stringify(data),cb)
}

 // writeFile写入个人中心文件
function writes(data,cb){
    fs.writeFile('./user.json',JSON.stringify(data),cb)
}


//writeFile写入购物车文件
function writegwc(data,cb){
    fs.writeFile('./gwc.json',JSON.stringify(data),cb)
}



 let size=5;
//创建服务器
http.createServer((req,res)=>{
//req request 请求
//res response 响应

//跨域 请求头
   	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1')

//  如果请求方法是options 就返回数据
    if (res.method == 'OPTIONS') return res.end('200')

// url.parse(req.url,true)
//url.parse



  let {pathname,query}=url.parse(req.url,true)
    // 3000/slider
    // path 请求的路径
    if(pathname ==='/slider'){

//  	设置编码格式
     res.setHeader('content-type',
     'application/json;charset=utf8');
        return res.end(JSON.stringify(sliders))
    }
    if(pathname ==='/page'){
//		page表示前端发来请求的第几页
//		如果不传参数就默认是0
	res.setHeader('content-type', 'application/json;charset=utf8');
    	let page = parseInt(query.page)||0;

//  	是否还有下一页
		let aa=true;
    	read(goods=>{
    		let glist = goods.slice(page*size,(page+1)*size);
//  		goods.length//总数据长度
//			(page+1)*size 已经拿到的数据的长度

			if(goods.length<(page+1)*size){
				aa=false;
				res.end(JSON.stringify({aa,glist:glist}))
			}else{
				res.end(JSON.stringify({aa,glist:glist}))
			}

    	})
    	return;
    }
    if(pathname ==='/hot'){
     res.setHeader('content-type', 'application/json;charset=utf8');
       read(function(goods) {
           let hotGood = goods.reverse().slice(0, 6);

           //延时发送数据
           setTimeout(function(){
              res.end(JSON.stringify(hotGood))
           },3000)

      })
	    return
    }
     if(pathname ==='/add'){
        let str='';
        // 转换前端发过来的数据
        req.on('data',chunk=>{
          // 判断如果是空数组的时候
          str+=chunk;
        })
        req.on('end',()=>{
          // 这是前端传过来的数据
            let good = JSON.parse(str);
            // 获取的是后台的数据
            read(goods=>{
              let gl = goods.length;
              good.id = goods.length?goods[gl-1].id+1:1;
              // 把新的数据被后台的数据push到后台数据中
                goods.push(good);
                write(goods,()=>{
                    res.end(JSON.stringify(goods))
                })
            })
        })
        return
     }

     // 个人中心获取信息
     if(pathname === '/grzx'){
         let str='';
        // 转换前端发过来的数据
        req.on('data',chunk=>{
          // 判断如果是空数组的时候
          str+=chunk;
        })
        req.on('end',()=>{
          // 这是前端传过来的数据
            let good = JSON.parse(str);
            // 获取的是后台的数据
            reads(goods=>{
              // 把新的数据被后台的数据push到后台数据中
              good.id=goods.length+1;
                goods.push(good);
                writes(goods,()=>{
                    res.end(JSON.stringify(goods))
                })
            })
        })
        return
     }


     // 删除后台
     if(pathname === '/delates'){
          res.setHeader('content-type', 'application/json;charset=utf8');
          let id = parseInt(query.id);
              read(function(goods){
                // 通过过滤进行判断，当前的id不等于本身id的返回出去。进行过滤掉
            goodsa=goods.filter(function(options){
                  return options.id!==id;
              })

            // 重新写入
              write(goodsa,()=>{
                    return res.end(JSON.stringify(goodsa))
                })
           })
          return
     }

      // 删除个人中心信息
     if(pathname === '/del'){
          res.setHeader('content-type', 'application/json;charset=utf8');
          let id = parseInt(query.id);
              reads(function(goods){
                // 通过过滤进行判断，当前的id不等于本身id的返回出去。进行过滤掉
            goodsa=goods.filter(function(options){
                  return options.id!==id;
              })
            // 重新写入
              writes(goodsa,()=>{
                    return res.end(JSON.stringify(goodsa))
                })
           })
          return
     }


     //个人中心获取信息
      if(pathname === '/user'){
        res.setHeader('content-type', 'application/json;charset=utf8');
        // 获取前端的用户名
          let id = query.id;
          // 获取前端的密码
          let id1 = query.id1;
            reads(function(goods){
                huoqu = goods.filter(item=>{
                    return id===item.number&&id1===item.pas;
                })
                 return res.end(JSON.stringify(huoqu))
            })
            return
        }

      //修改后个人信息数据
      if(pathname === '/xgh'){
          let str='';
        // 转换前端发过来的数据
        req.on('data',chunk=>{
          // 判断如果是空数组的时候
          str+=chunk;
        })
        req.on('end',()=>{
          // 这是前端传过来的数据
            let good = JSON.parse(str);

            // 获取的是后台的数据
            reads(goods=>{
                for(var i=0; i<goods.length; i++){
                  if(good.id==goods[i].id){
                      goods[i]=good
                      writes(goods,()=>{
                    res.end(JSON.stringify(goods))
                  })
                  }
                }
            })
        })
        return
      }


     // 修改数据
     if(pathname === '/update'){
      let id = parseInt(query.id);
       let str='';
        // 转换前端发过来的数据
        req.on('data',chunk=>{
          // 判断如果是空数组的时候
          str+=chunk;
        })
        req.on('end',()=>{
          // 这是前端传过来的数据
            let good = JSON.parse(str);
            // 改变id相等的那一项，返回一个新数组
            read(goods=>{
              goods=goods.map(item=>{
                if(item.id==id){
                  return good
                }
                  return item
               })
                write(goods,()=>{
                  res.end(JSON.stringify(good))
                })
            })
        })
        return
     }




     if(pathname ==='/hots'){
     res.setHeader('content-type', 'application/json;charset=utf8');
     let id = parseInt(query.id);
         if(id){
          read(function(goods) {
               let findGood=goods.find(item=>{
                  return item.id==id
                if(good){
                  res.end(JSON.stringify(good))
                }else{
                  res.end(JSON.stringify({}))
                }
               })
              res.end(JSON.stringify(findGood))
          })
        }else{
          read(function(goods){
             let hotGood = goods;
            res.end(JSON.stringify(hotGood))
           })
        }
        return
    }

  //   // 获取购物车信息
  //    if(pathname === '/gwc'){
  //         let str='';
  //       // 转换前端发过来的数据
  //       req.on('data',chunk=>{
  //         // 判断如果是空数组的时候
  //         str+=chunk;
  //       })
  //       req.on('end',()=>{
  //         // 这是前端传过来的数据
  //           let good = JSON.parse(str);
  //             console.log(good)
  //           //获取的是后台的数据
  //           gwc(function(goods){
  //               goods.push(good);
  //                writegwc(goods,()=>{
  //                 res.end(JSON.stringify(goods))
  //               })
  //           })
  //     })
  //     return
  // }


  // // 请求购物车信息
  //   if(pathname === '/qqgwc'){
  //      res.setHeader('content-type', 'application/json;charset=utf8')
  //        gwc(function(goods){
  //          let hotGoods = goods;

  //           res.end(JSON.stringify(hotGoods))
  //        })
  //   }

 //读取静态文件
    // fs.stat('.' + pathname, function(err, stats) {

    //     if (err) {
    //         fs.createReadStream('index.html').pipe(res)
    //     } else {
    //         if (stats.isDirectory()) {
    //             let p = require('path').join('.' + pathname, './index.html')
    //             fs.createReadStream(p).pipe(res)
    //         } else {
    //             fs.createReadStream('.' + pathname).pipe(res)
    //       }
    //     }
    // })

}).listen(2004)
console.log(2)
//listen 后面是端口号
