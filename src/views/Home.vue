<template>
	<div class="container">
		<carousel></carousel>
		<booking-nav></booking-nav>
		<section class="margin-of-section">
			<content-title :contentTitle="titleOne"></content-title>
			<content-paragraph ></content-paragraph>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/paragraph/ContentTitle.vue'
  import ContentParagraph from '../components/paragraph/ContentParagraph.vue'
  import Carousel from '../components/image/Carousel.vue'
  import BookingNav from '../components/booking/BookingNav.vue'

  export default {
    name: 'Home',
    components: {
      ContentParagraph,
      ContentTitle,
      Carousel,
      BookingNav
    },
    data () {
      return {
        titleOne: 'Welcome to Tempurong'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
