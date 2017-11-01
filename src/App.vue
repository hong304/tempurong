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

<style lang="scss" scoped>
	@import './assets/style/main';
</style>
