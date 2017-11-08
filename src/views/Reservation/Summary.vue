<template>
	<div class="container" id="reservations-summary">
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
						<div class="summary-header">
							<div class="row">
								<div class="col-md-6 col-xs-12">
									<h3>{{ checkInDate }} - {{ checkOutDate }}</h3>
									<p>({{ totalDays }} days, {{ totalNights }} nights)</p>
								</div>
								<div class="col-md-6 col-xs-12">
									<h3>{{ totalGuests }} Guests</h3>
									<p>({{ totalAdults }} adults, {{ totalChildren }} children)</p>
								</div>
							</div>
						</div>
						<div class="summary-body">
							<h3>{{ roomType }}</h3>
							<room-summary-card></room-summary-card>
							<room-summary-card :totalRooms="totalRooms" :addExtra="addExtra"></room-summary-card>
						</div>
						<div class="summary-footer">
							<div>
								<h3>Total Amount: <span class="total-price">{{ totalPrice }}MYR</span></h3>
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
  import RoomSummaryCard from '@/components/booking/RoomSummaryCard.vue'

  export default {
    components: {
      RoomSummaryCard,
      ContentTitle
    },
    name: 'ReservationsSummary',
    data () {
      return {
        titleOne: 'Booking Summary',
        checkInDate: '15 Nov 2017',
        checkOutDate: '21 Nov 2017',
        totalDays: 7,
        totalNights: 6,
        totalGuests: 16,
        totalAdults: 10,
        totalChildren: 6,
        roomType: 'River View',
        totalRooms: 2,
        totalPrice: 250
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
					&:first-of-type {
						border-right: 1px solid $brand-primary;
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
			margin-bottom: 2.5rem;
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
</style>
