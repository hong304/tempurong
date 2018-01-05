<template>
	<p>{{ resData.content }} <span>{{ resData.from }}</span></p>
</template>

<script>
  export default {
    name: 'testimonal',
    props: {
      resData: {}
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	p {
		position: relative;
		padding: 4rem;
		color: $brand-secondary;
		text-align: left;
		&:before, &:after {
			position: absolute;
			font-size: 6rem;
			color: $brand-primary;
		}
		&:before {
			content: '“';
			top: 0;
			left: 0;
		}
		&:after {
			content: '”';
			right: 0;
		}
		span {
			display: block;
			margin-top: 0.5em;
			font-style: italic;
		}
	}
</style>