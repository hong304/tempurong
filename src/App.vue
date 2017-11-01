<template>
	<div id="app">
		<select id="locale" v-model="$i18n.locale">
			<option value="en">EN</option>
			<option value="sc">SC</option>
		</select>
		<p>{{ $t("message.language") }}</p>
		<router-view/>
	</div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
