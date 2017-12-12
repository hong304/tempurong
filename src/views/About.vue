<template>
	<div class="container" id="about">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.about.pageTitle')"></content-title>
					<content-paragraph :contentParagraph="contentParagraph"></content-paragraph>
				</div>
			</div>
		</section>
		<section class="my-5 content-wrapper">
			<div class="row">
				<div class="col-xs-12">
					<img :src="imageSrc"/>
				</div>
			</div>
			<div class="row my-5 py-5">
				<div class="col-xs-12 col-sm-8">
					<h3>The Area: Kuala Penyu,<br>Sabah</h3>
					<p>Tempurong Golden Beach Resort is located at Tempurung Beach, about 15 Kilometres away from the town of Kuala Penyu, Sabah (about 2 hours from Kota Kinabalu Airport). The village was named about 200 years ago when local villagers found a coconut shell on the beach engraved with holy verses of the Quran, inspiring the name “Tempurung,” translating to “coconut shell” in Malay. The villagers believed that by naming the village after that coconut, God would grant good health and prosperity to the people.</p>
					<router-link :to="buttonPath" class="btn btn-main">{{ $t('button.discoverMore') }}</router-link>
				</div>
				<div class="col-xs-12 col-sm-4">
					<img :src="mapSrc"/>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col-xs-4 p-md-4 p-1" v-for="item in navImage">
					<img :src="item.imageSrc" :alt="item.imageAlt" class=""/>
				</div>
			</div>
			<div class="row my-5 py-5">
				<div class="col-xs-12">
					<h3>Weather</h3>
					<p>
						In general, Kota Kinabalu and Sabah in general is lush and tropical, so a fair amount of rain can be expected all year round, but it’s not usually an all-day affair. The “best time” to visit is from January to March because the climate is relatively cooler and drier.
					</p>
					<p>
						October is usually wetter, however weather patterns have been changing in recent years so you can often still have very clear days. May and April are very humid and hot, so be prepared and plan a visit to swim around the islands or up to the cooler mountains!
					</p>
				</div>
				<!--<div class="col-xs-12">-->
					<!--<img src="/static/img/about/icon-month.jpg"/>-->
				<!--</div>-->
			</div>

			<!--<div class="row my-5 py-5">-->
				<!--<div class="col-xs-12 col-sm-6">-->
					<!--<h3>Dry Season</h3>-->
					<!--<p>-->
						<!--November to March and May to September are generally considered the “dry season”, with June being the driest. May and April are extremely humid and hot, so be prepared with sunscreen, sunglasses and a hat to protect yourself, and plan a visit to swim around the islands or up to the cooler mountains!-->
					<!--</p>-->
				<!--</div>-->
				<!--<div class="col-xs-12 col-sm-6">-->
					<!--<h3>Wet Season</h3>-->
					<!--<p>-->
						<!--April, May, and November tend to be rainier but usually in the early morning and late afternoon, meaning that you can enjoy a pleasant and cooler period for part of the day. October is usually wetter, however weather patterns have been changing in recent years so you can often still have very clear days (as in 2017).-->
					<!--</p>-->
				<!--</div>-->
			<!--</div>-->
		</section>
		<section class="padding-of-section mt-5">
			<div class="row text-center mb-5">
				<div class="col-xs-12">
					<h3>{{ $t('pages.about.sectionTitle') }}</h3>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-xs-12 p-0">
					<div class="image-wrapper with-overlay-content">
						<div class="image-bg">
							<img :src="cfa.imageSrc"/>
						</div>
						<div class="overlay-info-wrapper px-4 px-md-0">
							<div class="overlay-content-wrapper">
								<p>{{ cfa.infoParagraph }}</p>
								<div class="btn-group">
									<router-link :to="cfa.buttonPath" class="btn btn-border">{{ $t('button.bookNow') }}</router-link>
									<router-link :to="cfa.buttonPathTwo" class="btn btn-border">{{ $t('button.moreAreaAndActivities') }}
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'

  export default {
    components: {
      ContentTitle,
      ContentParagraph
    },
    name: 'About',
    data () {
      return {
        imageSrc: '/static/img/demo-about-01.jpg',
        mapSrc: '/static/img/demo-drawing-map.jpg',
        buttonPath: '#',
        imageSrcTwo: '/static/img/demo-about-02.jpg',
        buttonPathTwo: '#',
        navImage: [
          {
            imageSrc: '/static/img/demo-about-02.jpg',
            imageAlt: 'Tempurong About Alt Text'
          },
          {
            imageSrc: '/static/img/demo-about-02.jpg',
            imageAlt: 'Tempurong About Alt Text'
          },
          {
            imageSrc: '/static/img/demo-about-02.jpg',
            imageAlt: 'Tempurong About Alt Text'
          }
        ],
        cfa: {
          imageSrc: '/static/img/demo-image-divider.jpg',
          infoParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          buttonPath: '#',
          buttonPathTwo: '#'
        },
        contentParagraph: 'Tempurong Golden Beach Resort is a family-owned, beautiful, oceanside retreat offering stunning views and a variety of coastal activities, located directly on the Tempurong Beach in Kuala Penyu, Sabah. Whether you’re looking for a relaxing getaway or something more adventurous, we will help you plan a memorable experience that fits your needs. With many delicious meal options you can rest easy knowing that you will get an authentic taste of the local flavor no matter what your dietary preferences happen to be. We offer private rooms capable of accommodating whole families as well as mixed dormitory rooms, making the resort an ideal destination for solo travelers, couples, groups, and families alike.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#about {
		color: $brand-secondary;
		img {
			width: 100%;
			height: auto;
		}
		h3 {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 0;
			font-size: 3rem;
		}
		.btn-main {
			text-transform: uppercase;
		}
	}

	.content-wrapper {
		text-align: left;
	}

	.image-bg {
		overflow-x: hidden;
		& > img {
			width: 100%;
			height: auto;
			@media screen and (max-width: 767px) {
				position: relative;
				width: auto;
				min-height: 35vh;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	.with-overlay-content {
		position: relative;
		.overlay-info-wrapper {
			position: absolute;
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.25);
			color: white;
			overflow-x: hidden;
			.overlay-content-wrapper {
				flex: 0 0 auto;
				width: 100%;
				align-self: center;
				padding: 0 7rem;
				@media screen and (max-width: 767px) {
					padding: 0;
				}
				& > h3 {
					margin-top: 0;
				}
				& > p {
					margin-bottom: 0;
				}
			}
			.btn-group {
				flex: 0 0 auto;
				margin-top: 2rem;
				.btn-border {
					display: inline-block;
					margin: 0 1rem;
					border-radius: 5px !important;
				}
			}
		}
	}

	.nav-image {
		cursor: pointer;
	}

</style>
