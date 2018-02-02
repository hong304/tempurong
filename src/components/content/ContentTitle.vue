<template>
	<div>
		<h2>{{contentTitle}}<span v-if="contentStep">{{contentStep}}</span></h2>
		<h3 v-if="contentSubTitle">{{contentSubTitle}}</h3>
	</div>
</template>

<script>
  export default {
    name: 'content-title',
    props: {
      contentTitle: {
        type: String,
        default: () => {
          return 'I\'m default title.'
        }
      },
      contentStep: false,
      contentSubTitle: false
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
		min-width: 40%;
		margin-top: 0;
		margin-bottom: 2rem;
		font-weight: bold;
		color: $brand-secondary;
		span {
			display: block;
			font-size: 0.7em;
		}
	}
	h3 {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: bold;
		margin-top: 0.5rem;
		margin-bottom: 3rem;
		color: $brand-secondary;
	}
</style>