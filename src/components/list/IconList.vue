<template>
	<div class="amenities-list">
		<div class="amenities-cell" v-for="item in icons">
			<img :src="item.iconSrc"/>
			<span>{{ item.title }}</span>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'icon-list',
    props: {
      icons: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.amenities-list {
		display: inline-block;
		.amenities-cell {
			display: inline-block;
			float: left;
			text-align: center;
			padding: 2rem;
			img {
				max-width: 80px;
				height: auto;
				display: inline-block;
				padding-bottom: 0.5rem;
			}
			span {
				display: block;
			}
			@media screen and (max-width: 767px) {
				width: 50%;
			}
		}
	}
</style>