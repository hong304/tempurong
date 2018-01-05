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
			<div class="row" v-for="policy in policies">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<h3 v-html="policy['title_' + $i18n.locale]"></h3>
					<p v-html="policy['content_' + $i18n.locale]" :class="{ 'mb-4': policy.sub_content_en || policy.sub_content_sc }"></p>
					<p v-if="policy.sub_content_en || policy.sub_content_sc" v-html="policy['sub_content_' + $i18n.locale]" class="sub-content"></p>
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
      return {
        policies: ''
      }
    },
    mounted () {
      this.axios.get(process.env.API_URL + '/api/policies').then((response) => {
        this.policies = response.data
      }, (error) => {
        console.log(error)
      })
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
		.sub-content {
			list-style-type: none;
			padding-left: 0;
			font-weight: bold;
		}
	}

</style>
