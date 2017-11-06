<template>
	<p>{{ TestimonalParagraph }}</p>
</template>

<script>
  export default {
    name: 'testimonal',
    props: {
      TestimonalParagraph: {
        type: String,
        default: function () {
          return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit tincidunt ut laoreet dolore magna aliquam erat volutpat.'
        }
      }
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
	}
</style>