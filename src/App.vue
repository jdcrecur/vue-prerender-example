<template>
	<div id="app">
		<img src="./assets/logo.png">
		<p>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/lazy">Lazy</router-link>
			<router-link to="/other">Other</router-link>
		</p>
		<router-view />
	</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
	#app{
		font-family             : 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing  : antialiased;
		-moz-osx-font-smoothing : grayscale;
		text-align              : center;
		color                   : #2c3e50;
		margin-top              : 60px;
	}
</style>
