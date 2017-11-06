<template>
	<div class="circle-thumb-card" :class="{ 'image-on-right' : imgRight }">
		<div class="circle-border" :class="{ first: isFirst, last: isLast }">
			<div class="image-thumb-wrapper">
				<img :src="imageSrc"/>
			</div>
		</div>
		<div class="info-wrapper">
			<div class="content-wrapper">
				<h3>{{ infoTitle }}</h3>
				<p>{{ infoParagraph }}</p>
			</div>
			<router-link :to="buttonPath" class="card-link">{{ buttonText }}</router-link>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'circle-thumb-card',
    props: {
      imgRight: {
        default: function () {
          return false
        }
      },
      isFirst: {
        default: function () {
          return false
        }
      },
      isLast: {
        default: function () {
          return false
        }
      },
      imageSrc: {
        type: String,
        default: function () {
          return '/static/img/demo-image-divider.jpg'
        }
      },
      infoTitle: {
        type: String,
        default: function () {
          return 'I\'m default title.'
        }
      },
      infoParagraph: {
        type: String,
        default: function () {
          return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
      },
      buttonPath: {
        type: String,
        default: function () {
          return '#'
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

	.circle-thumb-card {
		display: flex;
		flex-flow: row wrap;
		&.image-on-right {
			.circle-border {
				order: 12;
			}
			.info-wrapper {
				order: 1;
			}
		}
		.circle-border {
			flex: 0 0 35vh;
			height: 35vh;
			margin: 3rem;
			padding: 1rem;
			border: 5px solid $brand-primary;
			border-radius: 50%;
			overflow: hidden;
			&.first {
				margin-top: 0;
			}
			&.last {
				margin-bottom: 0;
			}
			& > .image-thumb-wrapper {
				height: 100%;
				border-radius: 50%;
				overflow: hidden;
				& > img {
					width: auto;
					height: 100%;
				}
			}
		}
		.info-wrapper {
			flex: 0 0 calc(100% - 35vh - 12rem);
			align-self: center;
			text-align: left;
			.content-wrapper {
				margin-bottom: 2rem;
				h3 {
					margin-top: 0;
					color: $brand-secondary;
					text-transform: uppercase;
				}
				p {
					margin-bottom: 0;
				}
			}
			.card-link {
				color: white;
				background-color: $brand-primary;
				border-radius: 5px;
				padding: 0.75rem 1.25rem;
			}
		}
	}
</style>