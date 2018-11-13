import * as Types from './mutations-Type.js'
import Vue from 'vue'
// import {gwc} from './api'
let strorage = window.localStorage
 let mutations = {
 	// 引入过来的是字符串。需要转换为函数名
 	[Types.ADD_CAR] (state, good) {
 			// gwc(good);
 		let product = state.carlist.find(item => {
 			return item.id === good.id
    })
    Vue.set(good, 'sel', false)
		// 设置自定义属性
		// 参数一：目标对象
		// 参数二：属性
		// 参数三：属性值
 		if (product) {
 			product.count += 1
 			// 手动更新数组
 		 	state.carlist = [...state.carlist]
 		} else{
 			good.count = 1
 			state.carlist = [...state.carlist, good]
 		}
 	},
 	[Types.Jia_CAR] (state, good) {
 		good.count++
 		state.carlist = [...state.carlist]
 	},
 	[Types.Jian_CAR] (state, good) {
 		if (good.count == 1) {
 			return false
 		}
 		good.count--
 		state.carlist = [...state.carlist]
   },
   types(state,jj){
      let qd = state.carlist.filter(function(item){
             return item.sel=jj
        })
   },
  typesa(state,ched){
    state.carlist.sel = [...ched]
  }
}
export default mutations
