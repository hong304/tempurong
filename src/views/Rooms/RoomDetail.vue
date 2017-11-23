<template>
	<div class="container" id="rooms-detail">
		<section class="details-header py-5">
			<div class="row mb-5">
				<div class="col-xs-12">
					<ol>
						<li>
							<button class="btn btn-text-only" :class="{ active: selected == 1 }" @click="changeRoomDetails(1)">
								Sea view
							</button>
						</li>
						<li>
							<button class="btn btn-text-only" :class="{ active: selected == 2 }" @click="changeRoomDetails(2)">
								River view
							</button>
						</li>
					</ol>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="image-wrapper">
						<img :src="resData.imageSrc"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<slick id="slider-nav" ref="slick" :options="slickOptions">
						<button v-for="(item, index) in resData.navImageSrc" :index="index" :key="item.id">
							<img :src="item" alt="">
						</button>
					</slick>
				</div>
			</div>
		</section>

		<section class="details-wrapper py-5">
			<div class="row">
				<div class="col-xs-12">
					<h3>{{resData.title}}</h3>
					<h5>MYR{{resData.pricePerNight}} per night with breakfasts</h5>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<ul class="icon-list">
						<li>{{resData.guest}} guests (adding 1 extra mattress for max.{{resData.maxGuest}} guests)
						</li>
						<li>{{resData.queenBed}} queen beds</li>
						<li>
							{{resData.extraMattress}} extra mattress with breakfast (MYR30 per night)
							<p>*max 1 extra mattress per room</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<div class="description" style="margin-bottom: 0">
						<h5>{{ $t('components.card.roomCard.description') }}</h5>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<h5>{{ $t('components.card.roomCard.amenities') }}</h5>
						<ul class="icon-list">
							<li>{{resData.guest}} guests (max.{{resData.maxGuest}} guests)</li>
							<li>{{resData.queenBed}} queen beds</li>
						</ul>
						<h5>{{ $t('components.card.roomCard.resortPolicy') }}</h5>
						<ul class="info-list">
							<li>No Smoking</li>
							<li>Not suitable for pets</li>
							<li>No parties or events</li>
							<li>Check in time is 2PM</li>
							<li>Check out by 12PM</li>
						</ul>
						<h5>{{ $t('components.card.roomCard.cancellations') }}</h5>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
					<router-link :to="{ name: 'Reservations' }" class="btn btn-main">Book now</router-link>
				</div>
			</div>
		</section>

	</div>
</template>


<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import Slick from 'vue-slick'
  import RoomTypeCard from '@/components/card/RoomTypeCard.vue'

  export default {
    name: 'RoomDetail',
    components: {
      RoomTypeCard,
      ContentTitle,
      ContentParagraph,
      Slick
    },
    props: {
      type: {}
    },
    data () {
      return {
        resData: {},
        slickOptions: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          prevArrow: '<button type="button" class="slick-prev"><span class="ti-angle-left"></span></button>',
          nextArrow: '<button type="button" class="slick-next"><span class="ti-angle-right"></span></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true
              }
            }
          ]
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
        selected: this.type
      }
    },
    methods: {
      next () {
        this.$refs.slick.next()
      },
      prev () {
        this.$refs.slick.prev()
      },
      reInit () {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      },
      changeRoomDetails (val) {
        if (val === 1) {
          this.selected = 1
          this.reInit()
          this.resData = {
            title: 'Family Sea View Rooms',
            pricePerNight: '250',
            guest: 4,
            maxGuest: 5,
            queenBed: 2,
            extraMattress: 1,
            imageSrc: 'http://placehold.it/2000x1000',
            navImageSrc: [
              'http://placehold.it/2000x1000',
              'http://placehold.it/1000x500',
              'http://placehold.it/1000x500',
              'http://placehold.it/1000x500',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000'
            ]
          }
        } else {
          this.selected = 2
          this.reInit()
          this.resData = {
            title: 'River View Rooms (big)',
            pricePerNight: '250',
            guest: 4,
            maxGuest: 5,
            queenBed: 2,
            extraMattress: 1,
            imageSrc: 'http://placehold.it/2000x1000',
            navImageSrc: [
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000',
              'http://placehold.it/1000x500',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000',
              'http://placehold.it/2000x1000'
            ]
          }
        }
      }
    },
    mounted: function () {
      this.changeRoomDetails(this.type)
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
			height: auto;
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
					height: auto;
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