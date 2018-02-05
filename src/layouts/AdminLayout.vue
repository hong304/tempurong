<template>
	<div id="admin">
		<div class="top-nav">
			<button class="menu-collapse" @click="sideCollapsed = !sideCollapsed"><span class="ti-menu"></span></button>
			<router-link :to="{ name: 'AdminHome' }" class="nav-brand" role="button">
				<img src="/static/img/logo.png" :alt="$t('companyName')">
			</router-link>
			<div class="language-select">
				<button v-bind:class="{ active: ($i18n.locale === 'en') }" @click="changeLanguage('en')"
								role="button">{{$i18n.getLocaleMessage('en').languageShort}}
				</button>
				<button v-bind:class="{ active: ($i18n.locale === 'sc') }" @click="changeLanguage('sc')"
								role="button">{{$i18n.getLocaleMessage('sc').languageShort}}
				</button>
			</div>
		</div>
		<transition name="slide">
			<div class="side-nav" v-if="!sideCollapsed">
				<ul>
					<li>
						<router-link :to="{ name: 'Home' }" class="nav-link">
							<span class="ti-home"></span>
							<p>Home</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'OrderHistory' }" class="nav-link">
							<span class="ti-list"></span>
							<p>Order History</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'ChangePassword' }" class="nav-link">
						<span class="ti-settings"></span>
						<p>Change Password</p>
						</router-link>
					</li>
					<li>
						<a class="nav-link" @click="logout()">
							<span class="ti-power-off"></span>
							<p>Logout</p>
						</a>
					</li>
				</ul>
			</div>
		</transition>
		<div class="content-wrapper" :class="{ 'extend': sideCollapsed }">
			<router-view :isMobile="isMobile"></router-view>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'AdminLayout',
    data () {
      return {
        isMobile: /iPhone|iPod|Android/i.test(navigator.userAgent),
        sideCollapsed: false,
        language: '',
        languageOptions: [this.$i18n.getLocaleMessage('en').language, this.$i18n.getLocaleMessage('sc').language]
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
        this.axios({
          method: 'get',
          url: process.env.API_URL + '/api/logout',
          withCredentials: true
        }).then((response) => {
          if (response.data.status) {
            console.log(response.data.message)
            this.$router.push({name: 'AdminLogin'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.authError'
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
            console.log(response.data)
            this.$router.push({name: 'AdminLogin'})
          }
        }, (error) => {
          console.log(error)
          this.error = 'error.authError'
        })
      },
      changeLanguage: function (val) {
        this.$i18n.locale = val
        this.showNavbar = false
        this.$localStorage.set('locale', val)
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
      this.changeLanguage(this.$localStorage.get('locale', 'en'))
    },
    created () {
      this.checkLogin()
    },
    watch: {
      language (val) {
        if (val.indexOf('English') !== -1) {
          this.$i18n.locale = 'en'
          this.$localStorage.set('locale', 'en')
        } else {
          this.$i18n.locale = 'sc'
          this.$localStorage.set('locale', 'sc')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../assets/style/setting';

	.top-nav {
		position: fixed;
		width: 100%;
		height: 50px;
		left: 0;
		top: 0;
		padding: 10px;
		background: #2B2E33;
		text-align: left;
		z-index: 9999;
		.menu-collapse {
			display: inline-block;
			float: left;
			background: none;
			border: none;
			color: white;
			margin-right: 0.3em;
			font-size: 1.5em;
			line-height: 30px;
		}
		.nav-brand {
			display: inline-block;
			width: auto;
			height: 100%;
			img {
				width: auto;
				height: 100%;
			}
		}
		.language-select {
			float: right;
			button {
				background: none;
				border: none;
				color: white;
				opacity: 0.5;
				&.active {
					opacity: 1;
				}
				&:hover, &:focus {
					opacity: 1;
				}
			}
		}
	}

	.side-nav {
		position: fixed;
		display: inline-block;
		left: 0;
		top: 50px;
		height: calc(100vh - 50px);
		width: 60px;
		padding: 10px;
		background: #424242;
		overflow-y: auto;
		& > ul {
			list-style-type: none;
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
		display: inline-block;
		top: 50px;
		float: right;
		width: calc(100% - 60px);
		overflow-x: auto;
		transition: width 300ms ease;
		&.extend {
			width: 100%;
		}
	}


	.slide-enter-active, .slide-leave-active {
		transition: all .3s ease;
	}
	.slide-enter, .slide-leave-to {
		transform: translateX(-80px);
		opacity: 0;
	}
</style>