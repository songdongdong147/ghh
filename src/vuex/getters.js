// getters 是vuex的 一种计算属性
// 相当于组件的computed

const getters = {
	tobal(state){
		let a = state.carlist.filter(function(item){
			return item.sel==true;
		})
		return a.reduce((prev,next,index,item)=>{
			return prev+next.count;
		},0)
	},
	tobals(state){
		let a = state.carlist.filter(function(item){
			return item.sel==true;
		})
		return a.reduce((prev,next,index,item)=>{
				return prev+next.count*next.price;
			
		},0)
	},

}
export default getters