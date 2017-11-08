<template>
	<nav id="global-nav" class="navbar navbar-default">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link :to="{ path: '/' }" v-show="isMobile" class="navbar-brand" role="button">Logo</router-link>
			</div>
			<collapse class="navbar-collapse" v-model="showNavbar">
				<div class="navbar-wrapper">
					<ul class="nav navbar-nav">
						<!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
						<li>
							<router-link :to="{ path: '/about' }" class="navbar-link">{{ $t("menu.about") }}</router-link>
						</li>
						<li>
							<router-link :to="{ path: '/rooms'}" class="navbar-link">{{ $t("menu.rooms") }}</router-link>
						</li>
						<li>
							<router-link :to="{ path: '/activities'}" class="navbar-link">{{ $t("menu.activities") }}</router-link>
						</li>
					</ul>
					<router-link :to="{ path: '/' }" v-show="!isMobile" class="navbar-brand" role="button">Logo</router-link>
					<ul class="nav navbar-nav">
						<li>
							<router-link :to="{path: '/food'}" class="navbar-link">{{ $t("menu.food") }}</router-link>
						</li>
						<li>
							<router-link :to="{path: '/contact'}" class="navbar-link">{{ $t("menu.contact") }}</router-link>
						</li>
						<li>
							<router-link :to="{path: '/reservations'}" class="navbar-link">{{ $t("menu.reservations") }}</router-link>
						</li>
					</ul>
				</div>
			</collapse>
		</div>
		<multiselect
						v-model="language"
						:options="languageOptions"
						:searchable="false"
						:close-on-select="true"
						:showLabels="false"
						placeholder="Languages"
		></multiselect>
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
    }
  }
</script>

<style lang="scss" scoped>
	@import '../assets/style/setting';
	
	.navbar {
		margin-bottom: 0;
	}
	
	.navbar-default {
		background: none;
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
	}
	
	.navbar-wrapper {
		margin: 0 auto;
		.navbar-brand {
			width: 14%;
		}
		.navbar-nav {
			width: 43%;
			@media screen and (max-width: 767px) {
				width: 100%;
				margin: 0;
				text-align: left;
			}
			& > li {
				width: 33.3%;
				@media screen and (max-width: 767px) {
					width: 100%;
				}
				.navbar-link {
					color: $brand-secondary;
				}
			}
		}
	}
</style>