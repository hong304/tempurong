<template>
	<div class="container" id="about">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.about.pageTitle')"></content-title>
				</div>
			</div>
		</section>
		<section class="my-5 content-wrapper">
			<div class="row">
				<div class="col-sm-4 col-xs-12 mb-md-0 mb-4 text-center">
					<img class="img-fluid" :src="imageSrc"/>
				</div>
				<div class="col-sm-8 col-xs-12">
					<h3>Tempurong Golden Beach Resort</h3>
					<p v-html="$t('pages.about.pageIntro')"></p>
				</div>
			</div>

			<div class="row my-5 py-5">
				<div class="col-xs-12 col-sm-4 col-sm-push-8 mb-md-0 mb-4 text-center">
					<img class="img-fluid" :src="mapSrc"/>
				</div>
				<div class="col-xs-12 col-sm-8 col-sm-pull-4">
					<h3 v-html="$t('pages.about.area')"></h3>
					<p v-html="$t('pages.about.areaIntro')"></p>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-4 col-xs-12 mb-md-0 mb-4 text-center">
					<img class="img-fluid" :src="imageSrcTwo"/>
				</div>
				<div class="col-sm-8 col-xs-12">
					<h3>{{ $t('pages.about.turtle') }}</h3>
					<p v-html="$t('pages.about.turtleIntro')"></p>
				</div>
			</div>

			<div class="row my-5 py-5">
				<div class="col-xs-12 col-sm-4 col-sm-push-8 mb-md-0 mb-4 text-center">
					<img class="img-fluid" :src="imageSrcThree"/>
				</div>
				<div class="col-xs-12 col-sm-8 col-sm-pull-4">
					<h3 v-html="$t('pages.about.weather')"></h3>
					<p v-html="$t('pages.about.weatherIntro')"></p>
				</div>
			</div>
		</section>

		<section class="padding-of-section mt-5">
			<div class="row text-center mb-5">
				<div class="col-xs-12">
					<h3>{{ $t('pages.about.sectionTitle') }}</h3>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-sm-4 col-xs-12 mb-md-0 mb-4" v-for="item in ctaData">
					<cta-card :resData="item"></cta-card>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'
  import CtaCard from '../components/card/CtaCard.vue'

  export default {
    components: {
      CtaCard,
      ContentTitle,
      ContentParagraph
    },
    name: 'About',
    data () {
      return {
        imageSrc: '/static/img/demo-about-01.jpg',
        mapSrc: '/static/img/demo-drawing-map.jpg',
        imageSrcTwo: '/static/img/about/sea-turtle.jpg',
        imageSrcThree: '/static/img/about/weather.jpg',
        ctaData: [
          {
            imageSrc: '/static/img/room_type/room-01.jpg',
            title: 'Rooms',
            route: {name: 'Rooms'}
          },
          {
            imageSrc: '/static/img/demo-about-01.jpg',
            title: 'Activities',
            route: {name: 'Activities'}
          },
          {
            imageSrc: '/static/img/demo-about-01.jpg',
            title: 'Food',
            route: {name: 'Food'}
          }
        ]
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
			&.img-fluid {
				@media screen and (max-width: 767px) {
					width: 70%;
				}
			}
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
