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
			<div class="row" v-for="qa in faqs">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<h3 v-html="qa['title_' + $i18n.locale]"></h3>
					<p v-html="qa['content_' + $i18n.locale]"></p>
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
        faqs: ''
      }
    },
    mounted () {
      this.axios.get(process.env.API_URL + '/api/faqs').then((response) => {
        this.faqs = response.data
      }, (error) => {
        console.log(error)
      })
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
<style lang="scss">
	@import '../../assets/style/setting';

	a.content-link {
		color: $brand-secondary;
		text-decoration: underline;
		&:hover, &:focus {
			color: $brand-primary;
		}
	}
</style>
