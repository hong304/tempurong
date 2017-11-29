<template>
	<div class="container" id="rooms">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.rooms.pageTitle')"></content-title>
					<content-paragraph :contentParagraph="contentParagraph"></content-paragraph>
				</div>
			</div>
			<section class="details-header py-sm-5 py-0">
				<div class="row mb-5">
					<div class="col-xs-12">
						<ol>
							<li v-for="(item, index) in roomTypes">
								<button class="btn btn-text-only" :class="{ active: selected == index+1 }"
												@click="getRoomTypeData(index+1)">
									{{ item['name_' + $i18n.locale] }}
									<span
											v-if="item['room_title_' + $i18n.locale]"><br>{{ item.room.length + ' ' + item['room_title_' + $i18n.locale]
										}}</span>
								</button>
							</li>
						</ol>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12" v-for="(item, index) in imageArr" v-if="(selected == index+1)">
						<div class="image-wrapper">
							<img :src="item.imgSrc"/>
						</div>
					</div>
				</div>
				<!--<div class="row">-->
				<!--<div class="col-xs-12">-->
				<!--<slick id="slider-nav" ref="slick" :options="slickOptions">-->
				<!--<button v-for="(item, index) in resData.navImageSrc" :index="index" :key="item.id">-->
				<!--<img :src="item" alt="">-->
				<!--</button>-->
				<!--</slick>-->
				<!--</div>-->
				<!--</div>-->
			</section>

			<section v-for="(item, index) in roomTypes" v-if="(roomTypes && selected == index+1)"
							 class="details-wrapper pb-5">
				<div class="row">
					<div class="col-xs-12">
						<h3>{{ item['name_' + $i18n.locale] }}<br>{{item['room_title_' + $i18n.locale]}}</h3>
						<h5>${{item.price}} MYR per night with breakfasts</h5>
						<span>{{ item.size }}</span>
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-xs-12">
						<ul class="icon-list">
							<li class="icon-row">
								<span class="icon icon-guest"></span>
								<span v-if="!item.add_bed">{{item.capacity}} guests </span>
								<span v-if="item.add_bed">{{item.capacity}} guests (adding 1 extra mattress for max.{{ item.capacity + 1
									}} guests)</span>
							</li>
							<li class="icon-row" v-if="item.queen_bed">
								<span class="icon icon-queen-bed"></span>
								<span>{{item.queen_bed}} queen beds</span>
							</li>
							<li class="icon-row" v-if="item.bunk_bed">
								<span class="icon icon-bunk-bed"></span>
								<span>{{item.bunk_bed}} bunk beds</span>
							</li>
							<li class="icon-row" v-if="item.add_bed">
								<span class="icon icon-mattress"></span>
								<span>{{item.mattress}} extra mattress (MYR18 per night)</span>
							</li>
							<li class="icon-row">
								<span class="icon icon-breakfast"></span>
								<span>1 extra breakfast (MYR 12 per night)</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-xs-12">
						<div class="description" style="margin-bottom: 0">
							<h5>{{ $t('components.card.roomCard.description') }}</h5>
							<p>{{item.description}}</p>

							<h5>{{ $t('components.card.roomCard.amenities') }}</h5>
							<div class="amenities-list">
								<div class="amenities-cell">
									<img src="/static/img/icons/shower.png"/>
									<span>Hot Shower</span>
								</div>
								<div class="amenities-cell">
									<img src="/static/img/icons/towel.png"/>
									<span>Shower Towel</span>
								</div>
								<div class="amenities-cell">
									<img src="/static/img/icons/air-con.png"/>
									<span>Air Conditioning</span>
								</div>
								<div class="amenities-cell">
									<img src="/static/img/icons/fan.png"/>
									<span>Fan</span>
								</div>
							</div>
							<h5>Resort and Cancellation Policy</h5>
							<p>* Please refer to our Resort and Cancellation Policy.</p>
						</div>
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-xs-12 text-right">
						<router-link :to="{ name: 'Reservations' }" class="btn btn-main">Book now</router-link>
					</div>
				</div>
			</section>
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
    data () {
      return {
        resData: {},
        contentParagraph: 'We have a total of 13 rooms, 8 Sea View rooms and 5 Riverside rooms. Each room can fit a family of 4-6 people depending on the type of room and is fitted with basic but comfortable lodgings. Each room has air conditioning and a hot shower. Please check the details of each room type to see which would be most fitting. If you have any questions, please don’t hesitate to contact us.',
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
        imageSrc: 'http://placehold.it/2000x1000',
        selected: 1,
        roomTypes: {},
        imageArr: [
          {imgSrc: '/static/img/room_type/room-01.jpg'},
          {imgSrc: '/static/img/room_type/room-02.jpg'},
          {imgSrc: '/static/img/room_type/room-03.jpg'}
        ]
      }
    },
    methods: {
      next () {
//        this.$refs.slick.next()
      },
      prev () {
//        this.$refs.slick.prev()
      },
      reInit () {
        // Helpful if you have to deal with v-for to update dynamic lists
//        this.$nextTick(() => {
//          this.$refs.slick.reSlick()
//        })
      },
      getRoomTypeData (val) {
        if (val) {
          this.axios.post(process.env.API_URL + '/api/room-type', {
            typeId: val
          }).then((response) => {
            this.resData = response.data
            this.selected = val
          }, (error) => {
            console.log(error)
          })
        } else {
          this.axios.get(process.env.API_URL + '/api/room-type').then((response) => {
            this.roomTypes = response.data
          }, (error) => {
            console.log(error)
          })
        }
      }
    },
    created: function () {
      this.getRoomTypeData()
      this.getRoomTypeData(this.selected)
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
			display: inline-block !important;
			list-style-type: none;
			padding-left: 0;
			& > li {
				display: inline-block;
				button {
					font-size: 2rem;
					text-transform: uppercase;
					opacity: 0.6;
					transition: opacity 150ms linear;
					span {
						font-size: 1.5rem;
					}
					&:hover, &:focus, &:active {
						color: $brand-secondary;
						opacity: 1;
					}
					&.active {
						opacity: 1;
						font-weight: bold;
						outline: none;
						box-shadow: none;
					}
				}
				&:not(:first-of-type) {
					border-left: 1px solid $light-grey;
				}
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
			@media screen and (max-width: 768px) {
				display: flex;
				& > li {
					button {
						font-size: 1.5rem;
						width: 100%;
						padding: 6px;
						span {
							font-size: 1rem;
							width: 100%;
							white-space: pre-wrap;
						}
					}
				}
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
			@media screen and (max-width: 767px) {
				font-size: 2em;
			}
		}
		h5 {
			font-size: 2em;
			@media screen and (max-width: 767px) {
				font-size: 1.35em;
			}
		}
		.icon-list {
			display: table;
			margin-bottom: 0.5rem;
			.icon-row {
				display: table-row;
				span {
					display: table-cell;
					vertical-align: middle;
				}
				.icon {
					width: 2.5rem;
				}
				.fit-content {
					width: 1%;
					padding: 0 2px; /* just some padding, if needed*/
					white-space: pre;
				}
				.big-cell {
					padding-right: 3rem;
				}
			}
			@media screen and (max-width: 767px) {
				margin-bottom: 1rem;
				.icon-row {
					.icon {
						display: inline-block;
						width: 3rem;
						margin-right: 1rem;
					}
				}
			}
		}

		.amenities-list {
			display: inline-block;
			.amenities-cell {
				display: inline-block;
				float: left;
				text-align: center;
				padding: 2rem;
				img {
					display: inline-block;
					padding-bottom: 2rem;
				}
				span {
					display: block;
				}
				@media screen and (max-width: 767px) {
					width: 50%;
				}
			}
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
				list-style-type: none;
				padding-left: 0;
				& > li {
					@media screen and (min-width: 768px) {
						display: inline-block;
						float: left;
						&:not(:last-of-type) {
							margin-right: 2rem;
						}
						&:after {
							content: '';
							display: block;
							clear: both;
						}
					}
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

	.icon {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-size: contain;
		background-repeat: no-repeat;

		&.icon-guest {
			background-image: url("/static/img/icons/guest.svg");
		}
		&.icon-breakfast {
			background-image: url("/static/img/icons/breakfast.svg");
		}
		&.icon-bunk-bed {
			background-image: url("/static/img/icons/bunk_bed.svg");
		}
		&.icon-queen-bed {
			background-image: url("/static/img/icons/queen_bed.svg");
		}
		&.icon-mattress {
			background-image: url("/static/img/icons/mattress.svg");
		}
	}
</style>
