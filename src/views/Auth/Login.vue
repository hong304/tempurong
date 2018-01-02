<template>
	<div class="container-fluid" id="login">
		<section class="padding-of-section mt-5 py-3 py-sm-5">
			<div class="row">
				<div class="col-xs-12">
					<div class="login-wrapper">
						<img src="/static/img/logo.svg" alt="Tempourong Logo"/>
						<h4>Admin Login</h4>
						<input v-model="username" placeholder="Username">
						<input v-model="password" placeholder="Password" type="password">
						<h5 class="error-message" v-if="error">
							<span class="ti-alert"></span>
							{{ $t(error) }}
						</h5>
						<button class="btn btn-main" @click="login()"><span class="ti-unlock"></span> Log in</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login: function () {
        this.axios.post(process.env.API_URL + '/api/login', {
          username: this.username,
          password: this.password
        }, {withCredentials: true}).then((response) => {
          console.log(response.data)
          if (response.data.status) {
            this.$router.push({name: 'AdminDashboard'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.loginError'
        })
      },
      checkLogin: function () {
        this.axios.get(process.env.API_URL + '/api/check-login').then((response) => {
          if (response.data.status) {
            this.$router.push({name: 'AdminDashboard'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.authError'
        })
      }
    },
    created () {
      this.checkLogin()
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	#login {
		background-color: #f5f5f5;
		height: 100vh;
	}
	
	.login-wrapper {
		display: inline-block;
		padding: 3.5rem;
		border: 1px solid $light-grey;
		background-color: white;
		min-width: 350px;
		h4 {
			text-transform: uppercase;
		}
		img {
			width: 80%;
			height: auto;
		}
		input {
			display: block;
			width: 100%;
			line-height: 30px;
			margin: 1rem 0;
		}
		.btn-main {
			display: block;
			width: 100%;
			height: 36px;
		}
	}
</style>