<template>
	<nav id="global-nav" class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
					<span class="ti-menu"></span>
				</button>
				<router-link :to="{ name: 'Home' }" class="navbar-brand" role="button">
					<img src="/static/img/logo.svg" :alt="$t('companyName')" height="30" width="132">
				</router-link>
			</div>
			<collapse class="navbar-collapse" v-model="showNavbar">
				<div class="navbar-wrapper">
					<ul class="nav navbar-nav">
						<!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
						<li>
							<router-link :to="{ name: 'About' }" class="navbar-link" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.about") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Rooms' }" class="navbar-link" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.rooms") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Activities' }" class="navbar-link" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.activities") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Food' }" class="navbar-link" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.food") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'FAQ' }" class="navbar-link" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.FAQ") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Contact' }" class="navbar-link" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.contact") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Reservations' }" class="navbar-link reservation" exact-active-class
							             @click.native="(showNavbar) ? showNavbar=!showNavbar : ''">
								{{ $t("menu.reservations") }}
							</router-link>
						</li>
					</ul>
					<div class="nav navbar-nav navbar-right">
						<div class="language-select">
							<button v-bind:class="{ active: ($i18n.locale === 'en') }" @click="changeLanguage('en')"
							        role="button">{{$i18n.getLocaleMessage('en').languageShort}}
							</button>
							<button v-bind:class="{ active: ($i18n.locale === 'sc') }" @click="changeLanguage('sc')"
							        role="button">{{$i18n.getLocaleMessage('sc').languageShort}}
							</button>
							<router-link v-if="isAdmin" :to="{ name: 'AdminDashboard' }" class="admin-btn"><span class="ti-crown"></span></router-link>
						</div>
					</div>
				</div>
			</collapse>
		</div>
	</nav>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'global-nav',
    components: {
      Multiselect
    },
    data () {
      return {
        isAdmin: false,
        showNavbar: false,
        language: '',
        languageOptions: [this.$i18n.getLocaleMessage('en').language, this.$i18n.getLocaleMessage('sc').language]
      }
    },
    props: {
      isMobile: this.isMobile
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
    },
    methods: {
      changeLanguage: function (val) {
        this.$i18n.locale = val
        this.showNavbar = false
        this.$localStorage.set('locale', val)
      },
      checkLogin: function () {
        this.axios({
          method: 'get',
          url: process.env.API_URL + '/api/check-login',
          withCredentials: true
        }).then((response) => {
          if (response.data.status) {
            this.isAdmin = true
          }
        }, (error) => {
          console.log(error)
        })
      }
    },
    mounted: function () {
      this.changeLanguage(this.$localStorage.get('locale', 'en'))
    }
  }
</script>

<style lang="scss" scoped>
	@import '../assets/style/setting';
	
	.navbar {
		margin-bottom: 0;
		background-color: white;
	}
	
	.navbar-default {
		background-color: white;
		border-bottom: 1px solid $light-grey;
		.navbar-toggle {
			border: none;
			padding: 0;
			margin-top: 17px;
			color: $brand-primary;
			&:hover, &:focus {
				background: none;
				color: $brand-secondary;
			}
		}
		.navbar-brand {
			padding: 10px;
			@media screen and (min-width: 768px) and (max-width: 991px) {
				padding: 12px 5px;
			}
			outline: none;
			&:hover {
				outline: none;
			}
			img {
				height: 100%;
				width: auto;
			}
		}
	}

	.admin-btn {
		margin-left: 15px;
		border-left: 1px solid $brand-secondary !important;
		@media screen and (max-width: 767px) {
			margin-left: 0;
		}
	}
	
	.navbar-collapse {
		padding: 0;
		.navbar-wrapper {
			height: 50px;
			margin: 0 auto;
			@media screen and (max-width: 767px) {
				height: auto;
			}
			
			.navbar-nav {
				display: inline-block;
				float: none;
				@media screen and (max-width: 767px) {
					margin: 0;
					display: block;
					&.navbar-right {
						display: inline-block;
					}
				}
				& > li {
					margin: 10px 0;
					@media screen and (max-width: 767px) {
						margin: 3px 0;
					}
					.navbar-link {
						color: $brand-secondary;
						padding: 4px 12px;
						margin: 0 7px;
						border-radius: 5px;
						border: 1px solid transparent;
						transition: all 300ms linear;
						@media screen and (min-width: 768px) and (max-width: 991px) {
							margin: 0 1px;
						}
						@media screen and (max-width: 991px) {
							padding: 4px 7px;
						}
						&.reservation {
							border-color: $brand-secondary;
						}
						&.router-link-active {
							background-color: $brand-secondary;
							color: white;
						}
						&:hover, &:focus {
							background-color: $brand-secondary;
							color: white;
							outline: none;
							box-shadow: none;
						}
					}
				}
			}
		}
	}
	
	.language-select {
		padding: 15px 15px 0;
		line-height: 20px;
		display: inline-block;
		color: $brand-secondary;
		button, a {
			color: $brand-secondary;
			border: none;
			background: none;
			display: inline-block;
			float: left;
			padding: 0 15px;
			border-right: 1px solid $brand-secondary;
			border-radius: 0;
			&:last-of-type {
				padding: 0 0 0 15px;
				border-right: none;
				@media screen and (max-width: 767px) {
					padding: 0 15px;
				}
			}
			&.active {
				font-weight: bold;
			}
		}
	}
	
	.multiselect {
		padding: 15px;
		line-height: 20px;
	}
</style>

<style lang="scss">
	@import '../assets/style/setting';
	
	.lang-select {
		position: relative !important;
		box-sizing: border-box !important;
		color: $brand-secondary !important;
		width: 70px !important;
		min-height: inherit !important;
		text-align: center !important;
		cursor: pointer;
		&:before {
			font-family: "themify";
			content: "\e665";
			display: block;
		}
		&:focus, &:active {
			outline: none !important;
			box-shadow: none !important;
		}
		.multiselect__select, .multiselect__tags {
			display: none;
		}
		.multiselect__content-wrapper {
			position: absolute;
			width: auto;
			right: 0;
			margin-top: 0.5rem;
			border: 1px solid $brand-secondary;
			border-radius: 5px;
			& > ul {
				list-style-type: none;
				margin-top: -6px;
				margin-bottom: 0;
				background: none;
			}
		}
		.multiselect__option {
			min-height: 30px;
		}
	}
</style>