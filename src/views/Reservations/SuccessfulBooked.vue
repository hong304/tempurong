<template>
	<div class="container" id="reservations-payment">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="titleOne"></content-title>
				</div>
			</div>
		</section>
		<section class="py-3">
			<div class="row message-wrapper">
				<div class="col-xs-8 col-xs-offset-2">
					<h3>Thanks You!</h3>
					<content-content></content-content>
				</div>
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
		<section class="padding-of-section mx-md-5 px-md-5">
			<div class="row my-5">
				<div class="col-xs-12">
					<button class="btn btn-main">Explore more</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentContent from '../../components/content/ContentParagraph.vue'
  import Card from '@/components/image/Card.vue'

  export default {
    components: {
      ContentContent,
      ContentTitle,
      Card
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
        titleOne: 'Successfully booked',
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
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.message-wrapper {
		h3 {
			color: $brand-secondary;
			font-weight: bold;
			text-transform: uppercase;
		}
	}
	.btn-main {
		text-transform: uppercase;
	}
</style>
