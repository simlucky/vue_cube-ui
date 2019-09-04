<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<div @click='skip'>
		to about
	</div>
	<cube-button>sss</cube-button>
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
