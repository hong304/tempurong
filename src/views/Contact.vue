<template>
	<div class="container" id="contact">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title
						:contentTitle="$t('pages.contact.pageTitle')"
						:contentSubTitle="$t('pages.contact.pageSubtitle')"
					></content-title>
					<div class="row text-left mt-3">
						<div class="col-xs-12 col-sm-6 col-sm-push-6">
							<img :src="imageSrc"/>
						</div>
						<div class="col-xs-12 col-sm-6 col-sm-pull-6">
							<ul class="detail-list">
								<li v-for="item in $t('pages.contact.findUs.information')">
									<p class="info-title"><strong>{{item.title}}</strong></p>
									<p v-html="item.content"></p>
								</li>
							</ul>
							<router-link :to="{ name: 'Reservations' }" class="btn btn-main text-center">{{ $t('button.bookNow')}}</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="padding-of-section my-5 border-bottom">
			<div class="row mb-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.contact.getThere')"></content-title>
					<content-paragraph :contentParagraph="$t('pages.contact.getThereContent')" class="text-left"></content-paragraph>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<img :src="mapSrc"/>
				</div>
				<div class="col-sm-6 col-xs-12">
					<div class="row text-left mb-3" v-for="item in $t('pages.contact.transportation')">
						<div class="col-xs-12">
							<h3 v-html="item.title"></h3>
							<p v-html="item.content"></p>
							<div v-if="item.subTitle">
								<h4 v-html="item.subTitle"></h4>
								<p v-for="content in item.subContent" v-html="content"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row mt-5 mb-5">
				<div class="col-xs-12">
					<h4 class="text-center">Know more about the area?</h4>
					<router-link :to="{ name: 'Activities' }" class="btn btn-main text-center">
						{{ $t('button.moreActivities') }}
					</router-link>
				</div>
			</div>
		</section>
		<section class="padding-of-section my-5">
			<div class="row text-center">
				<div class="col-xs-12">
					<button class="btn btn-main enquiry-btn mb-5" @click="formShow=!formShow" v-if="!formShow">{{ $t('button.dropMessage')}}</button>
				</div>
			</div>
			<div class="row text-center">
				<enquiry-form v-if="formShow"></enquiry-form>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'
  import EnquiryForm from '@/components/form/EnquiryForm.vue'

  export default {
    components: {
      EnquiryForm,
      ContentTitle,
      ContentParagraph
    },
    name: 'Contact',
    data () {
      return {
        mapSrc: '/static/img/about-map.jpg',
        imageSrc: '/static/img/demo-about-02.jpg',
        secondTitle: 'Getting There',
        formShow: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#contact {
		color: $brand-secondary;
		h3 {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 0;
			font-size: 3rem;
		}
		.text-list {
			list-style-type: none;
			padding-left: 0;
			font-size: 1.5em;
		}
		.border-bottom {
			border-bottom: 1px solid $brand-primary;
		}
		.detail-list {
			list-style-type: none;
			padding-left: 0;
			& > li {
				margin-bottom: 1.5rem;
				.info-title {
					text-transform: uppercase;
					margin-bottom: 0.25rem;
				}
				p {
					line-height: 1.35em;
				}
			}
		}
		img {
			width: 100%;
			height: auto;
		}

		.btn-main, .enquiry-btn {
			text-transform: uppercase;
			font-weight: bold;
		}
		.enquiry-btn {
			font-size: 2rem;
		}
	}

	#enquiry-form {
		margin-bottom: 4rem;
		input, textarea {
			width: 100%;
			margin: 1.5rem 0;
			line-height: 3rem;
			border: none;
			border-bottom: 1px solid $brand-primary;
			@media screen and (max-width: 467px) {
				margin: 0.75rem 0;
			}
			&:hover, &:focus, &:active {
				outline: none !important;
				box-shadow: none !important;
				border-bottom-color: $brand-secondary;
			}
			&::placeholder {
				color: $light-grey;
			}
		}
		input[type=checkbox] {
			width: auto;
			margin-top: 0;
			@media screen and (max-width: 467px) {
				margin: 0;
			}
		}
		textarea {
			resize: none;
		}
		label {
			font-weight: 400;
			&#tnc {
				cursor: pointer;
			}
		}
	}
</style>
