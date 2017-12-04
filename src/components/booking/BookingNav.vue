<template>
	<section>
		<div class="row">
			<div class="picker-nav-bar">
				<div class="picker-input">
					<HotelDatePicker
									:startDate="new Date()"
									:i18n="defineDatePicker()"
									v-on:checkInChanged="checkIn = $event"
									v-on:checkOutChanged="checkOutSelected($event)">
					</HotelDatePicker>
					
					<div class="no-of-people">
						<span class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}}</span>
						<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 0)" class="btn btn-minus">
							<span class="ti-minus"></span></button>
						<span class="counter-num">{{ counterAdults }}</span>
						<button type="button" @click="changePeopleNumber('add', 0)" class="btn btn-plus"><span
										class="ti-plus"></span></button>
						</span>
					</div>
					
					<div class="no-of-people">
						<span class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}}</span>
						<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 1)" class="btn btn-minus">
							<span class="ti-minus"></span></button>
						<span class="counter-num">{{ counterChildren }}</span>
						<button type="button" @click="changePeopleNumber('add', 1)" class="btn btn-plus"><span
										class="ti-plus"></span></button>
						</span>
					</div>
					
					<h5 class="error-message" v-if="errorPeople"><span class="ti-alert"></span>
						{{ $t('error.noGuestSelected') }}</h5>
				
				</div>
				<div class="picker-button">
					<router-link
									:to="{ name: 'Reservations',
                            params: {
                              checkInFromHome: this.checkIn,
                              checkOutFromHome: this.checkOut,
                              adultsFromHome: this.counterAdults,
                              childrenFromHome: this.counterChildren
                            } }"
									class="picker-nav-link">{{ $t('button.bookNow') }}
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  import HotelDatePicker from 'vue-hotel-datepicker'

  export default {
    components: {
      HotelDatePicker
    },
    data () {
      return {
        checkIn: '',
        checkOut: '',
        counterAdults: 0,
        counterChildren: 0,
        errorPeople: false
      }
    },
    mounted: function () {
    },
    methods: {
      defineDatePicker: function () {
        return this.$i18n.getLocaleMessage(this.$i18n.locale).datePicker
      },
      checkOutSelected: function (val) {
        this.checkOut = val
        this.checkIn = this.$moment(this.checkIn).format('YYYY-MM-DD')
        this.checkOut = this.$moment(this.checkOut).format('YYYY-MM-DD')
      },
      changePeopleNumber (type, people) {
        if (type === 'minus') {
          people ? this.counterChildren-- : this.counterAdults--
          if (!(this.counterAdults + this.counterChildren)) {
            this.errorPeople = true
            people ? this.counterChildren += 1 : this.counterAdults += 1
          }
        } else if (type === 'add') {
          people ? this.counterChildren++ : this.counterAdults++
          this.errorPeople = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.picker-nav-bar {
		@media screen and (max-width: 767px) {
			display: inline-block;
			padding: 1rem;
		}
		
		.picker-input {
			display: flex;
			flex: 1 0 auto;
			margin: 1rem 0.5rem 1rem 1rem;
			padding-bottom: 0;
			@media screen and (max-width: 767px) {
				display: inline-block;
				margin: 0;
			}
			& > div {
				flex: 1 1 auto;
				height: 40px;
				margin-bottom: 1rem;
				&.datepicker__wrapper {
					width: auto !important;
					@media screen and (max-width: 767px) {
						margin-bottom: 0.5rem;
					}
				}
				&:not(:first-of-type) {
					margin-left: 1rem;
					@media screen and (max-width: 767px) {
						display: inline-block;
						margin-left: 0;
					}
				}
				&:last-of-type {
					margin-bottom: 0;
				}
				&.no-of-people {
					display: inline-block;
					min-height: 27px;
					padding: 0.5rem 1.5rem;
					border: 1px solid white;
					border-radius: 5px;
					color: white;
					@media screen and (max-width: 767px) {
						/*width: 100%;*/
						/*margin-top: -0.5rem;*/
						width: calc(50% - 0.3rem);
						padding: 0.5rem 0.5rem;
					}
					.people-title {
						line-height: 27px;
						margin-right: 0.5rem;
					}
					.controls {
						.btn-minus, .btn-plus {
							background-color: transparent;
							color: white;
							width: 25px;
							height: 25px;
							border: 1px solid white;
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
		.picker-button {
			@media screen and (max-width: 767px) {
				margin: 2rem 0 0;
			}
		}
	}

</style>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.picker-nav-bar {
		@media screen and (max-width: 767px) {
			display: block;
			padding: 1rem;
		}
		
		.picker-input {
			display: flex;
			flex: 1 0 auto;
			margin: 1rem 0.5rem 1rem 1rem;
			padding-bottom: 0;
			@media screen and (min-width: 768px) and (max-width: 991px) {
				margin: 1rem;
			}
			@media screen and (max-width: 767px) {
				display: inline-block;
				width: 100%;
				margin: 0;
			}
			& > div {
				flex: 1 1 auto;
				height: 40px;
				margin-bottom: 1rem;
				&.datepicker__wrapper {
					width: auto !important;
					@media screen and (max-width: 767px) {
						width: 100% !important;
						margin-bottom: 0.5rem;
					}
				}
				&:not(:first-of-type) {
					margin-left: 1rem;
					@media screen and (max-width: 767px) {
						display: inline-block;
						margin-left: 0;
					}
				}
				&:last-of-type {
					margin-bottom: 0;
				}
				&.no-of-people {
					display: inline-block;
					min-height: 27px;
					padding: 0.5rem 1.5rem;
					border: 1px solid white;
					border-radius: 5px;
					color: white;
					@media screen and (max-width: 767px) {
						width: calc(50% - 0.3rem);
						padding: 0.5rem 0.5rem;
					}
					.people-title {
						line-height: 27px;
						margin-right: 0.5rem;
					}
					.controls {
						.btn-minus, .btn-plus {
							background-color: transparent;
							color: white;
							width: 25px;
							height: 25px;
							border: 1px solid white;
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
		.picker-button {
			@media screen and (min-width: 768px) and (max-width: 991px) {
				width: calc(100% - 1.5rem);
				margin: 0 1rem 1rem;
			}
			@media screen and (max-width: 767px) {
				margin: 2rem 0 0;
			}
		}
	}

</style>

<style lang="scss">
	@import '../../assets/style/setting';
	
	.picker-nav-bar {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		background-color: $brand-primary;
		
		& > div {
			flex: 0 0 auto;
			align-self: center;
			@media screen and (max-width: 767px) {
				flex: 1 1 100%;
			}
		}
		.picker-input {
			height: 40px;
			margin: 1rem 0.5rem 1rem 1rem;
			@media screen and (max-width: 767px) {
				margin: 1rem 1rem 0.5rem;
			}
			.datepicker__wrapper {
				height: 40px;
				background-color: transparent;
				background-image: url('../../assets/img/calendar.svg');
				.datepicker__dummy-wrapper {
					border-color: white;
					border-radius: 5px;
					.datepicker__dummy-input {
						height: 40px;
						color: white;
						&::placeholder {
							color: white;
						}
						&:first-child {
							background-image: url('../../assets/img/arrow.svg')
						}
					}
				}
				.datepicker__clear-button {
					color: white;
					margin: 0 -2px 0 0;
					
				}
			}
		}
		.picker-button {
			align-self: center;
			line-height: 40px;
			margin: 1rem 1rem 1rem 0.5rem;
			padding: 0 2rem;
			background-color: white;
			border-radius: 5px;
			@media screen and (max-width: 767px) {
				margin: 0.5rem 1rem 1rem;
			}
			& > a {
				color: $brand-primary;
				&:hover, &:focus {
					text-decoration: none;
				}
			}
		}
		.datepicker {
			top: 40px;
		}
	}
</style>