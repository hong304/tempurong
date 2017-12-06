<template>
	<div class="container" id="order-detail">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.reservationsSummary.pageTitle')"></content-title>
				</div>
			</div>
		</section>
		<section class="py-5">
			<div class="row">
				<div class="col-xs-12">
					<div class="summary-wrapper">
						<div class="summary-header mb-5">
							<div class="row client-detail mb-3">
								<div class="col-xs-12">
									<h3>{{ $t('pages.reservationsSummary.clientName') }} : {{ clientName }}</h3>
									<h3>{{ $t('pages.reservationsSummary.clientEmail') }} : {{ orderContact.email }}</h3>
								</div>
							</div>
							<div class="row highlight-detail">
								<div class="col-sm-6 col-xs-12 py-5">
									<h3>{{ orderDetails.checkIn }} - {{ orderDetails.checkOut }}</h3>
									<p>({{ $tc('dateUnit.days', totalDays, {'count': totalDays}) }},
										{{ $tc('dateUnit.nights', totalNights, {'count': totalNights}) }})</p>
								</div>
								<div class="col-sm-6 col-xs-12 py-5">
									<h3>{{$tc('commonUnits.guests', orderDetails.totalGuests, {'count': orderDetails.totalGuests})}}</h3>
									<p>({{ $tc('commonUnits.adults', orderDetails.adults, {'count': orderDetails.adults}) }},
										{{ $tc('commonUnits.children', orderDetails.children, {'count': orderDetails.children}) }})</p>
								</div>
							</div>
						</div>
						<div class="summary-body">
							<div v-for="item in orderDetails.roomObjects">
								<room-summary-card
												v-if="item.noOfRoom"
												:resData="item"
												:totalNights="totalNights"
								></room-summary-card>
							</div>
						</div>
						<p class="error-message" v-if="error"><span class="ti-alert"></span> {{ $t(error) }}</p>
						<div class="summary-footer">
							<div>
								<h3>{{$t('pages.reservationsSummary.totalAmount')}}:
									<span class="total-price">{{ orderDetails.totalPrice }}MYR</span></h3>
								<!-- back button for editing the order details -->
								<button class="btn btn-main pull-left" @click="goToReservationContact()">
									<span class="ti-icon ti-pencil-alt"></span><span>{{$t('button.back')}}</span></button>
								
								<!--<button class="btn btn-main" @click="reservation()">{{$t('button.pay')}}</button>-->
								<PayPal
												:dev="dev"
												:buttonStyle="paypalBtn"
												:amount="orderDetails.totalPrice.toString()"
												currency="MYR"
												:client="credentials"
												:invoiceNumber="orderSessionId">
								</PayPal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<!--<form id="paypalForm" action="https://sandbox.paypal.com/cgi-bin/webscr" method="post">-->
		<!--&lt;!&ndash; Paypal business test account email id so that you can collect the payments. &ndash;&gt;-->
		<!--<input type="hidden" name="business" v-model="paypal.business">-->
		<!--&lt;!&ndash; Buy Now button. &ndash;&gt;-->
		<!--<input type="hidden" name="cmd" v-model="paypal.cmd">-->
		<!--&lt;!&ndash; Details about the item that buyers will purchase. &ndash;&gt;-->
		<!--<input type="hidden" name="item_name" v-model="paypal.item_name">-->
		<!--<input type="hidden" name="item_number" v-model="orderDetails.totalRooms">-->
		<!--<input type="hidden" name="amount" v-model="orderDetails.totalPrice">-->
		<!--<input type="hidden" name="currency_code" v-model="paypal.currency_code">-->
		<!--<input type="hidden" name="paymentaction" v-model="paypal.paymentaction">-->
		<!--&lt;!&ndash; URLs &ndash;&gt;-->
		<!--<input type='hidden' name='cancel_return' v-model='paypal.returnUrl'>-->
		<!--<input type='hidden' name='return' v-model='paypal.returnUrlSuccess'>-->
		<!--</form>-->
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import RoomSummaryCard from '@/components/card/RoomSummaryCard.vue'
  import PayPal from 'vue-paypal-checkout'

  export default {
    components: {
      RoomSummaryCard,
      ContentTitle,
      PayPal
    },
    name: 'reservations-summary',
    data () {
      return {
        orderDetails: {},
        orderContact: {},
        orderSessionId: '',
        credentials: {
          sandbox: 'ARRme_4jYmfXIawcu32gQiJtv1BdrYmUCyDlkrGVtNc6x-9qklMjATIeTLaz3zO19PtTYdbpsEipwzpN',
          production: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
        },
        paypal: {
          business: 'sabahtvlkk30-facilitator@hotmail.com',
          cmd: '_xclick',
          item_name: 'reservation',
          currency_code: 'MYR',
          paymentaction: 'authorization',
          returnUrl: 'http://staging.tempurong.buildonauts.com/reservations/summary',
          returnUrlSuccess: 'http://staging.tempurong.buildonauts.com/reservations/booked?o='
        },
        paypalBtn: {
          label: 'paypal',
          size:
            'small',    // small | medium | large | responsive
          shape:
            'rect',         // pill | rect
          color:
            'gold',         // gold | blue | silver | black
          tagline: false
        },
        dev: true,
        error:
          false
      }
    },
    props: {
      moreThanOne: {
        type: Boolean,
        default: function () {
          return true
        }
      },
      addExtra: {
        type: Boolean,
        default: function () {
          return true
        }
      }
    },
    methods: {
      goToReservationContact: function () {
        this.$router.push({name: 'ReservationContact'})
      },
      reservation: function () {
        let order = JSON.parse(this.$localStorage.get('orderDetails'))
        let clientInfo = JSON.parse(this.$localStorage.get('orderContact'))

        this.axios.post(process.env.API_URL + '/api/reservation', {
          order: order,
          clientInfo: clientInfo,
          lang: this.$i18n.locale
        }).then((response) => {
          if (response.data.status) {
            this.$localStorage.set('orderSessionId', response.data.message)
            this.orderSessionId = response.data.message
//            console.log(response.data)
//            console.log(this.paypal)
//            document.getElementById('paypalForm').submit()
//            this.submitPaypal(response)
          } else {
            this.error = 'error.reservationCheckout'
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.reservationCheckout'
        })
      },
      submitPaypal: async function (response) {
        this.$localStorage.set('orderSessionId', response.data.message)
        this.orderSessionId = response.data.message
        this.paypal.returnUrlSuccess = this.paypal.returnUrlSuccess + this.orderSessionId
        console.log(response.data.message)
        console.log(this.paypal)
        document.getElementById('paypalForm').submit()
      }
    },
    computed: {
      clientName: function () {
        if (this.$i18n.locale === 'sc') {
          return this.orderContact.lastName + ' ' + this.orderContact.firstName
        }
        return this.orderContact.firstName + ' ' + this.orderContact.lastName
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
    created () {
      if (!this.$localStorage.get('orderDetails') || !this.$localStorage.get('orderContact')) {
        this.$router.push({name: 'Reservations'})
      } else {
        this.orderDetails = JSON.parse(this.$localStorage.get('orderDetails'))
        this.orderContact = JSON.parse(this.$localStorage.get('orderContact'))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.summary-wrapper {
		margin: 0 5rem;
		padding: 5rem;
		border: 1px solid $light-grey;
		text-align: left;
		h3, p {
			color: $brand-secondary;
		}
		h3 {
			font-size: 2.5rem;
			font-weight: bold;
			margin: 0;
		}
		.summary-header {
			border-bottom: 1px solid $brand-primary;
			& > .row {
				& > div {
					padding-left: 3.5rem;
				}
				&.highlight-detail {
					& > div {
						&:first-of-type {
							border-right: 1px solid $brand-primary;
						}
					}
				}
				&.client-detail {
					h3 {
						margin-bottom: 0.75rem;
					}
				}
			}
		}
		.summary-body {
			border-bottom: 5px solid $brand-primary;
			margin-bottom: 3.5rem;
			h3 {
				margin-bottom: 2rem;
			}
		}
		.summary-header, .summary-header p {
			margin-bottom: 0;
		}
		.summary-body, .summary-footer {
			h3 {
				text-transform: uppercase;
			}
		}
		.summary-footer {
			text-align: right;
			h3 {
				margin-bottom: 1.5rem;
			}
			.total-price {
				&:before {
					content: '$';
					margin-right: 0.5rem;
				}
			}
		}
		.btn-main {
			text-transform: uppercase;
			.ti-icon {
				margin-right: 0.5rem;
			}
		}
	}
</style>
