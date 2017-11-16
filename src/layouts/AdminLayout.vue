<template>
	<div id="admin">
		<router-view :isMobile="isMobile"></router-view>
	</div>
</template>

<script>
  export default {
    name: 'AdminLayout',
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