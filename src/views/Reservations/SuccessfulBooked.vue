<template>
	<div class="container" id="reservations-payment">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.reservationsBooked.pageTitle')"></content-title>
				</div>
			</div>
		</section>
		<section class="py-3">
			<div class="row message-wrapper">
				<div class="col-xs-8 col-xs-offset-2">
					<h3>{{$t('pages.reservationsBooked.thankYou')}}</h3>
					<content-content :contentParagraph="$t('pages.reservationsBooked.pageMsg')"></content-content>
				</div>
			</div>
		</section>

		<section class="padding-of-section mx-md-5 px-md-5">
			<div class="row text-center mb-5">
				<div class="col-xs-12">
					<h3>{{ $t('pages.about.sectionTitle') }}</h3>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-sm-4 col-xs-12 mb-md-0 mb-4" v-for="item in ctaData">
					<cta-card :resData="item"></cta-card>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentContent from '@/components/content/ContentParagraph.vue'
  import CtaCard from '@/components/card/CtaCard.vue'

  export default {
    components: {
      CtaCard,
      ContentContent,
      ContentTitle
    },
    name: 'reservations-payment',
    props: {
      firstName: {type: String},
      lastName: {type: String},
      email: {type: String},
      Remark: {type: String},
      additionalNote: {type: String},
      checked: {type: Boolean}
    },
    data () {
      return {
        ctaData: [
          {
            imageSrc: '/static/img/about/room.jpg',
            title: 'menu.rooms',
            route: {name: 'Rooms'}
          },
          {
            imageSrc: '/static/img/about/activities.jpg',
            title: 'menu.activities',
            route: {name: 'Activities'}
          },
          {
            imageSrc: '/static/img/about/food.jpg',
            title: 'menu.food',
            route: {name: 'Food'}
          }
        ]
      }
    },
    created () {
      let transactionId = this.$localStorage.get('transactionId', false)
      if (transactionId) {
        this.$localStorage.remove('orderDetails')
        this.$localStorage.remove('orderContact')
        this.$localStorage.remove('transactionId')
      } else {
        this.$router.push({name: 'Reservations'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	h3 {
		color: $brand-secondary;
		font-weight: bold;
		text-transform: uppercase;
	}
	
	.btn-main {
		text-transform: uppercase;
	}
</style>
