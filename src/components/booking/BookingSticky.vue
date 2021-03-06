<template>
	<div class="booking-sticky" :class="{ shown: show, 'one-error': hasError  }">
		<div class="summary-shorthand">
			<button type="button" @click="show=!show" class="btn btn-close"><span
				:class="{ 'ti-angle-down': !show, 'ti-angle-up': show}"></span>
			</button>
			<h2 class="total-price"><strong>{{ $t('components.booking.bookingSticky.total') }}</strong>
				${{ orderDetails.totalPrice }} MYR
			</h2>
			<h4 class="total-guests">
				<strong>{{ $tc('commonUnits.guests', orderDetails.totalGuests, {count: orderDetails.totalGuests})
					}}</strong>
				({{ $tc('dateUnit.days', totalDays, {count: totalDays}) }},
				{{ $tc('dateUnit.nights', totalNights, {count: totalNights}) }})
			</h4>
			<p class="check-in-out"><span class="ti-calendar"></span> {{orderDetails.checkIn}} - {{orderDetails.checkOut}}</p>
			<h5 class="error-message" v-if="hasError"><span class="ti-alert"></span> {{ $t(hasError) }}</h5>
			<div class="divider" v-if="show"></div>
		</div>
		<div class="summary-detail" v-show="show">
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
				<h4>{{$t('components.booking.bookingSticky.totalRoom')}}: {{ orderDetails.totalRooms }}</h4>
				<div class="room-summary" v-for="item in orderDetails.roomObjects">
					<div class="summary-details" v-if="item.noOfRoom">
						<h4>{{ item['name_' + $i18n.locale] }} x {{ item.noOfRoom }}</h4>
						<ul class="text-list">
							<li>{{ $t('components.booking.bookingSticky.priceDescription',
                {
                  'price': (item.price * item.noOfRoom * totalNights),
                  'nights': $tc('dateUnit.nights', totalNights, {'count': totalNights})
                })}}
							</li>
							<li v-if="item.breakfast">$ {{item.breakfast * totalNights * 12 }} MYR
								{{$t('components.booking.bookingSticky.extraItemDescription',
                  {
                    'item': $tc('commonUnits.breakfast', item.breakfast, {'count': item.breakfast}),
                    'nights': $tc('dateUnit.nights', totalNights, {'count': totalNights})
                  }
                )}}
							</li>
							<li v-if="item.mattress">$ {{item.mattress * totalNights * 18 }} MYR
								{{$t('components.booking.bookingSticky.extraItemDescription',
                  {
                    'item': $tc('commonUnits.mattress', item.mattress, {'count': item.mattress}),
                    'nights': $tc('dateUnit.nights', totalNights, {'count': totalNights})
                  }
                )}}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p><span>{{ $t('components.card.roomCard.resortPolicyContent') }}</span>
				<router-link :to="{ name: 'Policy' }" target="_blank">{{ $t('components.card.roomCard.resortPolicyRoute') }}
				</router-link>
			</p>
		</div>
		<div class="sticky-action">
			<button class="btn" :class="{ 'btn-main': !isMobile, 'btn-secondary': isMobile }" @click="goToContact">
				{{ $t('button.book') }}
			</button>
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
      orderDetails: this.orderDetails,
      mattressUpdate: this.mattressUpdate
    },
    data () {
      return {
        show: !this.isMobile,
        hasError: false,
        roomsTotalCapacity: 0
      }
    },
    computed: {
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
    watch: {
      mattressUpdate: function () {
        this.calculateCapacity()
      }
    },
    methods: {
      goToContact: function () {
        if (this.show) {
          // check if no room selected
          if (this.orderDetails.totalRooms <= 0) {
            this.hasError = 'error.noRoomSelected'
          } else if (typeof this.orderDetails.checkIn === 'undefined' && this.orderDetails.checkIn.length <= 0) {
            this.hasError = 'error.noCheckInOut'
          } else if (this.orderDetails.totalGuests > this.roomsTotalCapacity) {
            this.hasError = 'error.guestAndRoomNoConflict'
          } else {
            this.hasError = false
          }

          if (this.hasError === false) {
            this.$localStorage.set('orderDetails', JSON.stringify(this.orderDetails))
            this.$router.push({name: 'ReservationContact'})
          }
        } else {
          this.show = true
        }
      },
      calculateCapacity: function () {
        let totalCapacity = 0
        this.orderDetails.roomObjects.forEach(function (item) {
          if (item.noOfRoom > 0) {
            let roomCapacity = item.capacity
            totalCapacity = totalCapacity + (roomCapacity * item.noOfRoom)
            if (item.mattress) {
              totalCapacity = totalCapacity + item.mattress
            }
          }
        })
        this.roomsTotalCapacity = totalCapacity
      }
    },
    mounted () {
      this.calculateCapacity()
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
			height: auto;
			width: 100vw;
			left: 0;
			top: 50px;
			padding: 1rem;
			background-color: $brand-primary;
			border-color: $brand-secondary transparent transparent;
			overflow-y: scroll;
			z-index: 1;
			transition: all .3s ease;
			&.shown {
				height: calc(100vh - 50px);
			}
			.btn-close {
				display: block;
			}
		}
		@media screen and (min-width: 992px) {
			.btn-close {
				display: none;
			}
		}
	}
	
	.summary-shorthand {
		position: relative;
		transition: margin 250ms linear, padding 250ms linear;
		@media screen and (max-width: 767px) {
			min-height: calc(8vh);
		}
		.divider {
			padding-bottom: 2rem;
			margin-bottom: 2rem;
			border-bottom: 1px solid $light-grey;
			@media screen and (max-width: 767px) {
				margin-bottom: 1.5rem;
				padding-bottom: 1.5rem;
			}
		}
		.total-price {
			margin: 0;
			text-transform: uppercase;
			@media screen and (max-width: 767px) {
				font-size: 3vh;
			}
		}
		.total-guests {
			margin: 0.5rem 0 0;
			@media screen and (max-width: 767px) {
				font-size: 2.5vh;
				margin: 0;
			}
		}
		.check-in-out {
			margin: 0.5rem 0 0;
			@media screen and (max-width: 767px) {
				font-size: 2.5vh;
			}
		}
	}
	
	.picker-input {
		margin: 0 0 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid $brand-secondary;
		.no-of-people {
			height: 20px;
			&:not(:first-of-type) {
				margin-bottom: 1rem;
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
		overflow-y: auto;
		overflow-x: hidden;
		-ms-overflow-style: none;
		p {
			a {
				color: $brand-secondary;
				text-decoration: underline;
				&:hover, &:focus {
					color: $brand-primary;
				}
			}
		}
	}
	
	.sticky-action {
		position: relative;
		@media screen and (max-width: 991px) {
			position: absolute;
			display: inline-block;
			right: 1rem;
			top: 1rem;
			.btn-main {
				border-radius: 0.75rem;
			}
		}
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
	
	.btn-main {
		@media screen and (min-width: 768px) and (max-width: 991px) {
			font-size: 2rem;
		}
		@media screen and (max-width: 991px) {
			background-color: $brand-secondary;
			border-radius: 0;
		}
	}
	
	.btn-close {
		position: absolute;
		right: 0;
		height: 25px;
		width: 30px;
		padding: 0.25rem;
		bottom: 0;
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
		@media screen and (max-width: 991px) {
			margin-bottom: 10vh;
		}
	}
	
	.error-message {
		margin-bottom: 0;
		&:not(:first-of-type) {
			margin-top: 0;
		}
	}


</style>