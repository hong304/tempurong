<template>
	<div class="card">
		<router-link v-if="resData.to" :to="resData.to">
			<div class="image-wrapper">
				<img :src="resData.imageSrc"/>
			</div>
		</router-link>
		<div class="image-wrapper" v-else>
			<img :src="resData.imageSrc"/>
		</div>
		<div class="info-wrapper">
			<h3>{{ resData.title }}</h3>
			<p>{{ resData.intro }}</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      resData: {type: Object}
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.card {
		text-align: left;
		margin-bottom: 5rem;
		&.last {
			margin-bottom: 0;
		}
		.image-wrapper {
			& > img {
				width: 100%;
				height: auto;
			}
		}
		.info-wrapper {
			& > h3 {
				color: $brand-secondary;
				text-transform: uppercase;
				margin-top: 0.75rem;
				font-weight: bold;
				margin-bottom: 0.25rem;
			}
			& > p {
				margin-bottom: 0;
			}
		}
	}

	ul {
		list-style-type: none;
		padding-left: 0;
		margin-bottom: 0.25rem;
		font-size: 2rem;
		& > li {
			display: inline-block;
			float: left;
			&:not(:last-of-type) {
				margin-right: 2rem;
			}
			.ti-time {
				font-size: 1.75rem;
			}
			.walking-distance {
				position: relative;
				margin-right: 2.5rem;
				&:before {
					content: '';
					position: absolute;
					display: inline-block;
					top: 0.4rem;
					width: 1.75rem;
					height: 1.75rem;
					background-image: url(../../assets/img/icon/walk.png);
					background-size: cover;
				}
			}
		}
		&:after {
			content: '';
			display: block;
			clear: both;
		}
	}
</style>