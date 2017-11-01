<template>
	<div id="app">
		<main>
			<global-nav/>
			<router-view/>
		</main>
	</div>
</template>

<script>
  import GlobalNav from './components/GlobalNav.vue'

  export default {
    name: 'app',
    components: {
      'global-nav': GlobalNav
    }
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
