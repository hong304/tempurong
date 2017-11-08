<template>
	<div id="app">
		<main>
			<global-nav></global-nav>
			<router-view></router-view>
			<global-footer></global-footer>
		</main>
	</div>
</template>

<script>
  import GlobalNav from './components/GlobalNav.vue'
  import GlobalFooter from './components/GlobalFooter.vue'

  export default {
    name: 'app',
    components: {
      GlobalNav,
      GlobalFooter
    }
  }
</script>

<style lang="scss">
	@import './assets/style/main';
</style>
