<template>
	<footer class="padding-of-section pb-0">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-xs-12">
					<h3>Tempurong Golden Beach Resort</h3>
				</div>
				<div class="col-md-4 col-xs-12">
					<h4>Address</h4>
					<p class="mb-md-5 mb-4">{{ address }}</p>
					<h4>Tel</h4>
					<p class="mb-md-5 mb-4">{{ contactNumber }}</p>
					<h4>Payment Accepted by</h4>
					<ul class="payment-icon mb-md-0 mb-4">
						<li>master-card</li>
						<li>visa-card</li>
					</ul>
				</div>
				<div class="col-md-4 col-xs-12">
					<h4>Quick Menu</h4>
					<ul>
						<li v-for="link in links">
							<router-link :to="{ path: link.path }" class="footer-link">{{ link.name }}</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<p class="copy-right">&#169; CopyRight 2017 Tempurong Golden Beach Resort. All Rights Reserved.</p>
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