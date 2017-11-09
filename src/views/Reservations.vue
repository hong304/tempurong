<template>
	<div class="container" id="reservations">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$('pages.reservations.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
		</section>
		<section class="py-5">
			<div class="row">
				<div class="col-md-8 col-xs-12">
					<room-card></room-card>
					<room-card></room-card>
					<room-card></room-card>
				</div>
				<div class="col-md-4 col-xs-12">
					<booking-sticky :isMobile="isMobile"></booking-sticky>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import RoomCard from '@/components/booking/RoomCard.vue'
  import BookingSticky from '@/components/booking/BookingSticky.vue'

  export default {
    components: {
      BookingSticky,
      RoomCard,
      ContentTitle,
      ContentParagraph
    },
    name: 'Reservations',
    data () {
      return {
        titleOne: 'Reservations',
        rooms: []
      }
    },
    props: {
      isMobile: this.isMobile
    },
    methods: {
      fetchRooms: function () {
        this.axios.get('/api/room').then((response) => {
          this.rooms = response.data
          console.log(response.data)
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.fetchRooms()
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
