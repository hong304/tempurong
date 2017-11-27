<template>
	<nav id="global-nav" class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link :to="{ name: 'Home' }" class="navbar-brand" role="button"><img src="/static/img/logo.png"
				                                                                            :alt="$t('companyName')">
				</router-link>
			</div>
			<collapse class="navbar-collapse" v-model="showNavbar">
				<div class="navbar-wrapper">
					<ul class="nav navbar-nav">
						<!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
						<li>
							<router-link :to="{ name: 'About' }" class="navbar-link" :class="{ active: $route.name == 'About' }">
								{{ $t("menu.about") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Rooms' }" class="navbar-link" :class="{ active: $route.name == 'Rooms' }">
								{{ $t("menu.rooms") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Activities' }" class="navbar-link"
							             :class="{ active: $route.name == 'Activities' }">{{ $t("menu.activities") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Food' }" class="navbar-link" :class="{ active: $route.name == 'Food' }">
								{{ $t("menu.food") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Contact' }" class="navbar-link" :class="{ active: $route.name == 'Contact' }">
								{{ $t("menu.contact") }}
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Reservations' }" class="navbar-link reservation"
							             :class="{ active: $route.name == 'Reservations' }">{{ $t("menu.reservations") }}
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
						</div>
						<!--<multiselect-->
						<!--class="lang-select"-->
						<!--v-model="language"-->
						<!--:options="languageOptions"-->
						<!--:searchable="false"-->
						<!--:close-on-select="true"-->
						<!--:showLabels="false"-->
						<!--:placeholder="' '"-->
						<!--&gt;</multiselect>-->
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
        } else {
          this.$i18n.locale = 'sc'
        }
      }
    },
    methods: {
      changeLanguage: function (val) {
        this.$i18n.locale = val
      }
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
		border: none;
		.navbar-toggle {
			border: none;
			padding: 0;
			margin-top: 17px;
			&:hover, &:focus {
				background: none;
				.icon-bar {
					background-color: $brand-primary;
				}
			}
		}
		.navbar-brand {
			padding: 10px;
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
					display: block;
					&.navbar-right {
						display: inline-block;
					}
				}
				& > li {
					margin: 10px 0;
					.navbar-link {
						color: $brand-secondary;
						padding: 4px 12px;
						margin: 0 7px;
						border-radius: 5px;
						border: 1px solid transparent;
						transition: all 300ms linear;
						@media screen and (max-width: 991px) {
							padding: 4px 7px;
						}
						&.reservation {
							border-color: $brand-secondary;
						}
						&.active {
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