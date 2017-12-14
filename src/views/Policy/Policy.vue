<template>
	<div class="container" id="policy">
		<section class="padding-of-section mt-5">
			<div class="row mb-5">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<content-title :contentTitle="$t('pages.policy.pageTitle')"></content-title>
					<content-content :contentParagraph="$t('pages.policy.pageIntro')"></content-content>
				</div>
			</div>
		</section>
		<section class="mb-5 content-wrapper">
			<div class="row" v-for="term in $t('pages.policy.terms')">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<h3 v-html="term.title"></h3>
					<p v-html="term.content" :class="{ 'mb-4': term.paymentInfo || term.subContent }"></p>
					<ul v-if="term.paymentInfo">
						<li v-for="item in term.paymentInfo">
							{{ item.title }} {{ item.content }}
						</li>
					</ul>
					<ul v-else-if="term.subContent">
						<li v-for="item in term.subContent">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentContent from '@/components/content/ContentParagraph.vue'

  export default {
    components: {
      ContentTitle,
      ContentContent
    },
    name: 'About',
    data () {
      return {}
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
		p, ul {
			margin-bottom: 5rem;
		}
		.policy-remark {
			font-style: italic;
		}
		ul {
			list-style-type: none;
			padding-left: 0;
			font-weight: bold;
		}
	}

</style>
