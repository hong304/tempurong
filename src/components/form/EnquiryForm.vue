<template>
	<div class="enquiry-form">
		<h3>Interesting in Activities?</h3>
		<h5>Leave us a message!</h5>
		<div class="form-body my-5 row">
			<div class="col-sm-8 col-xs-12 col-sm-offset-2">
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
						<textarea v-model="message" placeholder="Message"></textarea>
					</div>
				</div>
				<button class="btn btn-main mt-5"><span>Send</span></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'enquiry-form'
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.enquiry-form {
		color: $brand-secondary;
		h3, h5 {
			margin: 0;
		}
		h3 {
			font-weight: bold;
			text-transform: uppercase;
			font-size: 3rem;
		}
		h5 {
			font-size: 2rem;
		}
	}
	.form-body {
		input, textarea {
			width: 100%;
			margin: 1.5rem 0;
			line-height: 3rem;
			border: none;
			border-bottom: 1px solid $brand-primary;
			&:hover, &:focus, &:active {
				outline: none !important;
				box-shadow: none !important;
				border-bottom-color: $brand-secondary;
			}
			&::placeholder {
				color: $light-grey;
			}
		}
		textarea {
			resize: none;
		}
		.btn-main {
			text-transform: uppercase;
			font-weight: bold;
		}
	}
</style>