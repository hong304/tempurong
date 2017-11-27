<template>
	<div id="app">
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
	@import './assets/style/main';
	
	#master {
		padding-top: 50px;
	}
</style>
