import 	Vue from 'vue'
import Vuex from 'vuex'

// vuex自带的插件。日志插件。 在控制台可以显现的看到每次打印的状态
import createLogger from 'vuex/dist/logger'
import getters from './getters.js'


Vue.use(Vuex)
import mutations from './mutations.js'
let state={
	carlist:[]
}


export default new Vuex.Store({
	state,
	mutations,
	getters,
	plugins:[createLogger()]
})