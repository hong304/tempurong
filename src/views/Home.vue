<template>
	<div class="container" id="home">
		<carousel></carousel>
		<booking-nav></booking-nav>
		<section class="padding-of-section mt-5">
			<content-title :contentTitle="$t('pages.home.welcome')"></content-title>
			<content-paragraph></content-paragraph>
		</section>
		<section class="padding-of-section mx-md-5 px-md-5">
			<content-title :contentTitle="$t('pages.home.services')"></content-title>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6" v-for="(item, index) in servicesData" :item="item" :index="index" :key="item.id">
					<card :resData="item" :buttonText="$t('button.more')"></card>
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
		<section class="padding-of-section mx-md-5 px-md-5">
			<content-title :contentTitle="$t('pages.home.activities')"></content-title>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6" v-for="(item, index) in activitiesData" :item="item" :index="index" :key="item.id">
					<card :buttonText="$t('button.more')" :class="{ last: index == 2 || index == 3 }"></card>
				</div>
			</div>
		</section>
		<section class="padding-of-section mx-md-5 px-md-5 py-5">
			<content-title :contentTitle="$t('pages.home.features')"></content-title>
			<div class="row m-0">
				<circle-thumb-card :imgRight=true :isFirst=true :buttonText="$t('button.more')"></circle-thumb-card>
				<circle-thumb-card :isLast=true :buttonText="$t('button.more')"></circle-thumb-card>
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
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import Carousel from '@/components/image/Carousel.vue'
  import BookingNav from '@/components/booking/BookingNav.vue'
  import Card from '@/components/card/Card.vue'
  import ImageDivider from '@/components/image/ImageDivider.vue'
  import CircleThumbCard from '@/components/card/CircleThumbCard.vue'
  import Testimonal from '@/components/content/Testimonial.vue'

  export default {
    name: 'Home',
    components: {
      ContentParagraph,
      ContentTitle,
      Carousel,
      BookingNav,
      Card,
      ImageDivider,
      CircleThumbCard,
      Testimonal
    },
    data () {
      return {
        titleOne: 'Welcome to Tempurong',
        titleTwo: 'Services',
        servicesData: [
          {
            infoTitle: 'Service card 1'
          },
          {
            infoTitle: 'Service card 2'
          }
        ],
        imageDividerData: {
          infoParagraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
          buttonPath: '#'
        },
        activitiesData: [
          {
            infoTitle: 'Activities card 1'
          },
          {
            infoTitle: 'Activities card 2'
          },
          {
            infoTitle: 'Activities card 3'
          },
          {
            infoTitle: 'Activities card 4'
          }
        ],
        titleThree: 'Activities',
        titleFour: 'Features',
        titleFive: 'Reviews'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
