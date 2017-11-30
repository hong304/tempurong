<template>
	<div class="container" id="faq">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<content-title :contentTitle="$t('pages.faq.pageTitle')"></content-title>
				</div>
			</div>
		</section>
		<section class="mb-5 content-wrapper">
			<div class="row" v-for="qa in $t('pages.faq.qas')">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<h3 v-html="qa.question"></h3>
					<p v-html="qa.answer"></p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'

  export default {
    components: {
      ContentTitle
    },
    name: 'About',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	#faq {
		color: $brand-secondary;
		h3 {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 0;
			font-size: 3rem;
		}
	}

	.content-wrapper {
		text-align: left;
		p {
			margin-bottom: 5rem;
		}
	}

</style>
