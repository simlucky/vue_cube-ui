<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<div @click='skip'>
		to about
	</div>
	<cube-button :primary='true'>sss</cube-button>
	<div class="test">
		<span>我是红色</span>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
	  skip(){
		  this.$router.push({
			  name: 'about',
			  params: {
				  id: '1',
			  }
		  })
	  }
  }
}
</script>

<style scoped lang="less">
	.test{
		span{
			color: red;
			font-size: 0.5rem;
		}
	}
	
</style>