<template>
	<div class="container" id="policy">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.policy.pageTitle')"></content-title>
				</div>
			</div>
		</section>
		<section class="mb-5 content-wrapper">
			<div class="row" v-for="term in $t('pages.policy.terms')">
				<div class="col-xs-10 col-xs-offset-1">
					<h3 v-html="term.title"></h3>
					<p v-html="term.content"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-10 col-xs-offset-1">
					<p class="policy-remark" v-html="$t('pages.policy.remark')"></p>
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

	#policy {
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
		.policy-remark {
			font-style: italic;
		}
	}

</style>
