<template>
	<div id="app">
		<main>
			<global-nav/>
			<select id="locale" v-model="$i18n.locale">
				<option value="en">EN</option>
				<option value="sc">SC</option>
			</select>
			<p>{{ $t("message.language") }}</p>
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

