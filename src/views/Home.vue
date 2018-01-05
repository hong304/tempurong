<template>
	<div class="container" id="home">
		<carousel :slides="banners"></carousel>
		<booking-nav></booking-nav>
		<section class="padding-of-section mt-5">
			<content-title :contentTitle="$t('pages.home.welcome')"></content-title>
			<content-paragraph :contentParagraph="$t('pages.home.welcomeIntro')"></content-paragraph>
		</section>

		<!-- rooms section -->
		<section class="padding-of-section mx-md-5 px-md-5">
			<content-title
				:contentTitle="$t('pages.rooms.pageTitle')"
				:contentSubTitle="$t('pages.home.roomsSubtitle')"
			></content-title>
			<div class="row">
				<icon-list :icons="amenities"></icon-list>
			</div>
			<div class="row m-0">
				<div class="col-sm-4 col-xs-12 p-0 mb-2 mb-sm-0" v-for="item in roomType">
					<room-square-card :roomType="item"></room-square-card>
				</div>
			</div>
		</section>

		<!-- ACTIVITIES section -->
		<section class="padding-of-section mx-md-5 px-md-5 mb-5 pb-5">
			<content-title
				:contentTitle="$t('pages.activities.pageTitle')"
				:contentSubTitle="$t('pages.home.activitiesSubtitle')"
			></content-title>
			<div class="row">
				<icon-list :icons="activitiesIcon"></icon-list>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6" v-for="(item, index) in adventures" :item="item" :index="index"
						 :key="item.id">
					<landing-activity-card :resData="item"></landing-activity-card>
				</div>
			</div>
			<router-link :to="{ name: 'Activities' }" class="btn btn-main" exact-active-class
									 @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
				{{ $t("button.moreActivities") }}
			</router-link>
		</section>


		<section class="padding-of-section mx-md-5 px-md-5 py-5">
			<content-title
				:contentTitle="$t('pages.food.pageTitle')"
				:contentSubTitle="$t('pages.home.foodSubtitle')"
			></content-title>
			<div class="row m-0">
				<div class="col-sm-4 col-xs-6 food-list" v-for="item in foods">
					<div class="icon-wrapper">
						<img :src="item.image_path"/>
					</div>
					<h3>{{ item['name_' + $i18n.locale] }}</h3>
				</div>
			</div>
		</section>
		<section class="pt-5 pb-5">
			<div class="row">
				<image-divider
					:resData="imageDividerData"
					:buttonText="$t('button.moreRooms')"
				></image-divider>
			</div>
		</section>
		<section class="padding-of-section mx-md-5 px-md-5 py-5">
			<content-title
				:contentTitle="$t('pages.home.reviews')"
				:contentSubTitle="$t('pages.home.reviewsSubtitle')"
			></content-title>
			<div class="row">
				<div class="col-md-4 col-xs-12" v-for="item in testimonial">
					<testimonal :resData="item"></testimonal>
				</div>
			</div>
		</section>
		<section class="padding-of-section mx-md-5 px-md-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<router-link :to="{ name: 'Rooms' }" class="btn btn-border mr-4">
						{{ $t("button.viewRooms") }}
					</router-link>
					<router-link :to="{ name: 'Reservations' }" class="btn btn-main">
						{{ $t("button.bookNow") }}
					</router-link>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import Carousel from '@/components/image/Carousel.vue'
  import BookingNav from '@/components/booking/BookingNav.vue'
  import ImageDivider from '@/components/image/ImageDivider.vue'
  import Testimonal from '@/components/content/Testimonial.vue'
  import IconList from '@/components/list/IconList.vue'
  import RoomSquareCard from '@/components/card/RoomSquareCard.vue'
  import LandingActivityCard from '@/components/card/LandingActivityCard.vue'

  export default {
    name: 'Home',
    components: {
      LandingActivityCard,
      RoomSquareCard,
      IconList,
      ContentParagraph,
      ContentTitle,
      Carousel,
      BookingNav,
      ImageDivider,
      Testimonal
    },
    data () {
      return {
        amenities: '',
        activitiesIcon: '',
        imageDividerData: {
          imageSrc: '/static/img/demo-image-divider-2.jpg',
          infoTitle: 'Special dietary items available!',
          buttonText: this.$i18n.getLocaleMessage(this.$i18n.locale).button.bookNow,
          buttonPath: {name: 'Reservations'}
        },
        adventures: '',
        banners: [
          {
            imgSrc: '/static/img/home_banner/banner-03.jpg',
            title: 'Rooms starting from $250 MYR/night',
            cta: [
              {to: {name: 'Rooms'}, btnText: 'viewRooms'}
            ]
          },
          {
            imgSrc: '/static/img/home_banner/banner-04.jpg',
            title: 'Explore more. Plan your next adventure.',
            cta: [
              {to: {name: 'Activities'}, btnText: 'moreActivities'},
              {to: {name: 'About'}, btnText: 'aboutUs'}
            ]
          },
          {
            imgSrc: '/static/img/home_banner/banner-05.jpg',
            title: 'Relax and get a taste of Borneo',
            cta: [
              {to: {name: 'Food'}, btnText: 'foodOptions'}
            ]
          }
        ],
        roomType: [],
        foods: [],
        testimonial: [],
        lang: this.$i18n.locale
      }
    },
    watch: {
      '$i18n.locale': function (val) {
        this.lang = this.$i18n.locale
        this.getTestimonial()
      }
    },
    methods: {
      getTestimonial () {
        this.axios.post(process.env.API_URL + '/api/testimonial', {
          lang: this.lang
        }).then((response) => {
          this.testimonial = response.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted () {
      this.axios.get(process.env.API_URL + '/api/room-type').then((response) => {
        this.roomType = response.data
      }, (error) => {
        console.log(error)
      })
      this.axios.get(process.env.API_URL + '/api/food').then((response) => {
        this.foods = response.data
      }, (error) => {
        console.log(error)
      })
      this.axios.get(process.env.API_URL + '/api/amenities').then((response) => {
        this.amenities = response.data
      }, (error) => {
        console.log(error)
      })
      this.axios.get(process.env.API_URL + '/api/activity').then((response) => {
        let actArr = []
        let advArr = []
        _.forEach(response.data, (value) => {
          if (value.icon_list) {
            actArr.push(value)
          } else {
            advArr.push(value)
          }
        })
        this.activitiesIcon = actArr
        this.adventures = advArr
      }, (error) => {
        console.log(error)
      })
      this.getTestimonial()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#home {
		color: $brand-secondary;
		.btn-main, .btn-border {
			text-transform: uppercase;
			font-weight: bold;
			font-size: 1.5rem;
			padding: 0.45rem 1.25rem;
		}
		.btn-border {
			border-color: $brand-primary;
			color: $brand-primary;
			&:hover, &:focus {
				background-color: $brand-primary;
				color: white;
			}
		}
	}

	.food-list {
		display: flex;
		flex-flow: row nowrap;
		text-align: left;
		.icon-wrapper {
			flex: 0 1 auto;
			margin-right: 1rem;
			img {
				width: auto;
				max-height: 80px;
				max-width: 80px;
				@media screen and (max-width: 767px) {
					max-height: 50px;
				}
				@media screen and (max-width: 320px) {
					max-height: 40px;
				}
			}
		}
		h3 {
			flex: 1 1 auto;
			font-size: 2rem;
			margin: 0;
			align-self: center;
			@media screen and (max-width: 767px) {
				font-size: 1.5rem;
			}
			@media screen and (max-width: 320px) {
				font-size: 1.3rem;
			}
		}
		&:after {
			content: '';
			display: block;
			clear: both;
		}
	}
</style>
