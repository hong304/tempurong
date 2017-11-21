<template>
	<div class="container" id="order-detail">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="titleOne"></content-title>
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
									<h3>Name : {{ clientName }}</h3>
									<h3>Email : {{ resData.email }}</h3>
								</div>
							</div>
							<div class="row highlight-detail">
								<div class="col-sm-6 col-xs-12 py-5">
									<h3>{{ resData.check_in }} - {{ resData.check_out }}</h3>
									<p>({{ totalDays }} days, {{ totalNights }} nights)</p>
								</div>
								<div class="col-sm-6 col-xs-12 py-5">
									<h3>{{ totalGuests }} Guests</h3>
									<p>({{ resData.adults }} adults, {{ resData.children }} children)</p>
								</div>
							</div>
						</div>
						<div class="summary-body">
							<div v-for="item in resData.rooms">
								<room-summary-card
										:resData="item"
										:totalNights="totalNights"
								></room-summary-card>
							</div>
						</div>
						<div class="summary-footer">
							<div>
								<h3>Total Amount: <span class="total-price">{{ resData.amount }}MYR</span></h3>
								<!-- back button for editing the order details -->
								<button class="btn btn-main pull-left">
									<span class="ti-icon ti-pencil-alt"></span><span>Edit contact information</span></button>

								<button class="btn btn-main">Proceed to Payment</button>
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

  export default {
    components: {
      RoomSummaryCard,
      ContentTitle
    },
    name: 'reservations-summary',
    data () {
      return {
        titleOne: 'Booking Summary',
        checkInDate: '15 Nov 2017',
        checkOutDate: '21 Nov 2017',
        roomType: 'River View',
        totalRooms: 2,
        totalPrice: 250
      }
    },
    props: {
      resData: {
        type: Array,
        default: function () {
          return {
            'first_name': 'Hello',
            'last_name': 'World',
            'email': 'test@test.com',
            'check_in': '15 Nov 2017',
            'check_out': '21 Nov 2017',
            'adults': 10,
            'children': 6,
            'amount': 3144,
            'transition_id': '5467890',
            'create_at': null,
            'status': null,
            'rooms': [
              {
                'roomType': 'River View',
                'price': 274,
                'noOfRoom': 2
              },
              {
                'roomType': 'Sea View',
                'price': 250,
                'noOfRoom': 1
              }
            ]
          }
        }
      },
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
    computed: {
      clientName: function () {
        return this.resData.last_name + this.resData.first_name
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
