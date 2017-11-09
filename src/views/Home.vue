<template>
	<div class="container">
		<carousel></carousel>
		<booking-nav></booking-nav>
		<section class="padding-of-section mt-5">
			<content-title :contentTitle="$t('pages.home.welcome')"></content-title>
			<content-paragraph></content-paragraph>
		</section>
		<section class="padding-of-section mx-md-5 px-md-5">
			<content-title :contentTitle="$t('pages.home.services')"></content-title>
			<div class="row mt-5">
				<div class="col-xs-12 col-md-6">
					<card :buttonText="$t('button.more')"></card>
				</div>
				<div class="col-xs-12 col-md-6">
					<card :buttonText="$t('button.more')"></card>
				</div>
			</div>
		</section>
		<section class="pt-5 pb-5">
			<div class="row">
				<image-divider
						:infoParagraph="imageDividerParagraph"
						:buttonText="$t('button.moreRooms')"
						:buttonPath="buttonPath"
				></image-divider>
			</div>
		</section>
		<section class="padding-of-section mx-md-5 px-md-5">
			<content-title :contentTitle="$t('pages.home.activities')"></content-title>
			<div class="row mt-5">
				<div class="col-xs-12 col-md-6">
					<card :buttonText="$t('button.more')"></card>
				</div>
				<div class="col-xs-12 col-md-6">
					<card :buttonText="$t('button.more')"></card>
				</div>
				<div class="col-xs-12 col-md-6">
					<card :isLastTwo=true :buttonText="$t('button.more')"></card>
				</div>
				<div class="col-xs-12 col-md-6">
					<card :isLastTwo=true :buttonText="$t('button.more')"></card>
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
  import Card from '@/components/image/Card.vue'
  import ImageDivider from '@/components/image/ImageDivider.vue'
  import CircleThumbCard from '@/components/image/CircleThumbCard.vue'
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
        imageDividerParagraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
        buttonPath: '#',
        buttonText: 'More Rooms',
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
