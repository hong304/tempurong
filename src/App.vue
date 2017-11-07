<template>
	<div id="app">
		<main>
			<global-nav></global-nav>
			<router-view></router-view>
			<!--<select id="locale" v-model="$i18n.locale">-->
			<!--<option value="en">EN</option>-->
			<!--<option value="sc">SC</option>-->
			<!--</select>-->
			<!--<p>{{ $t("message.language") }}</p>-->
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
