<template>
	<div class="card">
		<div class="image-wrapper">
			<img :src="resData.images[0].cover_image"/>
		</div>
		<div class="info-wrapper">
			<h3>{{ resData['name_' + $i18n.locale] }}</h3>
			<p v-if="resData.subtitle_en">({{ resData['subtitle_' + $i18n.locale] }})</p>
			<div class="activity-detail">
				<ul>
					<li><span class="ti-time"></span> {{ resData.duration }} mins</li>
					<li><span class="walking-distance"></span> {{ resData.distance }}m from resort</li>
				</ul>
			</div>
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
				margin-bottom: 0;
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