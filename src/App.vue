<template>
  <div id="app">
  		<Bus />
  		<keep-alive> 
  			<!-- //缓存 -->
    		<router-view v-if="$route.meta.keepAlive" />
		</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import Bus from './base/bus'
export default {
  name: 'App',
  components:{
  	Bus
  }
}
</script>

<style>

#app {
  
}
</style>
