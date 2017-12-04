<template>
	<section>
		<div class="row">
			<carousel :indicators="indicators" :controls="!controls" :interval="interval" ref="carousel">
				<slide v-for="(item, index) in slides" :key="index">
					<div class="banner-wrapper">
						<img class="banner-img" :src="item.imgSrc">
					</div>
					<div class="carousel-caption" v-if="item.title">
						<h3>This is {{item.title}}</h3>
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
	}
</style>