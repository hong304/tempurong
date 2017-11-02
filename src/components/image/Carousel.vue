<template>
	<section>
		<carousel :indicators="indicators" :controls="!controls" :interval="interval" ref="carousel">
			<slide v-for="(slide, index) in slides" :key="index">
				<div style="width: 100%;height: 400px;" :style="{background:index % 2 === 0? '#866809' : '#866809'}"></div>
				<div class="carousel-caption">
					<h3>This is {{slide.title}}</h3>
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
	</section>
</template>
<script>
  export default {
    data () {
      return {
        interval: 3500,
        indicators: true,
        controls: true,
        slides: [
          {title: 'Slide 1'},
          {title: 'Slide 2'},
          {title: 'Slide 3'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
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