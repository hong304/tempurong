<template>
	<h2>{{contentTitle}}</h2>
</template>

<script>
  export default {
    name: 'content-title',
    props: {
      contentTitle: {
        type: String,
        default: function () {
          return 'I\'m default title.'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	h2 {
		display: inline-block;
		text-transform: uppercase;
		border-bottom: 1px solid $brand-primary;
		padding: 0 1rem 1.75rem;
		margin-bottom: 2rem;
		color: $brand-secondary;
	}
</style>