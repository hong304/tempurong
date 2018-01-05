<template>
	<div class="container" id="activities">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.activities.pageTitle')"></content-title>
					<content-content :contentParagraph="$t('pages.activities.pageIntro')"></content-content>
				</div>
			</div>
			<div class="row">
				<icon-list :icons="activitiesIcon"></icon-list>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<div class="row pb-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.activities.walkingDistance')"></content-title>
					<content-content :contentParagraph="$t('pages.activities.walkingDistanceIntro')"></content-content>
				</div>
			</div>
			<div class="row text-left mt-5 pb-4" v-for="(item, index) in walkingDistances">
				<div class="text-center mb-5 mb-md-0"
						 :class="{'col-sm-4 col-xs-12': index === 0 || index === 2, 'col-sm-4 col-xs-12 col-sm-push-8': index === 1 }">
					<img class="img-fluid" :src="item.image_path"/>
				</div>
				<div
					:class="{'col-sm-8 col-xs-12': index === 0 || index === 2, 'col-sm-8 col-xs-12 col-sm-pull-4': index === 1 }">
					<h2>{{ item['name_' + $i18n.locale] }}</h2>
					<div class="activity-detail">
						<ul>
							<li><span class="ti-time"></span> {{ item.duration }} {{ $t('pages.activities.mins') }}</li>
							<li><span class="walking-distance"></span> {{ item.distance }}{{ $t('pages.activities.distance') }}</li>
						</ul>
					</div>
					<p v-html="item['description_' + $i18n.locale]"></p>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<div class="row pb-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.activities.adventures')"></content-title>
					<content-content :contentParagraph="$t('pages.activities.adventureIntro')"></content-content>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<activity-card v-for="item in adventures" :key="item.id" :resData="item"></activity-card>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<h3>{{ $t('pages.activities.ctaTitle')}}</h3>
			<button class="btn btn-main mb-5" @click="formShow=!formShow" v-if="!formShow">{{ $t('button.dropMessage')
				}}
			</button>
			<enquiry-form v-if="formShow"></enquiry-form>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentContent from '@/components/content/ContentParagraph.vue'
  import ActivityCard from '@/components/card/ActivityCard.vue'
  import EnquiryForm from '@/components/form/EnquiryForm.vue'
  import IconList from '@/components/list/IconList.vue'

  export default {
    name: 'Activities',
    components: {
      IconList,
      EnquiryForm,
      ActivityCard,
      ContentContent,
      ContentTitle
    },
    data () {
      return {
        activitiesIcon: [],
        walkingDistances: [],
        adventures: [],
        formShow: false
      }
    },
    mounted () {
      this.axios.get(process.env.API_URL + '/api/walking-distance').then((response) => {
        this.walkingDistances = response.data
      }, (error) => {
        console.log(error)
      })
      this.axios.get(process.env.API_URL + '/api/adventures').then((response) => {
        this.adventures = response.data
      }, (error) => {
        console.log(error)
      })
      this.axios.get(process.env.API_URL + '/api/activity').then((response) => {
        let actArr = []
        _.forEach(response.data, (value) => {
          if (value.icon_list) {
            actArr.push(value)
          }
        })
        this.activitiesIcon = actArr
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#activities {
		color: $brand-secondary;
	}

	.img-fluid {
		width: 70%;
		@media screen and (min-width: 768px) and (max-width: 1199px) {
			width: 100%;
		}
	}

	h2, h3 {
		text-transform: uppercase;
		font-weight: bold;
		margin-top: 0;
	}

	h2 {
		font-size: 4rem;
		margin: 0;
	}

	h3 {
		font-size: 3rem;
	}

	ul {
		list-style-type: none;
		padding-left: 0;
		margin-bottom: 0.25rem;
		font-size: 2rem;
		& > li {
			display: inline-block;
			float: left;
			&:not(:last-of-type) {
				margin-right: 2rem;
			}
			.ti-time {
				font-size: 1.75rem;
			}
			.walking-distance {
				position: relative;
				margin-right: 2.5rem;
				&:before {
					content: '';
					position: absolute;
					display: inline-block;
					top: 0.4rem;
					width: 1.75rem;
					height: 1.75rem;
					background-image: url(../assets/img/icon/walk.png);
					background-size: cover;
				}
			}
		}
		&:after {
			content: '';
			display: block;
			clear: both;
		}
	}

	.tab-content {
		color: $brand-secondary;
		& > img {
			width: 100%;
			height: auto;
		}
		.content-title {
			display: inline-flex;
			flex-flow: row wrap;
			margin-top: 2rem;
			margin-bottom: 2rem;
			& > div {
				flex: 0 0 auto;
				margin-left: 2rem;
				@media screen and (max-width: 767px) {
					flex: 0 0 100%;
					margin-left: 0;
				}
			}
			h3, p {
				display: inline-block;
				margin: 0;
			}
			p {
				align-self: center;
				font-size: 2rem;
			}
			.walking-distance {
				position: relative;
				margin-right: 0.5rem;
				&:before {
					content: '';
					position: absolute;
					display: inline-block;
					top: -0.25rem;
					width: 1.75rem;
					height: 1.75rem;
					background-image: url(../assets/img/icon/walk.png);
					background-size: cover;
				}
				& ~ p {
					margin-left: 1.75rem;
				}
			}
		}
	}
</style>
<style lang="scss">
	@import '../assets/style/setting';

	#activities {
		.content-link {
			color: $brand-secondary;
			text-transform: uppercase;
			text-decoration: underline;
			font-weight: bold;
		}
	}

</style>