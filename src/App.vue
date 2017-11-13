<template>
	<div id="app">
		<main>
			<global-nav :isMobile="isMobile"></global-nav>
			<router-view :isMobile="isMobile"></router-view>
			<global-footer></global-footer>
		</main>
	</div>
</template>

<script>
  import GlobalNav from '@/components/GlobalNav.vue'
  import GlobalFooter from '@/components/GlobalFooter.vue'

  export default {
    name: 'app',
    components: {
      GlobalNav,
      GlobalFooter
    },
    data () {
      return {
        isMobile: /iPhone|iPod|Android/i.test(navigator.userAgent)
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize () {
        this.isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent)
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
