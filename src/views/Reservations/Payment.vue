<template>
	<div class="container" id="reservations-payment">
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
					<div class="payment-wrapper">
						<div class="payment-header">
							<h3>Contact information</h3>
						</div>
						<div class="payment-body">
							<div class="row">
								<div class="col-sm-6 col-xs-12">
									<input v-model="firstName" placeholder="First Name">
								</div>
								<div class="col-sm-6 col-xs-12">
									<input v-model="lastName" placeholder="Last Name">
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">
									<input v-model="email" placeholder="Email">
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">
									<textarea v-model="Remark" placeholder="Remark"></textarea>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">
									<textarea v-model="additionalNote"
									          placeholder="Additional notes (airport pickup, interested in activities etc."></textarea>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">
									<p>Terms & Conditions</p>
									<input type="checkbox" id="tcAgree" v-model="checked">
									<label
													for="tcAgree">I have read and agree to the above Terms and Conditions and cancellation policy.</label>
								</div>
							</div>
						</div>
						<div class="payment-footer">
							<!-- back button for editing the order details -->
							<button class="btn btn-main pull-left" @click="goBackToReservation()">
								<span class="ti-icon ti-pencil-alt"></span><span>Edit order</span></button>
							
							<button class="btn btn-main">
								<icon name="cc-paypal" scale="2"></icon>
								<span>Check out</span></button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import 'vue-awesome/icons/cc-paypal'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    components: {
      ContentTitle,
      Icon
    },
    name: 'reservations-payment',
    props: {
      firstName: {type: String},
      lastName: {type: String},
      email: {type: String},
      Remark: {type: String},
      additionalNote: {type: String},
      checked: {type: Boolean}
    },
    data () {
      return {
        titleOne: 'Payment',
        totalPrice: 0
      }
    },
    methods: {
      goBackToReservation: function () {
        this.$router.push({name: 'Reservations'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.payment-wrapper {
		margin: 0 5rem;
		padding: 5rem;
		color: $brand-secondary;
		border: 1px solid $light-grey;
		text-align: left;
		h3 {
			font-size: 2.5rem;
			font-weight: bold;
			margin: 0;
		}
		p {
			margin-top: 3rem;
			margin-bottom: 0;
			font-size: 2rem;
		}
		@media screen and (max-width: 991px) {
			margin: 0;
			padding: 2rem;
		}
	}
	
	.payment-header {
		text-transform: uppercase;
		margin-bottom: 3rem;
	}
	
	.payment-body {
		margin-bottom: 4rem;
		input, textarea {
			width: 100%;
			margin: 1.5rem 0;
			line-height: 3rem;
			border: none;
			border-bottom: 1px solid $brand-primary;
			@media screen and (max-width: 467px) {
				margin: 0.75rem 0;
			}
			&:hover, &:focus, &:active {
				outline: none !important;
				box-shadow: none !important;
				border-bottom-color: $brand-secondary;
			}
			&::placeholder {
				color: $light-grey;
			}
		}
		input[type=checkbox] {
			width: auto;
			margin-top: 0;
			@media screen and (max-width: 467px) {
				margin: 0;
			}
		}
		textarea {
			resize: none;
		}
		label {
			font-weight: 400;
		}
	}
	
	.payment-footer {
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
		@media screen and (max-width: 320px) {
			button {
				display: block;
				width: 100%;
				&:not(:first-of-type) {
					margin-top: 1rem;
				}
			}
			.pull-left {
				float: none !important;
			}
		}
	}
	
	.btn-main {
		text-transform: uppercase;
		.fa-icon, span {
			float: left;
		}
		.fa-icon, .ti-icon {
			margin-right: 0.5rem;
		}
		span {
			line-height: 2em;
		}
	}
</style>
