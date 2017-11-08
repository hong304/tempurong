<template>
	<div id="app">
		<main>
			<global-nav :isMobile="isMobile"></global-nav>
			<router-view :isMobile="isMobile"></router-view>
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
    },
    data () {
      return {
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize () {
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
    }
  }
</script>

<style lang="scss">
	@import './assets/style/main';
</style>
