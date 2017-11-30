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
				<ol class="icon-list my-5">
					<li class="col-sm-2 col-xs-4 icon-item" v-for="item in activities">
						<div class="icon-wrapper">
							<img :src="item.icon"/>
						</div>
						<p>{{ item.name }}</p>
					</li>
				</ol>
			</div>
		</section>
		<section class="padding-of-section mt-5">
			<h3>Walking Distance</h3>
			<ol class="icon-list my-5">
				<li class="icon-item-with-dot" v-for="(item, index) in distanceData"
						:class="{ active: currentStep == index || index == 0, prev: currentStep > index }">
					<div class="icon-wrapper" @click="changeActivity(index)"><span class="ti-home"></span></div>
					<p>{{ item.title }}</p>
				</li>
			</ol>
			<div class="tab-content mt-4">
				<img v-if="resData.images" :src="resData.images[0].cover_image" :alt="locationTitle"/>
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
					<content-title :contentTitle="$t('pages.activities.adventures')"></content-title>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-xs-12">
					<activity-card v-for="item in adventures" :key="item.id" :resData="item"></activity-card>
					<!--<activity-card></activity-card>-->
					<!--<activity-card></activity-card>-->
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
        activities: [
          {
            icon: '/static/img/icons/activities/row-boats.png',
            name: 'Row Boats'
          },
          {
            icon: '/static/img/icons/activities/fishing.png',
            name: 'Fishing'
          },
          {
            icon: '/static/img/icons/activities/crabbing.png',
            name: 'Crabbing'
          },
          {
            icon: '/static/img/icons/activities/sea-kayaking.png',
            name: 'Sea Kayaking'
          },
          {
            icon: '/static/img/icons/activities/beach-volleyball.png',
            name: 'Beach Volleyball'
          },
          {
            icon: '/static/img/icons/activities/hammock.png',
            name: 'Hammock'
          }
        ],
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
        adventures: [
          {
            activityTitle: 'Pulau Tiga Day Trip',
            activitySubTitle: 'Snorkeling and Volcano Mud Bath',
            images: [
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-01'
              },
              {
                'imageSrc': '/static/img/demo-about-02.jpg',
                'imageAlt': 'image-02'
              },
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-03'
              }
            ],
            tourDuration: 30,
            walkingDistance: 30,
            difficulties: 3.5,
            description: 'Pulau Tiga is an island off the coast of Borneo that is most well known as “Survivor Island”, as it was the location where the debut season of Survivor was filmed. On this day trip you will depart from the resort by 8:30AM and travel to the beautiful waters off the coast of the island for swimming and snorkeling at various locations. Marvelous sights of giant clams, families of tropical fish, and other beautiful ocean life are common amongst the coral reefs.<br><br> You will also have the option of dipping into the volcano mud baths of Pulau Tiga, which are located just a 20-minute hike inland from the island’s shore, and offer a fun experience said to be good for the skin. Be sure to bring footwear that you won’t mind getting muddy if you opt for the hike.'
          },
          {
            activityTitle: 'Mangrove River Cruise',
            activitySubTitle: 'Proboscis Monkeys and Fireflies',
            images: [
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-01'
              },
              {
                'imageSrc': '/static/img/demo-about-02.jpg',
                'imageAlt': 'image-02'
              },
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-03'
              }
            ],
            tourDuration: 30,
            walkingDistance: 30,
            difficulties: 3.5,
            description: 'The River Cruise offers opportunities to see the wildlife of Borneo’s wetland jungles. The trip would begin by traveling to the Klias River, about a half hour away from the resort. Upon arrival, there would be a tea break before embarking on a boat ride in search of the Proboscis monkeys, an endangered species that are native to Sabah and are most known for their signature long noses and protruding bellies.<br><br>After sunset the cruise becomes a mystical ride through the mangroves where fireflies light up the sky like dancing lights, flying throughout the branches above. Please note that sightings are common, but not guaranteed.'
          },
          {
            activityTitle: 'Escorted Jungle Trekking',
            activitySubTitle: '',
            images: [
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-01'
              },
              {
                'imageSrc': '/static/img/demo-about-02.jpg',
                'imageAlt': 'image-02'
              },
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-03'
              }
            ],
            tourDuration: 30,
            walkingDistance: 30,
            difficulties: 3.5,
            description: 'Enjoy some of the world’s dwindling rain forests by doing a leisurely jungle trek that is about an hour long. Trek through the low land forest where you may see different kinds of reptiles, birds, plants, bamboo, rattan, and more. Visitors are advised to wear sandals or a good pair of walking shoes, insect repellent, sun screen, a small bottle of water will be provided.<br><br>The Healing Well, Love Rock and Space Rock are also nearby so these additional areas could be tied into after your trek. The sunset is especially gorgeous from the beach by Space Rock as there are rarely any people around. Enjoy the rich colors as the sky changes from golds and oranges to deep reds.'
          }
        ],
        resData: {},
        formShow: false
      }
    },
    methods: {
      changeActivity (val) {
        if (val !== 0) {
          this.currentStep = val
          this.getActivityData(val)
        }
      },
      getActivityData (val) {
        this.axios.post(process.env.API_URL + '/api/activity', {
          activityId: val
        }).then((response) => {
          this.resData = response.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    created () {
      this.getActivityData(1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#activities {
		color: $brand-secondary;
	}

	h3 {
		text-transform: uppercase;
		font-weight: bold;
		margin-top: 0;
		font-size: 3rem;
	}

	.icon-list {
		display: inline-block;
		padding-left: 0;
		list-style-type: none;
		@media screen and (max-width: 767px) {
			width: 100%;
		}
		& > .icon-item {
			.icon-wrapper {
				& > img {
					width: 75%;
					height: auto;
				}
			}
		}
		& > .icon-item-with-dot {
			position: relative;
			display: inline-block;
			float: left;
			text-align: center;
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
					line-height: 5rem;
					color: white;
				}
			}
			p {
				margin-top: 1rem;
				margin-bottom: 0;
				width: 150px;
				color: $brand-secondary;
				font-weight: bold;
				opacity: 0;
				transition: opacity 250ms linear;
				@media screen and (max-width: 767px) {
					width: auto;
				}
			}
		}
		@media screen and (max-width: 767px) {
			& > .icon-item-with-dot {
				width: calc(25% - 15px);
				&:not(:first-of-type) {
					&:before {
						left: -30px;
						width: 40px;
						height: 6px;
					}
				}
			}

		}
		@media screen and (max-width: 360px) {
			& > .icon-item-with-dot {
				&:not(:first-of-type) {
					margin-left: 18px;
					&:before {
						left: -23px;
						width: 25px;
						height: 4px;
					}
				}
			}
			p {
				font-size: 1rem;
			}
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
