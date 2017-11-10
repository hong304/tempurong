<template>
	<div class="container" id="rooms">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.rooms.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
			<div class="row my-5 pt-5 room-select">
				<div class="col-md-6 col-xs-12">
					<room-type-card></room-type-card>
				</div>
				<div class="col-md-6 col-xs-12">
					<room-type-card></room-type-card>
				</div>
			</div>
		</section>
		<section class="details-header py-5">
			<div class="row mb-5">
				<div class="col-xs-12">
					<ol>
						<li><button class="btn btn-text-only active">Sea view</button></li>
						<li><button class="btn btn-text-only">River view</button></li>
					</ol>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="image-wrapper">
						<img :src="imageSrc"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<slick id="slider-nav" ref="slick" :options="slickOptions">
						<button v-for="(item, index) in navImageSrc" :item="item" :index="index" :key="item.id">
							<img :src="item" alt="">
						</button>
					</slick>
				</div>
			</div>
		</section>
		<section class="details-wrapper py-5">
			<div class="row">
				<div class="col-xs-12">
					<h3>{{roomData.title}}</h3>
					<h5>MYR{{roomData.pricePerNight}} per night with breakfasts</h5>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<ul class="icon-list">
						<li>{{roomData.detail.guest}} guests (adding 1 extra mattress for max.{{roomData.detail.maxGuest}} guests)</li>
						<li>{{roomData.detail.queenBed}} queen beds</li>
						<li>
							{{roomData.detail.extraMattress}} extra mattress with breakfast (MYR30 per night)
							<p>*max 1 extra mattress per room</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<div class="description" style="margin-bottom: 0">
						<h5>{{ $t('components.booking.roomCard.description') }}</h5>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<h5>{{ $t('components.booking.roomCard.amenities') }}</h5>
						<ul class="icon-list">
							<li>{{roomData.detail.guest}} guests (max.{{roomData.detail.maxGuest}} guests)</li>
							<li>{{roomData.detail.queenBed}} queen beds</li>
						</ul>
						<h5>{{ $t('components.booking.roomCard.resortPolicy') }}</h5>
						<ul class="info-list">
							<li>No Smoking</li>
							<li>Not suitable for pets</li>
							<li>No parties or events</li>
							<li>Check in time is 2PM</li>
							<li>Check out by 12PM</li>
						</ul>
						<h5>{{ $t('components.booking.roomCard.cancellations') }}</h5>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<h5>Safety features</h5>
						<ul class="info-list">
							<li>Smoke detector</li>
							<li>Safety card</li>
							<li>Carbon monoxide detector</li>
							<li>Fire extinguisher</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12 text-right">
					<button class="btn btn-main">Book now</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'
  import Slick from 'vue-slick'
  import RoomTypeCard from '../components/image/RoomTypeCard.vue'

  export default {
    name: 'Rooms',
    components: {
      RoomTypeCard,
      ContentTitle,
      ContentParagraph,
      Slick
    },
    data () {
      return {
        imageSrc: 'http://placehold.it/2000x1000',
        slickOptions: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          prevArrow: '<button type="button" class="slick-prev"><span class="ti-angle-left"></span></button>',
          nextArrow: '<button type="button" class="slick-next"><span class="ti-angle-right"></span></button>'
        },
        navImageSrc: [
          'http://placehold.it/2000x1000',
          'http://placehold.it/2000x1000',
          'http://placehold.it/1000x500',
          'http://placehold.it/2000x1000',
          'http://placehold.it/2000x1000',
          'http://placehold.it/2000x1000',
          'http://placehold.it/2000x1000',
          'http://placehold.it/2000x1000'
        ],
        roomData: {
          title: 'Family Sea View Rooms',
          pricePerNight: '250',
          detail: {
            guest: 4,
            maxGuest: 5,
            queenBed: 2,
            extraMattress: 1
          }
        }
      }
    },
    methods: {
      next () {
        this.$refs.slick.next()
      },
      prev () {
        this.$refs.slick.prev()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	.room-select {
		& > div {
			padding-top: 4rem;
			padding-bottom: 4rem;
			&:first-of-type {
				padding-right: 4rem;
				border-right: 1px solid $light-grey;
			}
			&:last-of-type {
				padding-left: 4rem;
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
	@import '../../node_modules/slick-carousel/slick/slick';
	@import '../assets/style/setting';

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
