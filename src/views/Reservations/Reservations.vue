<template>
	<div class="container" id="reservations">
		<section class="padding-of-section mt-5 py-3 py-sm-5">
			<div class="row mb-0 mb-sm-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.reservations.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
		</section>
		<div class="overlay-wrapper my-5" v-if="!optionSelected">
			<div class="overlay-options">
				<div class="picker-input">
					<HotelDatePicker class="custom-picker"
													 :startDate="new Date()"
													 :i18n="defineDatePicker()"
													 v-on:checkInChanged="checkIn = $event"
													 v-on:checkOutChanged="checkOut = $event"
					></HotelDatePicker>
					<h5 class="error-message" v-if="errorDate"><span class="ti-alert"></span>Please select check in and check out date.
					</h5>
					<div class="no-of-people">
						<span class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}}</span>
						<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 0)" class="btn btn-minus"
										:disabled="!counterAdults"><span
								class="ti-minus"></span></button>
						<span class="counter-num">{{ counterAdults }}</span>
						<button type="button" @click="changePeopleNumber('add', 0)" class="btn btn-plus"><span
								class="ti-plus"></span></button>
						</span>
					</div>

					<div class="no-of-people">
						<span class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}}</span>
						<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 1)" class="btn btn-minus"
										:disabled="!counterChildren"><span
								class="ti-minus"></span></button>
						<span class="counter-num">{{ counterChildren }}</span>
						<button type="button" @click="changePeopleNumber('add', 1)" class="btn btn-plus"><span
								class="ti-plus"></span></button>
						</span>
					</div>
					<h5 class="error-message" v-if="errorPeople"><span class="ti-alert"></span>
						Please select at least one guest.</h5>

				</div>
				<button type="button" class="btn btn-main" @click="checkSelected">{{$t('button.submit')}}</button>
			</div>
		</div>

		<section class="pb-5" v-if="optionSelected">
			<div class="row py-5">
				<div class="col-md-8 col-xs-12">
					<div class="picker-input">
						<HotelDatePicker
								:startDate="new Date()"
								:i18n="defineDatePicker()"
								v-on:checkInChanged="checkIn = $event"
								v-on:checkOutChanged="checkOutDate($event)"></HotelDatePicker>

						<div class="no-of-people">
							<span class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}}</span>
							<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 0)" class="btn btn-minus"
										:disabled="!counterAdults"><span
								class="ti-minus"></span></button>
						<span class="counter-num">{{ counterAdults }}</span>
						<button type="button" @click="changePeopleNumber('add', 0)" class="btn btn-plus"><span
								class="ti-plus"></span></button>
						</span>
						</div>

						<div class="no-of-people">
							<span class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}}</span>
							<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 1)" class="btn btn-minus"
										:disabled="!counterChildren"><span
								class="ti-minus"></span></button>
						<span class="counter-num">{{ counterChildren }}</span>
						<button type="button" @click="changePeopleNumber('add', 1)" class="btn btn-plus"><span
								class="ti-plus"></span></button>
						</span>
						</div>

						<h5 class="error-message" v-if="errorTotalGuest"><span class="ti-alert"></span>
							Please select at least one guest.</h5>

					</div>
					<div v-for="(item, index) in roomTypes">
						<room-card :result="item" :index="index" :availableRooms="rooms[item.id]"
											 v-on:roomUpdates="roomDataUpdate"></room-card>
					</div>
				</div>
				<div class="col-md-4 col-xs-12">
					<booking-sticky
							:isMobile="isMobile"
							:totalAdults="counterAdults"
							:totalChildren="counterChildren"
							:checkInDate="checkIn"
							:checkOutDate="checkOut"
							:resData="roomObjects"
							:totalRooms="totalRooms"
					></booking-sticky>
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
        bgImageSrc: '/static/img/demo-about-02.jpg',
        optionSelected: false,
        errorDate: false,
        errorPeople: false,
        titleOne: 'Reservations',
        roomTypes: [],
        roomObjects: [],
        rooms: [],
        checkIn: ' ',
        checkOut: ' ',
        counterAdults: 0,
        counterChildren: 0,
        errorTotalGuest: false,
        totalRooms: 0
      }
    },
    props: {
      isMobile: this.isMobile
    },
    methods: {
      checkSelected: function () {
        if (this.checkIn !== '' && this.checkOut !== '') {
          if (this.counterAdults > 0 || this.counterChildren > 0) {
            this.checkIn = this.$moment(this.checkIn).format('YYYY-MM-DD')
            this.checkOut = this.$moment(this.checkOut).format('YYYY-MM-DD')
            this.optionSelected = true
            this.getAvailableRooms()
          } else {
            this.errorPeople = true
          }
        } else {
          this.errorDate = true
        }
      },
      fetchRooms: function () {
        this.axios.get('/api/room-type').then((response) => {
          this.roomTypes = response.data
        }, (error) => {
          console.log(error)
        })
      },
      roomDataUpdate: function (val) {
        this.roomObjects[val.index] = val.room
        this.roomObjects = _.merge(this.roomObjects, this.roomTypes)
        let calculated = 0
        let result = _.map(this.roomObjects, 'noOfRoom')
        _.forEach(result, function (value) {
          if (!(typeof value === 'undefined')) {
            calculated += value
          }
        })
        this.totalRooms = calculated
      },
      defineDatePicker: function () {
        return this.$i18n.getLocaleMessage(this.$i18n.locale).datePicker
      },
      getAvailableRooms: function () {
        this.axios.post('/api/checkAvailableRooms', {
          checkIn: this.checkIn,
          checkOut: this.checkOut
        }).then((response) => {
          this.rooms = response.data
        }, (error) => {
          console.log(error)
        })
      },
      checkOutDate: function (date) {
        this.checkIn = this.$moment(this.checkIn).format('YYYY-MM-DD')
        this.checkOut = this.$moment(date).format('YYYY-MM-DD')
        this.getAvailableRooms()
      },
      changePeopleNumber (type, people) {
        if (type === 'minus') {
          people ? this.counterChildren-- : this.counterAdults--
          if (!(this.counterAdults + this.counterChildren)) {
            this.errorTotalGuest = true
            people ? this.counterChildren += 1 : this.counterAdults += 1
          }
        } else if (type === 'add') {
          people ? this.counterChildren++ : this.counterAdults++
          this.errorTotalGuest = false
        }
      }
    },
    mounted: function () {
      this.fetchRooms()
    },
    watch: {}
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.overlay-wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		background-color: white;
		min-height: 30vh;
		.overlay-options {
			flex: 0 1 auto;
			align-self: center;
			display: inline-block;
			padding: 2.5rem;
			@media screen and (max-width: 767px) {
				padding: 0;
			}
			.btn-main {
				padding: 0.75rem 3rem;
				border: 1px solid #ECBE03;
				text-transform: uppercase;
				font-weight: bold;
				@media screen and (max-width: 767px) {
					width: 100%;
				}
			}
		}
	}

	.picker-input {
		margin: 0 0 2rem;
		padding-bottom: 0;
		& > div {
			height: 40px;
			margin-bottom: 1rem;
			&:last-of-type {
				margin-bottom: 0;
			}
			&.no-of-people {
				display: inline-block;
				min-height: 27px;
				width: calc(50% - 0.75rem);
				padding: 0.5rem 1.5rem;
				border: 1px solid $light-grey;
				border-radius: 5px;
				color: $brand-secondary;
				background-color: white;
				@media screen and (max-width: 767px) {
					width: 100%;
					margin-top: -0.5rem;
				}
				&:last-of-type {
					margin: 0 0 0 1rem;
					@media screen and (max-width: 767px) {
						margin: 0;
					}
				}
				.people-title {
					line-height: 27px;
					margin-right: 0.5rem;
				}
				.controls {
					.btn-minus, .btn-plus {
						background-color: transparent;
						color: $brand-primary;
						width: 25px;
						height: 25px;
						border: 1px solid $brand-primary;
						border-radius: 50%;
						padding: 0;
						line-height: 25px;
						font-size: 15px;
						vertical-align: middle;
						outline: none;
					}
				}
			}
		}
	}

</style>
<style lang="scss">
	@import '../../assets/style/setting';

	.picker-input {
		margin: 0 0 1rem;
		padding-bottom: 2rem;
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
					cursor: pointer;
					&::placeholder {
						color: $brand-secondary;
					}
					&:first-child {
						background-image: url('../../assets/img/arrow-brand-sec.svg')
					}
				}
			}
			&.custom-picker {
				border-radius: 5px;
				border: 1px solid $light-grey;
				background-color: white;
				.datepicker__dummy-wrapper {
					border: none;
					border-radius: 0;
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
