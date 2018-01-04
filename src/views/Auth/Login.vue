<template>
	<div class="container-fluid" id="login">
		<section class="padding-of-section mt-5 py-3 py-sm-5">
			<div class="row">
				<div class="col-xs-12">
					<div class="login-wrapper">
						<img src="/static/img/logo.svg" alt="Tempourong Logo"/>
						<h4>Admin Login</h4>
						<input v-model="email" placeholder="Email">
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
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login: function () {
        this.axios({
          method: 'post',
          url: process.env.API_URL + '/api/login',
          data: {
            email: this.email,
            password: this.password
          },
          withCredentials: true
        }).then((response) => {
          if (response.data.status) {
            console.log(response.data)
//            this.$cookie.set('token', response.data.token)
            this.$router.push({name: 'AdminDashboard'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.loginError'
        })
      },
      checkLogin: function () {
//        if (this.$cookie.get('token')) {
        this.axios({
          method: 'get',
          url: process.env.API_URL + '/api/check-login',
          withCredentials: true
        }).then((response) => {
          if (response.data.status) {
            console.log(response.data.message)
          } else {
            console.log(response.data.message)
            this.$router.push({name: 'AdminLogin'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.authError'
        })
//        } else {
//          console.log('Not Logged-in.')
//          this.$router.push({name: 'AdminLogin'})
//        }
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