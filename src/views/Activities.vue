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
				<li class="prev">
					<div class="icon-wrapper"><span class="ti-home"></span></div>
					<p>Tempourong</p>
				</li>
				<li class="prev">
					<div class="icon-wrapper"><span class="ti-home"></span></div>
					<p>Spiritual Tree</p>
				</li>
				<li class="active">
					<div class="icon-wrapper"><span class="ti-home"></span></div>
					<p>Healing Well</p>
				</li>
				<li>
					<div class="icon-wrapper"><span class="ti-home"></span></div>
					<p>Love Rock</p>
				</li>
			</ol>
			<div class="tab-content mt-4">
				<img :src="imageSrc" :alt="locationTitle"/>
				<div class="content-wrapper text-left">
					<div class="content-title">
						<h3>{{ locationTitle }}</h3>
						<div><span class="ti-time"></span> <p>{{ tourDuration }} mins</p></div>
						<div><span class="walking-distance"></span> <p>{{ walkingDistance }}m from resort</p></div>
					</div>
					<div class="content-content">
						<p>{{ locationIntro }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentContent from '../components/content/ContentParagraph.vue'

  export default {
    name: 'Activities',
    components: {
      ContentContent,
      ContentTitle
    },
    data () {
      return {
        imageSrc: '/static/img/demo-about-01.jpg',
        locationTitle: 'Healing Well',
        tourDuration: 30,
        walkingDistance: 30,
        locationIntro: 'Over 400 years ago, there was a devastating drought in the area. Villagers were directed to dig a well in a location that was thought to have a water source underground. The villagers tasked with digging the well were skeptical, but with little choice they kept digging anyways. Amazingly, the well they dug was able to provide enough water for the whole village for a long time to come. The water was known to have healing properties, so when elders fell ill, they would bathe in and drink from the well.  This well is now known as the Wellness Healing Well and is a 5-minute walk away from the resort.'
      }
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
			&:hover, &:focus, &.active {
				.icon-wrapper {
					background-color: $brand-secondary;
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
			}
			.icon-wrapper {
				display: inline-flex;
				justify-content: center;
				width: 5rem;
				height: 5rem;
				background-color: $brand-primary;
				border-radius: 50%;
				transition: background-color 150ms linear;
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
