<template>
	<div class="container" id="activities">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.activities.pageTitle')"></content-title>
					<content-content></content-content>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<h3>Walking Distance</h3>
			<ol class="icon-list my-5">
				<li v-for="(item, index) in distanceData"
						:class="{ active: currentStep == index || index == 0, prev: currentStep > index }">
					<div class="icon-wrapper" @click="changeActivity(index)"><span class="ti-home"></span></div>
					<p>{{ item.title }}</p>
				</li>
			</ol>
			<div class="tab-content mt-4">
				<img :src="imagesData[0].cover_image" :alt="locationTitle"/>
				<div class="content-wrapper text-left">
					<div class="content-title">
						<h3>{{ resData.name_en }}</h3>
						<div><span class="ti-time"></span>
							<p>{{ resData.duration }} mins</p></div>
						<div><span class="walking-distance"></span>
							<p>{{ resData.distance }}m from resort</p></div>
					</div>
					<div class="content-content">
						<p>{{ resData.introduction }}</p>
					</div>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<div class="row pb-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.activities.activities')"></content-title>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<activity-card></activity-card>
					<activity-card></activity-card>
					<activity-card></activity-card>
				</div>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<h3>Interesting in Activities?</h3>
			<button class="btn btn-main mb-5" @click="formShow=!formShow" v-if="!formShow">{{ $t('button.dropMessage') }}
			</button>
			<enquiry-form v-if="formShow"></enquiry-form>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentContent from '../components/content/ContentParagraph.vue'
  import ActivityCard from '../components/card/ActivityCard.vue'
  import EnquiryForm from '../components/form/EnquiryForm.vue'

  export default {
    name: 'Activities',
    components: {
      EnquiryForm,
      ActivityCard,
      ContentContent,
      ContentTitle
    },
    data () {
      return {
        imageSrc: '/static/img/demo-about-01.jpg',
        locationTitle: 'Healing Well',
        tourDuration: 30,
        walkingDistance: 30,
        locationIntro: 'Over 400 years ago, there was a devastating drought in the area. Villagers were directed to dig a well in a location that was thought to have a water source underground. The villagers tasked with digging the well were skeptical, but with little choice they kept digging anyways. Amazingly, the well they dug was able to provide enough water for the whole village for a long time to come. The water was known to have healing properties, so when elders fell ill, they would bathe in and drink from the well.  This well is now known as the Wellness Healing Well and is a 5-minute walk away from the resort.',
        currentStep: 1,
        distanceData: [
          {
            'title': 'Tempourong'
          },
          {
            'title': 'Spiritual Tree'
          },
          {
            'title': 'Healing Well'
          },
          {
            'title': 'Love Rock'
          }
        ],
        resData: {},
        imagesData: [],
        formShow: false
      }
    },
    methods: {
      changeActivity (val) {
        this.currentStep = val
        this.getActivityData(val)
      },
      getActivityData (val) {
        this.axios.post('/api/activity', {
          activityId: val
        }).then((response) => {
          this.resData = response.data
          _.forEach(this.resData.images, (value) => {
            this.imagesData.push(value)
          })
          console.log(this.resData)
          console.log(this.imagesData)
          console.log(this.imagesData[0].cover_image)
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.getActivityData(1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	h3 {
		text-transform: uppercase;
		font-weight: bold;
		margin-top: 0;
		font-size: 3rem;
		color: $brand-secondary;
	}

	.icon-list {
		display: inline-block;
		padding-left: 0;
		& > li {
			position: relative;
			display: inline-block;
			float: left;
			text-align: center;
			width: 150px;
			&:not(:first-of-type) {
				margin-left: 20px;
				&:before {
					content: '';
					position: absolute;
					top: calc((5rem - 6px) / 2);
					left: -60px;
					width: 100px;
					height: 9px;
					background-image: url(../assets/img/dotted.png);
					background-size: auto 100%;
					background-repeat: repeat-x;
					transition: background 150ms linear;
				}
			}
			&.prev {
				&:not(:first-of-type) {
					&:before {
						background-image: url(../assets/img/dotted-active.png);
					}
				}
			}
			&.active {
				&:not(:first-of-type) {
					&:before {
						background-image: url(../assets/img/dotted-active.png);
					}
				}
				p {
					opacity: 1;
				}
				.icon-wrapper {
					background-color: $brand-secondary;
				}
			}
			.icon-wrapper {
				display: inline-flex;
				justify-content: center;
				width: 5rem;
				height: 5rem;
				background-color: $brand-primary;
				border-radius: 50%;
				transition: background-color 150ms linear;
				z-index: 1;
				&:hover, &:focus {
					background-color: $brand-secondary;
					cursor: pointer;
				}
				& > span {
					align-self: center;
					font-size: 2.5rem;
					color: white;
				}
			}
			p {
				margin-top: 1rem;
				margin-bottom: 0;
				color: $brand-secondary;
				font-weight: bold;
				opacity: 0;
				transition: opacity 250ms linear;
			}
		}
	}

	.tab-content {
		color: $brand-secondary;
		& > img {
			width: 100%;
		}
		.content-title {
			display: inline-flex;
			margin-top: 2rem;
			margin-bottom: 2rem;
			& > div {
				margin-left: 2rem;
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
