<template>
	<div class="container" id="food">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.food.pageTitle')"></content-title>
					<h4>{{ $t('pages.food.pageSubtitle') }}</h4>
					<content-content :contentParagraph="$t('pages.food.pageIntro')"></content-content>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<div class="row food-section">
				<div v-for="item in foodData" class="col-sm-6 col-xs-12">
					<food-card :resData="item"></food-card>
				</div>
			</div>
			<div class="row my-5">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<h4>{{ $t('pages.food.addOn') }}</h4>
					<p v-html="$t('pages.food.addOnContent')"></p>
				</div>
			</div>
			<div class="row my-5">
				<div class="col-xs-12">
					<h3>{{ $t('pages.food.haveQuestion') }}</h3>
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
        foodData: [],
        formShow: false
      }
    },
    created () {
      this.axios.get(process.env.API_URL + '/api/food').then((response) => {
        this.foodData = response.data
      }, (error) => {
        console.log(error)
      })
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
