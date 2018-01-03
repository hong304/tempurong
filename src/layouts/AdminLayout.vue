<template>
	<div id="admin">
		<div class="side-nav">
			<router-link :to="{ name: 'AdminHome' }" class="nav-brand" role="button">
				<img src="/static/img/logo.png" :alt="$t('companyName')">
			</router-link>
			<ul>
				<li>
					<router-link :to="{ name: 'OrderHistory' }" class="nav-link">
						<span class="ti-list"></span>
						<p>Order History</p>
					</router-link>
				</li>
				<!--<li>-->
				<!--<router-link :to="{ name: 'Home' }" class="nav-link">-->
				<!--<span class="ti-settings"></span>-->
				<!--<p>Profile</p>-->
				<!--</router-link>-->
				<!--</li>-->
				<li>
					<a class="nav-link" @click="logout()">
						<span class="ti-power-off"></span>
						<p>Logout</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content-wrapper">
			<router-view :isMobile="isMobile"></router-view>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'AdminLayout',
    data () {
      return {
        isMobile: /iPhone|iPod|Android/i.test(navigator.userAgent)
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize () {
        this.isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent)
      },
      logout () {
        this.axios.get(process.env.API_URL + '/api/logout').then((response) => {
          if (response.data.status) {
            this.$router.push({name: 'AdminLogin'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.authError'
        })
      },
      checkLogin: function () {
        let token = document.cookie
        console.log(token)
        token = token.substr(5)
        console.log(token)
        this.axios({
          method: 'get',
          url: process.env.API_URL + '/api/check-login',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
          }
        }).then((response) => {
          if (response.data.success.id) {
            console.log('logged in')
          } else {
            console.log('not logged')
            this.$router.push({name: 'AdminLogin'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.authError'
        })
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
    },
    created () {
      this.checkLogin()
    }
  }
</script>

<style lang="scss" scoped>
	@import '../assets/style/setting';

	.side-nav {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 80px;
		padding: 15px;
		background: #2B2E33;
		.nav-brand {
			width: 50px;
			height: auto;
			img {
				width: 100%;
				height: auto;
			}
		}
		& > ul {
			list-style-type: none;
			margin-top: 2rem;
			padding-left: 0;
			color: white;
			& > li {
				padding: 0.75rem 0;
			}
		}
		.nav-link {
			color: $medium-grey;
			cursor: pointer;
			span {
				font-size: 2.5rem;
			}
			p {
				font-size: 1rem;
			}
			&:hover, &:focus {
				color: white;
				text-decoration: none;
			}
		}
	}

	.content-wrapper {
		position: relative;
		width: calc(100vw - 80px);
		left: 80px;
	}
</style>