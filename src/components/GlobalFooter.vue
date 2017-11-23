<template>
	<footer class="padding-of-section pb-0">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-xs-12">
					<h3 v-html="$t('companyName')"></h3>
				</div>
				<div class="col-md-4 col-xs-12">
					<h4>{{ $t("address.title") }}</h4>
					<p class="mb-md-5 mb-4">{{ $t("address.address") }}</p>
					<h4>{{ $t("tel.title") }}</h4>
					<p class="mb-md-5 mb-4">{{ $t("tel.tel") }}</p>
					<h4>{{ $t("paymentAccept.title") }}</h4>
					<ul class="payment-icon mb-md-0 mb-4">
						<li><icon name="cc-paypal" scale="3"></icon></li>
						<li><icon name="cc-visa" scale="3"></icon></li>
						<li><icon name="cc-mastercard" scale="3"></icon></li>
					</ul>
				</div>
				<div class="col-md-4 col-xs-12">
					<h4>{{ $t("menu.quickMenu") }}</h4>
					<ul>
						<li>
							<router-link :to="{ name: 'About' }" class="footer-link">{{ $t("menu.about") }}</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Rooms' }" class="footer-link">{{ $t("menu.rooms") }}</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Activities' }" class="footer-link">{{ $t("menu.activities") }}</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Food' }" class="footer-link">{{ $t("menu.food") }}</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Contact' }" class="footer-link">{{ $t("menu.contact") }}</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Reservations' }" class="footer-link">{{ $t("menu.reservations") }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<p class="copy-right">{{ $t("copyright") }}</p>
			</div>
		</div>
	</footer>
</template>

<script>
  import 'vue-awesome/icons/cc-paypal'
  import 'vue-awesome/icons/cc-visa'
  import 'vue-awesome/icons/cc-mastercard'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'global-footer',
    components: {
      Icon
    }
  }
</script>

<style lang="scss" scoped>
	@import '../assets/style/setting';

	footer {
		.container {
			background-color: $brand-primary;
			color: white;
			text-align: left;
			@media screen and (max-width: 991px) {
				width: 100%;
				margin: 0;
			}
			h3, h4 {
				font-weight: bold;
				margin-top: 0;
				margin-bottom: 0.5rem;
			}
			h3, h4, p {
				text-transform: uppercase;
			}
			.row {
				padding: 7.5rem 15rem 1rem;
				@media screen and (max-width: 991px) {
					padding: 3.5rem 1rem 1rem;
				}
				@media screen and (max-width: 767px) {
					padding: 3.5rem 0 1rem;
				}
			}
			ul {
				list-style-type: none;
				padding-left: 0;
			}
			.footer-link {
				color: white;
				text-transform: uppercase;
			}
			.copy-right {
				text-align: center;
			}
			.payment-icon {
				& > li {
					display: inline-block;
					float: left;
					&:not(:first-of-type) {
						margin-left: 0.75rem;
					}
				}
				&:after {
					content: '';
					display: block;
					clear: both;
				}
			}
		}
	}
</style>