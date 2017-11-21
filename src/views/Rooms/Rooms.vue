<template>
	<div class="container" id="rooms">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.rooms.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
			<div class="row my-5 pt-5 room-select" v-if="roomTypes">
				<div class="col-sm-6 col-xs-12">
					<room-type-card :resData="roomTypes[0]"></room-type-card>
				</div>
				<div class="col-sm-6 col-xs-12">
					<room-type-card :resData="roomTypes[1]"></room-type-card>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import RoomTypeCard from '@/components/card/RoomTypeCard.vue'

  export default {
    name: 'Rooms',
    components: {
      RoomTypeCard,
      ContentTitle,
      ContentParagraph
    },
    data () {
      return {
        roomTypes: false
      }
    },
    mounted: function () {
      this.axios.get('/api/room-type').then((response) => {
        this.roomTypes = response.data
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.room-select {
		& > div {
			padding-top: 4rem;
			padding-bottom: 4rem;
			@media screen and (min-width: 767px) {
				&:first-of-type {
					padding-right: 4rem;
					border-right: 1px solid $light-grey;
				}
				&:last-of-type {
					padding-left: 4rem;
				}
			}
		}
	}

	.image-wrapper {
		& > img {
			width: 100%;
		}
	}

	.details-header {
		color: $brand-secondary;
		ol {
			display: inline-block;
			list-style-type: none;
			padding-left: 0;
			& > li {
				display: inline-block;
				float: left;
				button {
					font-size: 2rem;
					font-weight: bold;
					text-transform: uppercase;
					opacity: 0.6;
					transition: opacity 150ms linear;
					&:hover, &:focus, &:active {
						color: $brand-secondary;
						opacity: 1;
					}
					&.active {
						opacity: 1;
						outline: none;
						box-shadow: none;
					}
				}
				&:first-of-type {
					border-right: 1px solid $light-grey;
				}
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
		}
	}

	.details-wrapper {
		text-align: left;
		color: $brand-secondary;
		h3 {
			margin-top: 0;
			font-size: 3.5em;
			font-weight: bold;
			text-transform: uppercase;
		}
		h5 {
			font-size: 2em;
		}
		ul {
			list-style-type: none;
			& > li {
				color: $brand-secondary;
				& > p {
					color: $brand-primary;
					font-style: italic;
				}
			}
			&.icon-list {
				& > li {
					margin-bottom: 1.2rem;
				}
			}
		}
		.description {
			padding: 3rem;
			background-color: #f5f5f5;
			h5 {
				margin-top: 3rem;
				font-weight: bold;
				&:first-of-type {
					margin-top: 0;
				}
			}
		}
	}

	.btn-main {
		font-size: 2rem;
		text-transform: uppercase;
	}
</style>

<style lang="scss">
	@import '../../../node_modules/slick-carousel/slick/slick';
	@import '../../assets/style/setting';

	.slick-slider {
		.slick-slide {
			button {
				border: none;
				padding: 0;
				&:hover, &:focus, &:active {
					outline: none;
					box-shadow: none;
				}
				img {
					width: 100%;
				}
			}
		}
		.slick-arrow {
			position: absolute;
			top: 50%;
			height: 28px;
			width: 28px;
			padding: 5px 0;
			background: white;
			color: $brand-primary;
			border: 1px solid $brand-primary;
			border-radius: 50%;
			transform: translateY(-50%);
			transition: color 150ms linear, background-color 150ms linear;
			z-index: 1;
			&.slick-prev {
				left: -1rem;
			}
			&.slick-next {
				right: -1rem;
			}
			&:hover, &:focus, &:active {
				background-color: $brand-primary;
				color: white;
			}
		}
	}
</style>
