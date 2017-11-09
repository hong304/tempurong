<template>
	<div class="image-divider">
		<div class="image-bg">
			<img :src="imageSrc"/>
		</div>
		<div class="overlay-info-wrapper px-4 px-md-0">
			<div class="content-wrapper">
				<h3 v-if="infoTitle">{{ infoTitle }}</h3>
				<p v-if="infoParagraph">{{ infoParagraph }}</p>
			</div>
			<router-link v-if="buttonPath" :to="buttonPath" class="btn btn-border">{{ buttonText }}</router-link>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'image-divider',
    props: {
      resData: {
        type: Object,
        default: () => {
          return {
            imageSrc: '/static/img/demo-image-divider.jpg',
            infoTitle: false,
            infoParagraph: false,
            buttonPath: false
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
        imageSrc: (this.resData.imageSrc) ? this.resData.imageSrc : '/static/img/demo-image-divider.jpg',
        infoTitle: (this.resData.infoTitle) ? this.resData.infoTitle : false,
        infoParagraph: (this.resData.infoParagraph) ? this.resData.infoParagraph : false,
        buttonPath: (this.resData.buttonPath) ? this.resData.buttonPath : false
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.image-divider {
		position: relative;
		color: white;
	}

	.image-bg {
		overflow-x: hidden;
		& > img {
			width: 100%;
			height: auto;
			@media screen and (max-width: 767px) {
				position: relative;
				width: auto;
				height: 35vh;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	.overlay-info-wrapper {
		position: absolute;
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.25);
		.content-wrapper {
			flex: 0 0 auto;
			align-self: center;
			& > h3 {
				margin-top: 0;
			}
			& > p {
				margin-bottom: 0;
			}
		}
		.btn-border {
			flex: 0 0 auto;
			margin-top: 2rem;
		}
	}
</style>