<template>
	<div class="container" id="food">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.food.pageTitle')"></content-title>
					<h4>Include in the freshest of ingredients</h4>
					<content-content :contentParagraph="contentParagraph"></content-content>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<div class="row food-section">
				<div v-for="item in foodsData" class="col-sm-6 col-xs-12">
					<food-card :resData="item"></food-card>
				</div>
			</div>
			<div class="row my-5">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<h4>Special Dietary items available</h4>
					<p>We have so many options for food, and can accomodate vegetarians, pescatarians, and more, so please check out our food options or reach out to us directly for ideas so that you don’t have to worry about a thing.</p>
					<p>We are happy to accommodate to your preferences, we just need some notice ahead of time to prepare fresh!</p>
				</div>
			</div>
			<div class="row my-5">
				<div class="">
					<h3>Have questions?</h3>
					<button class="btn btn-main mb-5" @click="formShow=!formShow" v-if="!formShow">{{ $t('button.justAsk') }}
					</button>
					<enquiry-form v-if="formShow"></enquiry-form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentContent from '@/components/content/ContentParagraph.vue'
  import FoodCard from '@/components/card/FoodCard.vue'
  import EnquiryForm from '@/components/form/EnquiryForm.vue'

  export default {
    name: 'Food',
    components: {
      FoodCard,
      ContentContent,
      ContentTitle,
      EnquiryForm
    },
    data () {
      return {
        contentParagraph: 'We grow a lot of our own produce on site and have started to raise our own fish. Malaysia has such an abundance of vegetation that we gather from the wild and purchase from local village markets. Being right by the sea, we often have fresh clams, fish, prawns and even wild-caught chickens. Of course, we can accommodate for vegetarians, too!',
        foodsData: [
          {
            title: 'Barbeque',
            subtitle: 'Most popular for sunset dinners',
            imageSrc: '/static/img/food/bbq.jpg',
            content: 'Guests love having BBQs on our Sunset Terrace, where we’re on the long flat beach with few people and Mother Nature’s glorious sunset show. You can request certain types of seafood or meats and we will do our best to accommodate!'
          },
          {
            title: 'Steamboat Hotpot',
            subtitle: 'Great for families and groups',
            imageSrc: '/static/img/food/hotpot.jpg',
            content: 'With all these amazing ingredients, it’s no surprise that Steamboat is one of our most requested meals. We have two different stocks (one can be a spicy option) where all kinds of meats and vegetables can be dipped and feasted on. At the very end, the most delicious soup will be ready to finish off the meal!'
          },
          {
            title: 'Fresh Seafood',
            subtitle: 'Sabah must-try!',
            imageSrc: '/static/img/food/seafood.jpg',
            content: 'If you visit Kota Kinabalu, you must indulge in the seafood! We can offer large, juicy tiger prawns, skate, clams, crab and a variety of delicious fish to be served up fried, grilled, or steamed. We can create a customize menu as long as we have some notice. Yum!'
          },
          {
            title: 'Vegetarian',
            subtitle: 'Organic, fresh, and locally grown',
            imageSrc: '/static/img/food/vegetable.jpg',
            content: 'Vegetarians rejoice, there is plenty for you to enjoy in such a plentiful region! There are lots of local and wild vegetation that aren’t found anywhere else, with great textures to enjoy. Some have delicate, flavorsome leaves, some with a nice crunch, and some that are best when just cut.'
          },
          {
            title: 'Wild Chicken',
            subtitle: 'Truly “free-range” and locally caught',
            imageSrc: '/static/img/food/wildchicken.jpg',
            content: 'Did you know that different kinds of chickens taste slightly different? Wild chickens roam around and we can catch and prepare them for you fresh. Talk about free range! Ask us about our choice in chickens.'
          },
          {
            title: 'Western Style Breakfast',
            subtitle: 'Comfortable and familiar',
            imageSrc: '/static/img/food/breakfast.jpg',
            content: 'If you’re craving a light breakfast, we also have the option for eggs, omelettes, sausages and toast with fresh fruit. If you would prefer something specific, please let us know so that we can stock the kitchen for your comfort!'
          }
        ],
        formShow: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#food {
		color: $brand-secondary;
		h3 {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 0;
			font-size: 3rem;
		}
		h4 {
			font-size: 2rem;
			text-transform: uppercase;
			font-weight: bold;
			margin-bottom: 3rem;
		}
	}

	.food-section {
		border-bottom: 1px solid $brand-primary;
	}

</style>
