<template>
	<div class="enquiry-form">
		<div id="loading-overlay" v-if="showLoading">
			<div class="overlay-wrapper">
				<div class="spinner">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
			</div>
		</div>
		<h5 v-html="$t('components.enquiry.title')"></h5>
		<div class="row form-body my-5 m-0">
			<div class="col-sm-8 col-xs-12 col-sm-offset-2">
				<div class="row">
					<div class="col-sm-6 col-xs-12">
						<input v-model="enquiry.firstName" v-bind:placeholder="$t('components.enquiry.firstName')"
									 :class="{ 'has-error': this.status.status === false && !enquiry.firstName }">
					</div>
					<div class="col-sm-6 col-xs-12">
						<input v-model="enquiry.lastName" v-bind:placeholder="$t('components.enquiry.lastName')"
									 :class="{ 'has-error': this.status.status === false && !enquiry.lastName }">
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<input v-model="enquiry.email" v-bind:placeholder="$t('components.enquiry.email')"
									 :class="{ 'has-error': this.status.status === false && !enquiry.email }">
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<textarea v-model="enquiry.message" v-bind:placeholder="$t('components.enquiry.message')"
											:class="{ 'has-error': this.status.status === false && !enquiry.message }"></textarea>
					</div>
				</div>
				<div class="row" v-if="this.status.status">
					<div class="col-xs-12">
						<p class="text-success bg-success" v-html="this.status.message"></p>
					</div>
				</div>
				<div class="row" v-else-if="this.status.status === false">
					<div class="col-xs-12">
						<div class="text-danger bg-danger">
							<p v-for="item in this.status.message" v-html="item"></p>
						</div>
					</div>
				</div>
				<button class="btn btn-main mt-5" @click="submitForm()" :disable="submitted"><span>{{$t('send')}}</span></button>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'enquiry-form',
    data () {
      return {
        submitted: false,
        showLoading: false,
        enquiry: {
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        },
        status: {
          status: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm () {
        this.submitted = true
        let message = []
        let checked = 0
        _.forEach(this.enquiry, (value, key) => {
          if (!value.length) {
            this.status.status = false
            message.push((((key === 'firstName') ? 'first Name' : key) || ((key === 'lastName') ? 'last Name' : key)) + ' is required')
          } else {
            checked++
          }
        })
        if (checked < 4) {
          this.status.message = message
          this.submitted = false
        } else {
          this.showLoading = true
          this.axios.post(process.env.API_URL + '/api/enquiry', this.enquiry).then((response) => {
            if (response.data.status) {
              this.status = response.data
              this.enquiry = {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
              }
              this.showLoading = false
              this.submitted = false
            }
          }, (error) => {
            this.status.status = false
            this.status.message = 'Seems like our server are not response for now, please try again later.'
            console.log(error)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.enquiry-form {
		position: relative;
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
			&.has-error {
				border-bottom-color: red;
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

	.bg-danger, .bg-success {
		padding: 1rem;
	}

	.text-danger, .text-success {
		text-transform: uppercase;
	}

	.text-danger {
		p {
			margin-bottom: 0.25rem;
			&:last-of-type {
				margin-bottom: 0;
			}
		}
	}

	// for loading spinner
	#loading-overlay {
		position: absolute;
		display: flex;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.85);
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 999;
		overflow: hidden;
		.overlay-wrapper {
			flex: 0 1 auto;
			align-self: center;
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
</style>