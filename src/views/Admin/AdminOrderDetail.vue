<template>
	<div class="container" id="order-detail">
		<section class="mt-md-5 py-md-5 mt-2 py-2">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.reservationsDetails.pageTitle')"></content-title>
				</div>
			</div>
		</section>
		<section class="py-md-5 py-2">
			<div class="row">
				<div class="col-xs-12">
					<div class="summary-wrapper">
						<div class="summary-header mb-5">
							<div class="row client-detail mb-3">
								<div class="col-xs-12">
									<h3>{{ $t('pages.reservationsSummary.clientName') }} : {{ clientName }}</h3>
									<h3>{{ $t('pages.reservationsSummary.clientEmail') }} : {{ resData.email }}</h3>
									<h3>{{ $t('pages.reservationsSummary.clientMobile') }} : {{ resData.country_code }} {{ resData.tel
										}}</h3>
									<h3>{{ $t('pages.reservationsDetails.reservationId') }} : {{ resData.session }}</h3>
									<h3>{{ $t('pages.reservationsDetails.reservationStatus')
										}} : {{ $t('pages.reservationsDetails.status.' + resData.status) }}</h3>
									<h3>{{ $t('pages.reservationsDetails.payment')
										}} : {{ $t('pages.reservationsDetails.paymentMethods.' + resData.payment_method) }}</h3>
									<h3 v-if="resData.status==='refunded'">{{ $t('pages.reservationsDetails.refundAmount')
										}} : $ {{ resData.refund_amount }} MYR</h3>
									<h3 v-if="resData.status==='refunded'">{{ $t('pages.reservationsDetails.refundTime')
										}} : {{ refundDate }}</h3>
								</div>
							</div>
							<div class="row highlight-detail">
								<div class="col-sm-6 col-xs-12 py-md-5 pt-1">
									<h3>{{ checkIn }} {{ $t('dateUnit.to') }} {{ checkOut }}</h3>
									<p>({{ $tc('dateUnit.days', totalDays, {'count': totalDays}) }},
										{{ $tc('dateUnit.nights', totalNights, {'count': totalNights}) }})</p>
								</div>
								<div class="col-sm-6 col-xs-12 py-md-5 pb-3">
									<h3>{{$tc('commonUnits.guests', totalGuests, {'count': totalGuests})}}</h3>
									<p>({{ $tc('commonUnits.adults', resData.adults, {'count': resData.adults}) }},
										{{ $tc('commonUnits.children', resData.children, {'count': resData.children})
										}})</p>
								</div>
							</div>
						</div>
						<div class="summary-body">
							<div v-for="item in resData.reservation_details">
								<room-summary-card
												:resData="item"
												:totalNights="totalNights"
								></room-summary-card>
							</div>
							<table class="remarks-table">
								<tr>
									<td><p>{{ $t('pages.reservationsSummary.remark') }}:</p></td>
									<td><p v-html="resData.remarks"></p></td>
								</tr>
								<tr>
									<td><p>{{ $t('pages.reservationsSummary.additionalNotes') }}: </p></td>
									<td><p v-html="resData.addition_note"></p></td>
								</tr>
							</table>
						</div>
						<div class="summary-footer">
							<div>
								<h3>{{$t('pages.reservationsSummary.totalAmount')}} : <span
												class="total-price">{{ resData.amount
									}}MYR</span></h3>
								<router-link :to="{ name: 'OrderHistory' }"
								             class="btn btn-main pull-left">Back to order list
								
								</router-link>
								<button class="btn btn-main" v-if="resData.status !== 'cancelled'"
								        @click="cancelModal = true">{{ $t('button.cancelwithoutrefund')}}
								
								</button>
								<button v-if="resData.status !== 'refunded' && resData.payment_method === 'paypal' "
								        class="btn btn-main"
								        @click="openModal = true">{{ $t('button.refund')}}
									<span v-if="resData.amount_canbe_refund">$ {{resData.amount_canbe_refund}}MYR</span>
								</button>
								
								
								<transition name="fade">
									<vue-modal v-if="openModal" @close="openModal = false" class="text-center">
										<h4 slot="header" class="modal-title" id="confirmModalLabel"
										    v-html="$t('pages.reservationsDetails.confirmRefund')"></h4>
										<div slot="footer" class="text-center">
											<button type="button" class="btn btn-border" @click="openModal = false">
												{{ $t('button.no') }}
											
											</button>
											<button type="button" class="btn btn-main" @click="refund()" :disabled="processing">
												{{ $t('button.yes') }}
											
											</button>
										</div>
										<div id="processing" slot="processing" v-if="processing">
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
									</vue-modal>
								</transition>
								
								<transition name="fade">
									<vue-modal v-if="refundModal" @close="refundModal = false" class="text-center">
										<h4 slot="header" class="modal-title" id="refundModalLabel">
											{{ refundMessage }}</h4>
										<div slot="footer" class="text-center">
											<button type="button" class="btn btn-main" @click="refundModal = false">
												{{ $t('button.okay') }}
											
											</button>
										</div>
									</vue-modal>
								</transition>
								
								<transition name="fade">
									<vue-modal v-if="cancelModal" class="text-center">
										<h4 slot="header" class="modal-title" id="cancelModalLabel">
											{{ $t('pages.reservationsDetails.cancelMessage') }}</h4>
										<div slot="footer" class="text-center">
											<button type="button" class="btn btn-border" @click="cancelModal = false">
												{{ $t('button.no') }}
											
											</button>
											<button type="button" class="btn btn-main" @click="cancelWithoutRefund()">
												{{ $t('button.okay') }}
											
											</button>
										</div>
									</vue-modal>
								</transition>
							
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row note mb-5 pb-5">
				<div class="col-xs-12">
					<div class="row m-0">
						<h5>{{$t('pages.admin.orderDetails.internalNote')}}</h5>
						<button @click="addEdit=!addEdit" class="add-edit"><span class="ti-pencil"></span></button>
					</div>
					<transition name="slide" v-if="!addEdit">
						<div class="row m-0 mb-4">
							<p class="note-content" v-if="resData.internal_note" v-html="getHtml(resData.internal_note)"></p>
						</div>
					</transition>
					<transition name="slide" v-if="addEdit">
						<div class="row m-0 mb-4">
							<p class="note-content" v-if="internalNote" v-html="getHtml(internalNote)"></p>
						</div>
					</transition>
					<transition name="slide">
						<div class="row m-0 note-input" v-if="addEdit">
							<textarea-autosize
											placeholder="Enter any internal note"
											ref="note"
											v-model="internalNote"
											:min-height="15"
											:max-height="350"
							></textarea-autosize>
							<button @click="saveInternalNote()"><span class="ti-save"></span></button>
						</div>
					</transition>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import RoomSummaryCard from '@/components/card/RoomSummaryCard.vue'
  import VueModal from '@/components/modal/Modal.vue'

  export default {
    components: {
      VueModal,
      RoomSummaryCard,
      ContentTitle
    },
    name: 'admin-order-detail',
    data () {
      return {
        resData: {},
        openModal: false,
        refundModal: false,
        cancelModal: false,
        refundMessage: '',
        processing: false,
        addEdit: false,
        internalNote: ''
      }
    },
    computed: {
      clientName: function () {
        return this.resData.last_name + ' ' + this.resData.first_name
      },
      totalGuests: function () {
        return this.resData.adults + this.resData.children
      },
      totalDays: function () {
        let i = this.$moment(this.resData.check_in)
        let o = this.$moment(this.resData.check_out)
        let days = o.diff(i, 'days') + 1
        return days
      },
      totalNights: function () {
        return this.totalDays - 1
      },
      momentLocale: function () {
        if (this.$i18n.locale === 'en') {
          return 'en'
        } else {
          return 'zh-cn'
        }
      },
      checkIn: function () {
        return this.$moment(this.resData.check_in).lang(this.momentLocale).format('LL')
      },
      checkOut: function () {
        return this.$moment(this.resData.check_out).lang(this.momentLocale).format('LL')
      },
      refundDate: function () {
        return this.$moment(this.resData.refund_at).lang(this.momentLocale).format('LLL')
      }
    },
    methods: {
      refund: function () {
        this.processing = true
        this.axios.post(process.env.API_URL + '/api/refund', {
          sessionId: this.$route.params.sessionId
        }).then((response) => {
          if (response.data.status) {
            this.processing = false
            this.openModal = false
            this.refundModal = true
            this.refundMessage = response.data.message
            if (response.data.refund_status === false) {
              this.refundMessage = 'Sorry! No refund available for this booking. Please select option to “cancel without refund” to process cancellation.'
            }
            this.getOrderDetails()
          }
        }, (error) => {
          console.log(error)
        })
      },
      cancelWithoutRefund: function () {
        this.axios.post(process.env.API_URL + '/api/cancelWithoutRefund', {
          sessionId: this.$route.params.sessionId
        }).then((response) => {
          if (response.data.status) {
            this.cancelModal = false
            this.getOrderDetails()
          }
        }, (error) => {
          console.log(error)
        })
      },
      getOrderDetails: function () {
        this.axios({
          method: 'post',
          url: process.env.API_URL + '/api/orderHistory',
          data: {
            sessionId: this.$route.params.sessionId
          },
          withCredentials: true
        }).then((response) => {
          if (response.data.status) {
            this.resData = response.data.reservationData
            this.internalNote = response.data.reservationData.internal_note
            this.$i18n.locale = response.data.reservationData.language
            this.$localStorage.set('locale', response.data.reservationData.language)
          } else {
            this.$router.push({name: 'Reservations'})
          }
        }, (error) => {
          this.$router.push({name: 'Reservations'})
          console.log(error)
        })
      },
      saveInternalNote: function () {
        this.addEdit = false
        this.processing = true

        this.axios({
          method: 'post',
          url: process.env.API_URL + '/api/saveInternalNote',
          data: {
            sessionId: this.$route.params.sessionId,
            internal_note: this.internalNote
          },
          withCredentials: true
        }).then((response) => {
          if (response.data.status) {
            this.processing = false
            console.log(response.data)
            this.getOrderDetails()
          }
        }, (error) => {
          console.log(error)
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
    created () {
      this.getOrderDetails()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.summary-wrapper {
		padding: 5rem;
		border: 1px solid $light-grey;
		text-align: left;
		@media screen and (max-width: 767px) {
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
				font-size: 1.5rem;
			}
		}
		.summary-header {
			border-bottom: 1px solid $brand-primary;
			& > .row {
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
			.remarks-table {
				td {
					padding: 0.5rem;
					vertical-align: top;
				}
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
		}
	}
	
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
	{
		opacity: 0;
	}
	
	.btn {
		&.btn-border {
			border-color: $brand-primary;
			color: $brand-primary;
			padding: 0.45rem 1.25rem;
			font-size: 0.95em;
			&:hover, &:focus {
				background-color: $brand-primary;
				color: white;
			}
		}
	}
	
	.note {
		h5 {
			display: inline-block;
			float: left;
		}
		.add-edit {
			float: left;
			background: none;
			border: none;
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 14px;
			line-height: 1.1;
			padding: 0 5px;
			&:hover, &:focus {
				cursor: pointer;
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
		}
		.note-content {
			border: 1px solid $brand-primary;
			padding: 1rem;
			text-align: left;
		}
		.note-input {
			textarea {
				border: none;
				border-bottom: 1px solid $brand-primary;
				width: calc(100% - 45px);
				&:hover, &:focus {
					outline: none !important;
					border-bottom-color: $brand-secondary;
				}
			}
			button {
				border: none;
				background: $brand-primary;
				color: white;
				float: right;
				width: 45px;
				height: 45px;
				padding-top: 5px;
				span {
					margin: 2px;
				}
			}
		}
	}
	
	#processing {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: 2em;
		z-index: 10;
		overflow: hidden;
		.overlay-wrapper {
			flex: 0 1 auto;
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
	
	/* Enter and leave animations can use different */
	/* durations and timing functions.              */
	.slide-enter-active, .slide-leave-active {
		transition: all .3s ease;
	}
	
	.slide-enter, .slide-leave-to {
		transform: translateY(-20px);
		opacity: 0;
	}

</style>
