<template>
	<div class="container" id="home">
		<carousel :slides="banners"></carousel>
		<booking-nav></booking-nav>
		<section class="padding-of-section mt-5">
			<content-title :contentTitle="$t('pages.home.welcome')"></content-title>
			<content-paragraph></content-paragraph>
		</section>

		<!-- rooms section -->
		<section class="padding-of-section mx-md-5 px-md-5">
			<content-title :contentTitle="$t('pages.rooms.pageTitle')"></content-title>
			<content-paragraph :contentParagraph="$t('pages.home.roomsSubtitle')"></content-paragraph>
			<div class="row">
				<icon-list :icons="amenitiesIcon"></icon-list>
			</div>
			<div class="row m-0">
				<div class="col-sm-4 col-xs-12 p-0 mb-2 mb-sm-0" v-for="item in roomType">
					<room-square-card :roomType="item"></room-square-card>
				</div>
			</div>
		</section>

		<!-- ACTIVITIES section -->
		<section class="padding-of-section mx-md-5 px-md-5 mb-5 pb-5">
			<content-title :contentTitle="$t('pages.activities.pageTitle')"></content-title>
			<content-paragraph :contentParagraph="$t('pages.home.activitiesSubtitle')"></content-paragraph>
			<div class="row">
				<icon-list :icons="activitiesIcon"></icon-list>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6" v-for="(item, index) in adventures" :item="item" :index="index"
						 :key="item.id">
					<card :resData="item"></card>
				</div>
			</div>
			<router-link :to="{ name: 'Activities' }" class="btn btn-main" exact-active-class
									 @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
				{{ $t("button.moreActivities") }}
			</router-link>
		</section>


		<section class="padding-of-section mx-md-5 px-md-5 py-5">
			<content-title :contentTitle="$t('pages.food.pageTitle')"></content-title>
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
			<content-title :contentTitle="$t('pages.home.reviews')"></content-title>
			<div class="row">
				<div class="col-md-4 col-xs-12">
					<testimonal></testimonal>
				</div>
				<div class="col-md-4 col-xs-12">
					<testimonal></testimonal>
				</div>
				<div class="col-md-4 col-xs-12">
					<testimonal></testimonal>
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
  import Card from '@/components/card/Card.vue'
  import ImageDivider from '@/components/image/ImageDivider.vue'
  import Testimonal from '@/components/content/Testimonial.vue'
  import IconList from '@/components/list/IconList.vue'
  import RoomSquareCard from '@/components/card/RoomSquareCard.vue'

  export default {
    name: 'Home',
    components: {
      RoomSquareCard,
      IconList,
      ContentParagraph,
      ContentTitle,
      Carousel,
      BookingNav,
      Card,
      ImageDivider,
      Testimonal
    },
    data () {
      return {
        titleOne: 'Welcome to Tempurong',
        amenitiesIcon: [
          {iconSrc: '/static/img/icons/shower.png', title: 'Hot Shower'},
          {iconSrc: '/static/img/icons/towel.png', title: 'Shower Towel'},
          {iconSrc: '/static/img/icons/air-con.png', title: 'Air Conditioning'},
          {iconSrc: '/static/img/icons/fan.png', title: 'Fan'}
        ],
        activitiesIcon: [
          {iconSrc: '/static/img/icons/activities/row-boats.png', title: 'Row Boats'},
          {iconSrc: '/static/img/icons/activities/fishing.png', title: 'Fishing'},
          {iconSrc: '/static/img/icons/activities/crabbing.png', title: 'Crabbing'},
          {iconSrc: '/static/img/icons/activities/sea-kayaking.png', title: 'Sea Kayaking'},
          {iconSrc: '/static/img/icons/activities/beach-volleyball.png', title: 'Beach Volleyball'},
          {iconSrc: '/static/img/icons/activities/hammock.png', title: 'Hammock'}
        ],
        imageDividerData: {
          imageSrc: '/static/img/demo-image-divider-2.jpg',
          infoTitle: 'Special dietary items available!',
          buttonText: this.$i18n.getLocaleMessage(this.$i18n.locale).button.bookNow,
          buttonPath: {name: 'Reservations'}
        },
        adventures: [
          {
            title: 'Coral Reef Snorkeling',
            intro: 'The corals in Sabah are breathtaking, but don’t worry, you’ll have your snorkel on! If you’re lucky, you might spot a sea turtle.',
            imageSrc: '/static/img/demo-about-01.jpg'
          },
          {
            title: 'Volcano Mud Bath',
            intro: 'Famed for its skin nutrient benefits, this mud bath is fun and popular! Did you know, the mud makes you float?',
            imageSrc: '/static/img/demo-about-01.jpg'
          },
          {
            title: 'The Rare Proboscis Monkey',
            intro: 'Seen only in Borneo, the Proboscis monkey is one of the largest monkey species native to Asia. Enjoy a day out viewing these wonderful creatures in their natural habitat.',
            imageSrc: '/static/img/demo-about-01.jpg'
          },
          {
            title: 'Magical Fireflies in Nature',
            intro: 'Fireflies only thrive in areas away from urban cities and with clean, flowing water. Enjoy a beautiful evening cruising through the mangroves as they light up the night.',
            imageSrc: '/static/img/demo-about-01.jpg'
          }
        ],
        banners: [
          {imgSrc: '/static/img/home_banner/banner-03.jpg', title: 'Rooms starting from $250 MYR/night'},
          {imgSrc: '/static/img/home_banner/banner-04.jpg', title: 'Rooms starting from $250 MYR/night'},
          {imgSrc: '/static/img/home_banner/banner-05.jpg', title: 'Rooms starting from $250 MYR/night'}
        ],
        roomType: [],
        foods: []
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
