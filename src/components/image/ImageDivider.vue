<template>
	<div class="image-divider">
		<div class="image-bg">
			<img :src="imageSrc"/>
		</div>
		<div class="overlay-info-wrapper px-4 px-md-0">
			<div class="content-wrapper">
				<h3 v-show="infoTitle">{{ infoTitle }}</h3>
				<p v-show="infoParagraph">{{ infoParagraph }}</p>
			</div>
			<router-link v-show="buttonPath" :to="buttonPath" class="divider-link">{{ buttonText }}</router-link>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'image-divider',
    props: {
      imageSrc: {
        type: String,
        default: function () {
          return '/static/img/demo-image-divider.jpg'
        }
      },
      infoTitle: {
        default: function () {
          return false
        }
      },
      infoParagraph: {
        default: function () {
          return false
        }
      },
      buttonPath: {
        default: function () {
          return false
        }
      },
      buttonText: {
        type: String,
        default: function () {
          return 'More'
        }
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
		.divider-link {
			flex: 0 0 auto;
			margin-top: 2rem;
			padding: 0.75rem 1.25rem;
			color: white;
			border: 1px solid white;
			background-color: transparent;
			border-radius: 5px;
			transition: background-color 250ms linear, color 250ms linear;
			&:hover, &:focus {
				background-color: white;
				color: $brand-primary;
				text-decoration: none;
			}
		}
	}
</style>