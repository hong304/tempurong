<template>
	<section>
		<div class="row">
			<carousel :indicators="indicators" :controls="!controls" :interval="interval" ref="carousel">
				<slide v-for="(item, index) in slides" :key="index">
					<div class="banner-wrapper">
						<img class="banner-img" :src="item.imgSrc">
					</div>
					<div class="carousel-caption" v-if="item.title">
						<h3>{{item.title}}</h3>
						<router-link :to="{ name: 'Rooms' }" class="btn btn-main">
							{{ $t("button.viewRooms") }}
						</router-link>
					</div>
				</slide>
				<!-- custom indicators -->
				<template slot="indicators" slot-scope="props">
					<ol class="carousel-indicators custom-carousel-indicators">
						<li v-for="(slide, index) in slides"
								:class="{active:index === props.activeIndex}"
								@click="props.select(index)">
						</li>
					</ol>
				</template>
			</carousel>
		</div>
	</section>
</template>
<script>
  export default {
    props: {
      slides: this.slides
    },
    data () {
      return {
        interval: 3500,
        indicators: true,
        controls: true
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	.item {
		.banner-wrapper{
			display: inline-block;
			@media screen and (max-width: 767px) {
				width: 100%;
			}
			img {
				width: 100%;
				height: auto;
			}
		}
	}
	.custom-carousel-indicators {
		& > li {
			border: none;
			background-color: white;
			margin: 0 0.5rem;
			&.active {
				width: 10px;
				height: 10px;
				background-color: $brand-primary;
			}
		}
		@media screen and (max-width: 767px) {
			bottom: 5px;
			margin-bottom: 0;
		}
	}

	.carousel-caption {
		top: 50%;
		bottom: auto;
		left: auto;
		right: auto;
		width: 100%;
		transform: translateY(-50%);
		h3 {
			margin-bottom: 2em;
		}
		@media screen and (max-width: 767px) {
			h3 {
				font-size: 1.75rem;
				margin-bottom: 1.25rem;
			}
		}
		@media screen and (min-width: 768px) {
			.btn-main {
				text-transform: uppercase;
				font-weight: bold;
				font-size: 1.5rem;
			}
		}
	}
</style>