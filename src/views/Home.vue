<template>
    <div class="container">
        <carousel></carousel>
        <booking-nav></booking-nav>
        <section class="margin-of-section">
            <content-title :contentTitle="titleOne"></content-title>
            <content-paragraph></content-paragraph>
        </section>
        <section>
            <content-title :contentTitle="titleTwo"></content-title>
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <card></card>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'
  import Carousel from '../components/image/Carousel.vue'
  import BookingNav from '../components/booking/BookingNav.vue'
  import Card from '../components/image/Card.vue'

  export default {
    name: 'Home',
    components: {
      ContentParagraph,
      ContentTitle,
      Carousel,
      BookingNav,
      Card
    },
    data () {
      return {
        titleOne: 'Welcome to Tempurong',
        titleTwo: 'Activities'
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
