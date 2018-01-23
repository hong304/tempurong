<template>
	<div class="container" id="order-detail">
		<div id="loading-overlay" v-if="showLoading">
			<div class="overlay-wrapper">
				<div class="spinner">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
				<h3>Processing</h3>
				<p>Please don't refresh or close the page until the process is finished.</p>
			</div>
		</div>
		<section class="mt-5 py-sm-5 py-3">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.reservationsSummary.pageTitle')" :contentSubTitle="$t('pages.reservationsSummary.pageSubtitle')"></content-title>

				</div>
			</div>
		</section>
		<section class="py-sm-5 py-3">
			<div class="row">
				<div class="col-xs-12">
					<div class="summary-wrapper">
						<div class="summary-header mb-5">
							<div class="row client-detail mb-3">
								<div class="col-xs-12">
									<h3>{{ $t('pages.reservationsSummary.clientName') }} : {{ clientName }}</h3>
									<h3>{{ $t('pages.reservationsSummary.clientEmail') }} : {{ orderContact.email }}</h3>
									<h3>{{ $t('pages.reservationsSummary.clientMobile') }} : {{ orderContact.countryCode }} {{ orderContact.mobile }}</h3>
								</div>
							</div>
							<div class="row highlight-detail">
								<div class="col-sm-6 col-xs-12 py-md-5 pt-1">
									<h3>{{ orderDetails.checkIn }} {{ $t('dateUnit.to') }} {{ orderDetails.checkOut }}</h3>
									<p>({{ $tc('dateUnit.days', totalDays, {'count': totalDays}) }},
										{{ $tc('dateUnit.nights', totalNights, {'count': totalNights}) }})</p>
								</div>
								<div class="col-sm-6 col-xs-12 py-md-5 pb-3">
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
							<div class="row">
								<div class="col-xs-12">
									<table class="remarks-table">
										<tr>
											<td><p>{{ $t('pages.reservationsSummary.remark') }}: </p></td>
											<td><p v-html="getHtml(orderContact.remarks)"></p></td>
										</tr>
										<tr>
											<td><p>{{ $t('pages.reservationsSummary.additionalNotes') }}: </p></td>
											<td><p v-html="getHtml(orderContact.additionalNote)"></p></td>
										</tr>
									</table>
								</div>
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
								<PayPal v-if="!error"
								        v-on:paypal-paymentAuthorized="saveReservation"
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
          production: 'AUYcTNktgo4TPoHQV20vzFTSgFKmaYRiwjm_vEEbxkLUuPswRJbfW29WofgpPpB3fY_VNuEt4uih8buF'
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
        dev: process.env.PAYPAL_DEV,
        error: false,
        showLoading: false
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
        if (this.error) {
          this.$router.push({name: 'Reservations'})
        }
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
            this.orderSessionId = response.data.message
          } else {
            this.error = response.data.message
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.reservationCheckout'
        })
      },
      saveReservation: function (data) {
        this.showLoading = true
        this.axios.post(process.env.API_URL + '/api/reservation/update', {
          sessionId: this.orderSessionId,
          transactionId: data.paymentToken
        }).then((response) => {
          console.log(response)
          this.$localStorage.set('transactionId', response.data.message)
          this.showLoading = false
          this.$router.push({name: 'ReservationConfirmed'})
        }, (error) => {
          console.log(error)
          this.error = 'error.reservationCheckout'
        })
      },
      nl2br: function (str, isXhtml) {
        let breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br />' : '<br>'
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2')
      },
      getHtml: function (val) {
        return this.nl2br(val)
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
    },
    mounted () {
      this.reservation()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.summary-wrapper {
		max-width: 90%;
		margin: 0 auto;
		padding: 5rem;
		border: 1px solid $light-grey;
		text-align: left;
		@media screen and (max-width: 767px) {
			max-width: inherit;
			padding: 1.5rem;
		}
		h3, p {
			color: $brand-secondary;
		}
		h3 {
			font-size: 2.5rem;
			font-weight: bold;
			margin: 0;
			@media screen and (max-width: 767px) {
				font-size: 1.75rem;
			}
		}
		.summary-header {
			border-bottom: 1px solid $brand-primary;
			& > .row {
				&.highlight-detail {
					& > div {
						@media screen and (min-width: 768px) {
							&:first-of-type {
								border-right: 1px solid $brand-primary;
							}
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
			.remarks-table {
				td {
					padding: 0.5rem;
					vertical-align: top;
				}
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
	
	#loading-overlay {
		position: fixed;
		display: flex;
		justify-content: center;
		background-color: white;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		z-index: 99999;
		overflow: hidden;
		.overlay-wrapper {
			flex: 0 1 auto;
			align-self: center;
			h3 {
				text-transform: uppercase;
			}
			p {
				margin-bottom: 0;
			}
		}
	}
	
	.spinner {
		margin: 0 auto;
		width: 70px;
		text-align: center;
	}
	
	.spinner > div {
		width: 18px;
		height: 18px;
		background-color: $brand-secondary;
		
		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
		animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	}
	
	.spinner .bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}
	
	.spinner .bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}
	
	@-webkit-keyframes sk-bouncedelay {
		0%, 80%, 100% {
			-webkit-transform: scale(0)
		}
		40% {
			-webkit-transform: scale(1.0)
		}
	}
	
	@keyframes sk-bouncedelay {
		0%, 80%, 100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1.0);
			transform: scale(1.0);
		}
	}
</style>
