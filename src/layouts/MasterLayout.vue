<template>
	<div id="master">
		<global-nav :isMobile="isMobile"></global-nav>
		<router-view :isMobile="isMobile"></router-view>
		<global-footer></global-footer>
	</div>
</template>

<script>
  import GlobalNav from '@/components/GlobalNav.vue'
  import GlobalFooter from '@/components/GlobalFooter.vue'

  export default {
    name: 'MasterLayout',
    components: {
      GlobalNav,
      GlobalFooter
    },
    data () {
      return {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize () {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
    }
  }
</script>