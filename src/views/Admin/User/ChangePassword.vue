<template>
	<div class="container-fluid p-0" id="change-password">
		<section>
			<div class="row m-0 text-left">
				<div class="col-xs-12">
					<h3>Change Password</h3>
				</div>
			</div>
			<div class="row mx-0 my-5">
				<div class="col-xs-12 text-left">
					<div class="page-positioner">
						<form @submit.prevent="">
							<h4>Your Email: {{ resData.email }}</h4>
							<div class="form-group">
								<label for="new-password">New Password</label>
								<input v-model="newPassword" placeholder="New Password" id="new-password" type="password"
											 v-on:keyup.enter="save">
							</div>
							<div class="form-group">
								<label for="confirm-password">Confirm Password</label>
								<input v-model="confirmPassword" placeholder="Confirm Password" id="confirm-password" type="password"
											 v-on:keyup.enter="save">
							</div>
							<h5 class="message" :class="{ 'alert': !message.status, 'success': message.status }" v-if="message">
								<span :class="{ 'ti-alert': !message.status, 'ti-check-box': message.status }"></span>
								{{ message.message }}
							</h5>
							<button class="btn btn-main pull-left mt-4" @click="save" :disabled="loading"><span
								class="ti-save"></span><span> Save</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  export default {
    name: 'ChangePassword',
    components: {},
    data () {
      return {
        resData: {},
        newPassword: '',
        confirmPassword: '',
        loading: false,
        message: false
      }
    },
    methods: {
      save () {
        this.loading = true
        if (this.newPassword === this.confirmPassword) {
          this.axios({
            method: 'post',
            url: process.env.API_URL + '/api/profile',
            data: {
              id: this.resData.id,
              new_password: this.newPassword
            },
            withCredentials: true
          }).then((response) => {
            if (response.data.status) {
              this.message = response.data
            }
          }, (error) => {
            console.log(error)
          })
        } else {
          this.message = {
            'status': false,
            'message': 'Please Confirm both password is the same.'
          }
          this.loading = false
        }
      }
    },
    created () {
      this.axios({
        method: 'get',
        url: process.env.API_URL + '/api/profile',
        withCredentials: true
      }).then((response) => {
        console.log(response.data)
        if (response.data.status) {
          this.resData = response.data.data
        }
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../../assets/style/setting';

	h3 {
		font-weight: bold;
	}

	h4 {
		text-transform: uppercase;
		color: $brand-secondary;
		font-weight: bold;
		margin-bottom: 2em;
	}

	.button {
		background: none;
		border: none;
	}

	#change-password {
		label {
			display: block;
			margin-top: 1.5em;
			color: $brand-secondary;
		}
		input {
			width: 100%;
			max-width: 600px;
			border: none;
			background: none;
			border-bottom: 1px solid $brand-primary;
			color: $brand-secondary;
			&:hover, &:focus {
				border-bottom-color: $brand-secondary;
				outline: none !important;
				box-shadow: none !important;
			}
		}
	}

	.message {
		&.alert {
			color: #a94442;
			background-color: #f2dede;
			border-color: #ebccd1;
		}
		&.success {
			color: #3c763d;
			background-color: #dff0d8;
			padding: 15px;
			margin-bottom: 20px;
			border: 1px solid #d6e9c6;
			border-radius: 4px;
		}
	}


</style>
