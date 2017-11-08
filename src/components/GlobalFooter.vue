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
						<li>{{ $t("paymentAccept.master") }}</li>
						<li>{{ $t("paymentAccept.visa") }}</li>
					</ul>
				</div>
				<div class="col-md-4 col-xs-12">
					<h4>{{ $t("menu.quickMenu") }}</h4>
					<ul>
						<li><router-link :to="{ path: '/about' }" class="footer-link">{{ $t("menu.about") }}</router-link></li>
						<li><router-link :to="{ path: '/rooms' }" class="footer-link">{{ $t("menu.rooms") }}</router-link></li>
						<li><router-link :to="{ path: '/activities' }" class="footer-link">{{ $t("menu.activities") }}</router-link></li>
						<li><router-link :to="{ path: '/food' }" class="footer-link">{{ $t("menu.food") }}</router-link></li>
						<li><router-link :to="{ path: '/contact' }" class="footer-link">{{ $t("menu.contact") }}</router-link></li>
						<li><router-link :to="{ path: '/reservations' }" class="footer-link">{{ $t("menu.reservations") }}</router-link></li>
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
  export default {
    name: 'global-footer',
    props: {
      address: {
        type: String,
        default: function () {
          return 'Jalan Kampung Tempurung Kuala Penyu 89740'
        }
      },
      contactNumber: {
        type: String,
        default: function () {
          return '+60 88-230 916'
        }
      },
      links: {
        default: function () {
          return [
            {path: '/', name: 'Home'},
            {path: '/about', name: 'About'},
            {path: '/rooms', name: 'Rooms & Amenities'},
            {path: '/activities', name: 'Activities'},
            {path: '/food', name: 'Food'},
            {path: '/contact', name: 'Contact'},
            {path: '/book', name: 'Book Now'}
          ]
        }
      }
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
		}
	}
</style>