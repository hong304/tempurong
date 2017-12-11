<template>
	<div class="container" id="contact">
		<section class="padding-of-section mt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.contact.pageTitle')"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
		</section>
		<section class="padding-of-section my-sm-5 my-0">
			<div class="row">
				<div class="col-xs-12">
					<img :src="mapSrc"/>
				</div>
			</div>
		</section>
		<section class="padding-of-section my-5 border-bottom">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="secondTitle"></content-title>
					<p>
						Tempurong Golden Beach is located approximately two hours away from Kota Kinabalu International Airport (BKI) by car. We are happy to provide transportation to and from the airport. </p>
				</div>
			</div>
			<div class="row text-left mt-5 mb-5">
				<div class="col-xs-12">
					<h3>Airport or KK City Pickup</h3>
					<p>
						For 1-4 pax, the total cost is MYR250 each way (MYR500 round trip)<br>
						For 5-10 pax, the total cost is MYR350 each way (MYR700 round trip)
					</p>
					<p>
						BY US: To make it less complicated for you, we are happy to pick you up from any place in Kota Kinabalu, drive you to Tempurong golden beach resort and at the end of your stay, drive you back to KK, 1-4 person by car MYR200 per way, 5-10 by van MYR300per way.
					</p>
				</div>
			</div>
			<div class="row text-left mt-5 mb-5">
				<div class="col-xs-12">
					<h3>Bus</h3>
					<p>
						Take a bus from Kota Kinabalu (Bus terminal opposite our KK High Court) to Menumbok Ferry Terminal and ask a driver to drop you off in Kayul roundabout (3 turtles roundabout) between Kuala Penyu and Menumbok (ferry terminal to Labuan). From there, we could come to pick you up and drive you to our paradise for a MYR10 fee.
					</p>
					<h4>Bus Service K.K-Menumbok (near Kuala Penyu)-K.K</h4>
					<p>
						From Kota Kinabalu to Menumbok:<br>
						6:45 am / 10:00 am / 12:30 pm
					</p>
					<p>
						From Menumbok to Kota Kinabalu:<br>
						10:00 am / 3:30 pm / 4:30 pm
					</p>
					<p>
						Bus ticket is MYR 15 one way.
					</p>
				</div>
			</div>
			<div class="row text-left mt-5 mb-5">
				<div class="col-xs-12">
					<h3>Self driving by car</h3>
					<p>
						Please use Waze or Google map as GPS and type location as Tempurong Golden Beach Resort, it should be accurately plotted on the map.
					</p>
				</div>
			</div>
			<div class="row mt-5 mb-5">
				<div class="col-xs-12">
					<h4 class="text-center">Know more about the area?</h4>
					<router-link :to="{ name: 'Activities' }" class="btn btn-main text-center">
						{{ $t('button.moreAreaAndActivities') }}
					</router-link>
				</div>
			</div>
		</section>
		<section class="padding-of-section my-5 border-bottom">
			<div class="row text-left mb-4">
				<div class="col-xs-12">
					<h3>Find us</h3>
				</div>
			</div>
			<div class="row text-left">
				<div class="col-xs-12 col-sm-6 col-sm-push-6">
					<img :src="imageSrc"/>
				</div>
				<div class="col-xs-12 col-sm-6 col-sm-pull-6">
					<ul class="detail-list">
						<li class="info-title"><strong>Address</strong></li>
						<li>Jalan Kg Tempurong, Kuala Penyu,<br>89740 Kuala Penyu,<br>Sabah, Malaysia</li>
						<li class="info-title"><strong>Tel</strong></li>
						<li>+60 88-230 916</li>
					</ul>
					<router-link :to="{ name: 'Reservations' }" class="btn btn-main text-center">{{ $t('button.bookNow')
						}}
					</router-link>
				</div>
			</div>
		</section>
		<section class="padding-of-section my-5">
			<div class="row text-center">
				<div class="col-xs-12">
					<button class="btn btn-main enquiry-btn" @click="showForm=!showForm">Drop a message</button>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-sm-10 col-xs-12 col-sm-offset-1">
					<collapse v-model="showForm">
						<form class="mt-5 pt-5" id="enquiry-form">
							<div class="row">
								<div class="col-sm-6 col-xs-12">
									<input v-model="enquiry.firstName"
												 v-bind:placeholder="$t('pages.contact.enquiry.firstName')">
								</div>
								<div class="col-sm-6 col-xs-12">
									<input v-model="enquiry.lastName"
												 v-bind:placeholder="$t('pages.contact.enquiry.lastName')">
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">
									<input v-model="enquiry.email"
												 v-bind:placeholder="$t('pages.contact.enquiry.email')">
								</div>
							</div>
							<div class="row mb-5">
								<div class="col-xs-12">
									<input v-model="enquiry.message"
												 v-bind:placeholder="$t('pages.contact.enquiry.message')">
								</div>
							</div>
							<button class="btn btn-main">{{ $t('button.submit') }}</button>
						</form>
					</collapse>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'

  export default {
    components: {
      ContentTitle,
      ContentParagraph
    },
    name: 'Contact',
    data () {
      return {
        mapSrc: '/static/img/about-map.jpg',
        imageSrc: '/static/img/demo-about-02.jpg',
        secondTitle: 'Getting There',
        showForm: false,
        enquiry: {
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/setting';

	#contact {
		color: $brand-secondary;
		h3 {
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 0;
			font-size: 3rem;
		}
		.text-list {
			list-style-type: none;
			padding-left: 0;
			font-size: 1.5em;
		}
		.border-bottom {
			border-bottom: 1px solid $brand-primary;
		}
		.detail-list {
			list-style-type: none;
			padding-left: 0;
			& > li {
				margin-bottom: 1.5rem;
				&.info-title {
					text-transform: uppercase;
					margin-bottom: 0.5rem;
				}
			}
		}
		img {
			width: 100%;
			height: auto;
		}

		.btn-main, .enquiry-btn {
			text-transform: uppercase;
			font-weight: bold;
		}
		.enquiry-btn {
			font-size: 2rem;
		}
	}

	#enquiry-form {
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
			&#tnc {
				cursor: pointer;
			}
		}
	}
</style>
