<template>
	<div class="card">
		<div class="image-wrapper">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper">
			<h3>{{ infoTitle }}</h3>
			<router-link :to="buttonPath" class="btn btn-main">{{ buttonText }}</router-link>
			<p>{{ infoParagraph }}</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      resData: {
        type: Object,
        default: () => {
          return {
            imageSrc: '/static/img/demo-image-01.jpg',
            infoTitle: 'I\'m a sample title',
            infoParagraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
            buttonPath: '#'
          }
        }
      },
      buttonText: {
        type: String,
        default: () => {
          return 'More'
        }
      }
    },
    data () {
      return {
        imageSrc: (this.resData.imageSrc) ? this.resData.imageSrc : '/static/img/demo-image-01.jpg',
        infoTitle: (this.resData.infoTitle) ? this.resData.infoTitle : 'I\'m sample title.',
        infoParagraph: (this.resData.infoParagraph) ? this.resData.infoParagraph : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
        buttonPath: (this.resData.buttonPath) ? this.resData.buttonPath : '#'
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