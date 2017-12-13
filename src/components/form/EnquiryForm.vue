<template>
	<div class="enquiry-form">
		<h5>Leave us a message!</h5>
		<div class="row form-body my-5 m-0">
			<div class="col-sm-8 col-xs-12 col-sm-offset-2">
				<div class="row">
					<div class="col-sm-6 col-xs-12">
						<input v-model="enquiry.firstName" v-bind:placeholder="$t('components.enquiry.firstName')">
					</div>
					<div class="col-sm-6 col-xs-12">
						<input v-model="enquiry.lastName" v-bind:placeholder="$t('components.enquiry.lastName')">
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<input v-model="enquiry.email" v-bind:placeholder="$t('components.enquiry.email')">
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<textarea v-model="enquiry.message" v-bind:placeholder="$t('components.enquiry.message')"></textarea>
					</div>
				</div>
				<button class="btn btn-main mt-5" @click="submitForm()"><span>Send</span></button>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'enquiry-form',
    data () {
      return {
        enquiry: {
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm () {
        this.axios.post(process.env.API_URL + '/api/enquiry', this.enquiry).then((response) => {
          if (response.data.status) {
            console.log(response.data.status)
          }
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.enquiry-form {
		color: $brand-secondary;
		h5 {
			font-size: 2rem;
			margin: 0;
		}
	}

	.form-body {
		input, textarea {
			width: 100%;
			margin: 1.5rem 0;
			line-height: 3rem;
			border: none;
			border-bottom: 1px solid $brand-primary;
			// for ie 10 & 11
			min-height: 3rem;
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