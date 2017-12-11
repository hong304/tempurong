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
			<content-title :contentTitle="$t('pages.activities.walkingDistance')"></content-title>
			<div class="row text-left mt-5" v-for="item in activities">
				<div class="col-xs-12">
					<h2>{{ item['name_' + $i18n.locale] }}</h2>
					<div class="activity-detail">
						<ul>
							<li><span class="ti-time"></span> {{ item.duration }} mins</li>
							<li><span class="walking-distance"></span> {{ item.distance }}m from resort</li>
						</ul>
					</div>
					<p>{{ item['description_' + $i18n.locale] }}</p>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<div class="row pb-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.activities.adventures')"></content-title>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<activity-card v-for="item in adventures" :key="item.id" :resData="item"></activity-card>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<h3>Interesting in Activities?</h3>
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
        activitiesIcon: [
          {iconSrc: '/static/img/icons/activities/row-boats.png', title: 'Row Boats'},
          {iconSrc: '/static/img/icons/activities/fishing.png', title: 'Fishing'},
          {iconSrc: '/static/img/icons/activities/crabbing.png', title: 'Crabbing'},
          {iconSrc: '/static/img/icons/activities/sea-kayaking.png', title: 'Sea Kayaking'},
          {iconSrc: '/static/img/icons/activities/beach-volleyball.png', title: 'Beach Volleyball'},
          {iconSrc: '/static/img/icons/activities/hammock.png', title: 'Hammock'}
        ],
        imageSrc: '/static/img/demo-about-01.jpg',
        locationTitle: 'Healing Well',
        tourDuration: 30,
        walkingDistance: 30,
        locationIntro: 'Over 400 years ago, there was a devastating drought in the area. Villagers were directed to dig a well in a location that was thought to have a water source underground. The villagers tasked with digging the well were skeptical, but with little choice they kept digging anyways. Amazingly, the well they dug was able to provide enough water for the whole village for a long time to come. The water was known to have healing properties, so when elders fell ill, they would bathe in and drink from the well.  This well is now known as the Wellness Healing Well and is a 5-minute walk away from the resort.',
        currentStep: 1,
        distanceData: [
          {'title': 'Tempourong'},
          {'title': 'Spiritual Tree'},
          {'title': 'Healing Well'},
          {'title': 'Love Rock'}
        ],
        activities: [],
        adventures: [],
        formShow: false
      }
    },
    methods: {
      getActivityData () {
        this.axios.get(process.env.API_URL + '/api/activity').then((response) => {
          this.activities = response.data
        }, (error) => {
          console.log(error)
        })
      },
      getAdventureData () {
        this.axios.get(process.env.API_URL + '/api/adventure').then((response) => {
          this.adventures = response.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    created () {
      this.getActivityData()
      this.getAdventureData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#activities {
		color: $brand-secondary;
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
			&:not(:first-of-type) {
				margin-left: 2rem;
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
