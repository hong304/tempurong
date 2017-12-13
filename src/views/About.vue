<template>
	<div class="container" id="about">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.about.pageTitle')"></content-title>
					<content-paragraph :contentParagraph="$t('pages.about.pageIntro')"></content-paragraph>
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
					<h3 v-html="$t('pages.about.area')"></h3>
					<p v-html="$t('pages.about.areaIntro')"></p>
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
        }
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
