<template>
	<div class="card" :class="{ last: isLastTwo }">
		<div class="image-wrapper">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper">
			<h3>{{ cardTitle }}</h3>
			<router-link :to="cardPath" class="btn btn-main">More</router-link>
			<p>{{ cardIntro }}</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      isLastTwo: {
        default: function () {
          return false
        }
      },
      imageSrc: {
        type: String,
        default: function () {
          return '/static/img/demo-image-01.jpg'
        }
      },
      cardTitle: {
        type: String,
        default: function () {
          return 'I\'m a sample title'
        }
      },
      cardIntro: {
        type: String,
        default: function () {
          return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.'
        }
      },
      cardPath: {
        type: String,
        default: function () {
          return '#'
        }
      }
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
				display: inline-block;
				float: left;
				color: $brand-secondary;
				text-transform: uppercase;
			}
			& > p {
				&:before {
					content: '';
					display: block;
					clear: both;
				}
			}
			.btn-main {
				float: right;
				margin-top: calc(20px - 0.2rem);
				line-height: calc(24px - 0.5rem);
			}
		}
	}
</style>