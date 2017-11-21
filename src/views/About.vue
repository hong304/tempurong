<template>
	<div class="container" id="about">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.about.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
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
					<h3>Tempurong Golden Beach Resort,<br>Kuala Penyu</h3>
					<p>
						Tempurong Golden Beach Resort is located at Tempurong Beach (or Pantai Tempurung) about 15 Kilometres away from Kuala Penyu town.</p>
					<p>
						Tempurung means Coconut Shell in Malay. About 200 years ago, the villagers found a coconut shell engraved with holy verses of the Al-Quran on the beach, so they renamed this village from Tanah Merah to Tempurung. The villager believe the new name "Tempurong" will bring good health and good wealth to the village itself.</p>
					<router-link :to="buttonPath" class="btn btn-main">{{ $t('button.discoverMore') }}</router-link>
				</div>
				<div class="col-xs-12 col-sm-4">
					<img :src="mapSrc"/>
				</div>
			</div>
			<div class="row pt-5">
				<div class="col-xs-8">
					<div class="image-wrapper">
						<img :src="imageSrcTwo"/>
					</div>
				</div>
				<div class="col-xs-4">
					<p>
						Tempurong Golden Beach Resort currently have 15 rooms, restaurant and sunset bar and expansion is continuing to rise. There are eight small beach homes built facing the sea,  and the other seven is a double huts. Through a window have panoramic sea views. Each room has a private bathroom, air-conditioning , hot water shower available. After moving here you can enjoy the sunshine, the golden beach and the sunset.</p>
					<router-link :to="buttonPathTwo" class="btn btn-main">{{ $t('button.viewRooms') }}</router-link>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col-xs-4 p-4" v-for="item in navImage">
					<img :src="item.imageSrc" :alt="item.imageAlt" @click="imageSrcTwo = item.imageSrc"/>
				</div>
			</div>
			<div class="row my-5 pt-5">
				<div class="col-xs-12">
					<h3>Fairy Tales</h3>
					<p>
						Once upon a time, a beautiful hardworking girl with kind hearted named Aisha. This charming Aisha is admired by many young admirers. However, she fell in love with a handsome guy John of another village. Both lovers are not blessed by their own village. They were chased and escaped until they reached the spiritual tree to seek for help from the fairies. One of the fairies direct them to the space rock at Batu Luang Beach.</p>
					<p>
						When they arrived, they met Puteri Raja Alam who is the Princess of King of Nature. Their love touched the fairy who gave her compassionate to help them under one condition. They will never see their family again. Watching the people from both villages reaching the space rock by far, they amicably make the promise. Puteri Raja Alam created a cave for them to walk into the rock. When the villager arrived, they were both uncovered by the magical cave and never came out. This rock is known as the LOVE rock. The name in Malay is Batu Sayang Mengayangi.</p>
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
					<div class="image-wrapper">
						<div class="image-bg">
							<img :src="cfa.imageSrc"/>
						</div>
						<div class="overlay-info-wrapper px-4 px-md-0">
							<div class="overlay-content-wrapper">
								<p>{{ cfa.infoParagraph }}</p>
							</div>
							<div class="btn-group">
								<router-link :to="cfa.buttonPath" class="btn btn-border">{{ $t('button.bookNow') }}</router-link>
								<router-link :to="cfa.buttonPathTwo" class="btn btn-border">{{ $t('button.moreAreaAndActivities') }}</router-link>
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
            imageSrc: 'http://placehold.it/1440x808',
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
				height: 35vh;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

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
		.overlay-content-wrapper {
			flex: 0 0 auto;
			align-self: center;
			padding: 0 7rem;
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

</style>
