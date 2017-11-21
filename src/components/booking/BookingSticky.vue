<template>
	<div class="booking-sticky" :class="{ shown: show }">
		<button type="button" v-show="isMobile" @click="show=!show" class="btn btn-close"><span
						:class="{ 'ti-angle-up': !show, 'ti-angle-down': show}"></span>
		</button>
		<div class="summary-shorthand">
			<h2 class="total-price"><strong>{{ $t('components.booking.bookingSticky.total') }}</strong>
				${{ orderDetails.totalPrice }} MYR
			</h2>
			<h4 class="total-guests">
				<strong>{{ $tc('components.booking.bookingSticky.guests', orderDetails.totalGuests, {count: orderDetails.totalGuests})
					}}</strong>
				({{ $tc('dateUnit.days', totalDays, {count: totalDays}) }},
				{{ $tc('dateUnit.nights', totalNights, {count: totalNights}) }})
			</h4>
			<p class="check-in-out"><span class="ti-calendar"></span> {{orderDetails.checkIn}} - {{orderDetails.checkOut}}</p>
		</div>
		<div class="summary-detail">
			<div class="picker-input">
				
				<div class="no-of-people" v-show="orderDetails.adults">
					<p class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}} <span
									class="people-number">{{ orderDetails.adults }}</span></p>
				</div>
				
				<div class="no-of-people" v-show="orderDetails.children">
					<p class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}} <span class="people-number">{{ orderDetails.children
						}}</span></p>
				</div>
			
			</div>
			<div class="sticky-body" v-if="orderDetails.totalRooms">
				<h4>Total Booked room: {{ orderDetails.totalRooms }}</h4>
				<div class="room-summary" v-for="item in orderDetails.roomObjects">
					<div class="summary-details" v-if="item.noOfRoom">
						<h4>{{ item.name_en }} x {{ item.noOfRoom }}</h4>
						<ul class="text-list">
							<li>${{ item.price * item.noOfRoom }} MYR for {{ totalNights }} nights</li>
							<li v-if="item.extra_breakfast">(including {{ item.extra_breakfast }} extra breakfast</li>
							<li v-if="item.extra_mattress">(including {{ item.extra_mattress }} extra mattress</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="sticky-footer">
				<button class="btn" :class="{ 'btn-main': !isMobile, 'btn-secondary': isMobile }" @click="goToPreview">
					{{ $t('button.book') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'booking-sticky',
    components: {
      Multiselect
    },
    props: {
      isMobile: this.isMobile,
      orderDetails: this.orderDetails
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      totalGuests: function () {
        return this.orderDetails.adults + this.orderDetails.children
      },
      totalDays: function () {
        let i = this.$moment(this.orderDetails.checkIn)
        let o = this.$moment(this.orderDetails.checkOut)
        let days = o.diff(i, 'days') + 1
        return days
      },
      totalNights: function () {
        return this.totalDays - 1
      }
    },
    methods: {
      goToPreview: function () {
        if (this.orderDetails.totalRooms > 0) {
          this.$localStorage.set('orderDetails', JSON.stringify(this.orderDetails))
          this.$router.push({name: 'ReservationContact'})
        }
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.booking-sticky {
		border: 1px solid $light-grey;
		padding: 2rem;
		color: $brand-secondary;
		text-align: left;
		@media screen and (max-width: 991px) {
			position: fixed;
			height: 100vh;
			width: 100vw;
			top: calc(100vh - 8vh - 3.25rem);
			left: 0;
			padding: calc(1.5rem) 1.5rem 1.5rem;
			background-color: $brand-primary;
			border-color: $brand-secondary transparent transparent;
			overflow-y: scroll;
			z-index: 1;
			transition: top .3s ease;
			&.shown {
				top: 0;
			}
		}
		@media screen and (max-width: 767px) {
			top: calc(100vh - 12vh - 3.25rem);
		}
	}
	
	.summary-shorthand {
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid $light-grey;
		@media screen and (max-width: 767px) {
			min-height: calc(8vh);
			margin-bottom: 1.5rem;
			padding-bottom: 1.5rem;
		}
		.total-price {
			margin: 0;
			text-transform: uppercase;
			@media screen and (max-width: 767px) {
				font-size: 5vh;
			}
		}
		.total-guests {
			margin: 0.5rem 0 0;
			@media screen and (max-width: 767px) {
				font-size: 3vh;
				margin: 0;
			}
		}
		.check-in-out {
			margin: 0.5rem 0 0;
		}
	}
	
	.picker-input {
		margin: 0 0 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid $brand-secondary;
		.no-of-people {
			height: 20px;
			margin-bottom: 1rem;
			&:last-of-type {
				margin-bottom: 0;
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
			.people-title {
				margin-bottom: 0;
				.people-number {
					float: right;
				}
			}
			.controls {
				float: right;
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
	
	.summary-detail {
		overflow-y: scroll;
		overflow-x: hidden;
	}
	
	.multiselect {
		color: $brand-secondary;
	}
	
	.btn-main, .btn-secondary {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		font-weight: bold;
	}
	
	.btn-close {
		position: absolute;
		right: 0.5rem;
		height: 25px;
		width: 30px;
		padding: 0.25rem;
		top: 0;
		font-size: 16px;
		background: none;
		border: none;
		z-index: 1;
	}
	
	.sticky-body {
		h4 {
			text-transform: uppercase;
			font-weight: bold;
		}
		.room-summary {
			h4 {
				margin-bottom: 0;
			}
			.text-list {
				list-style-type: none;
				padding-left: 0;
			}
		}
	}


</style>