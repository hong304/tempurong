<template>
	<div class="container" id="reservations">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.reservations.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
		</section>
		<section class="py-5">
			<div class="row">
				<div class="col-md-8 col-xs-12">
					<div class="picker-input">
						<HotelDatePicker :startDate="new Date()" :i18n="defineDatePicker()"
						                 v-on:checkInChanged="checkIn = $event"
						                 v-on:checkOutChanged="checkOutDate($event)"/>
					</div>
					<div v-for="(item, index) in roomTypes">
						<room-card :result="item" :index="index" v-on:roomUpdates="roomDataUpdate"></room-card>
					</div>
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
  import HotelDatePicker from 'vue-hotel-datepicker'

  export default {
    components: {
      BookingSticky,
      RoomCard,
      ContentTitle,
      ContentParagraph,
      HotelDatePicker
    },
    name: 'Reservations',
    data () {
      return {
        titleOne: 'Reservations',
        roomTypes: [],
        roomObjects: [],
        checkIn: ' ',
        checkOut: ' '
      }
    },
    props: {
      isMobile: this.isMobile
    },
    methods: {
      fetchRooms: function () {
        this.axios.get('/api/room-type').then((response) => {
          this.roomTypes = response.data
        }, (error) => {
          console.log(error)
        })
      },
      roomDataUpdate: function (val) {
        this.roomObjects[val.index] = val.room
        console.log(this.roomObjects)
      },
      defineDatePicker: function () {
        return this.$i18n.getLocaleMessage(this.$i18n.locale).datePicker
      },

      checkOutDate: function (date) {
        this.checkOut = date
        this.axios.post('/api/checkAvailableRooms', {
          checkIn: this.checkIn,
          checkOut: this.checkOut
        }).then((response) => {

        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.fetchRooms()
    },
    watch: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import '../../assets/style/setting';
	
	.picker-input {
		margin: 0 0 1rem;
		padding-bottom: 2rem;
		& > div {
			height: 40px;
			margin-bottom: 1rem;
			&:last-of-type {
				margin-bottom: 0;
			}
		}
		.datepicker__wrapper {
			height: 40px;
			background-color: transparent;
			background-image: url('../../assets/img/calendar-brand-sec.svg');
			.datepicker__dummy-wrapper {
				border-color: $light-grey;
				border-radius: 5px;
				.datepicker__dummy-input {
					height: 40px;
					color: $brand-secondary;
					&::placeholder {
						color: $brand-secondary;
					}
					&:first-child {
						background-image: url('../../assets/img/arrow-brand-sec.svg')
					}
				}
			}
			.datepicker__clear-button {
				color: $brand-secondary;
				margin: 0 -2px 0 0;
				
			}
		}
	}
	
	.datepicker {
		top: 40px;
	}

	.datepicker__month-day {
		cursor: pointer;
	}

</style>
