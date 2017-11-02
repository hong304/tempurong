<template>
	<nav id="global-nav" class="navbar">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<collapse class="navbar-collapse" v-model="showNavbar">
				<div class="navbar-wrapper">
					<ul class="nav navbar-nav">
						<!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
						<li><router-link :to="{ path: '/about' }" class="navbar-link">About</router-link></li>
						<li><router-link :to="{ path: '/rooms' }" class="navbar-link">Rooms & Amenities</router-link></li>
						<li><router-link :to="{ path: '/activities' }" class="navbar-link">Activities</router-link></li>
					</ul>
					<router-link :to="{ path: '/' }" class="navbar-brand" role="button">Logo</router-link>
					<ul class="nav navbar-nav">
						<li><router-link :to="{ path: '/food' }" class="navbar-link">Food</router-link></li>
						<li><router-link :to="{ path: '/contact' }" class="navbar-link">Contact</router-link></li>
						<li><router-link :to="{ path: '/book' }" class="navbar-link">Book Now</router-link></li>
					</ul>
				</div>
			</collapse>
		</div>
	</nav>
</template>

<script>
  export default {
    name: 'global-nav',
    data () {
      return {
        showNavbar: false
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../assets/style/setting';
	.navbar-wrapper {
		margin: 0 auto;
		.navbar-brand {
			width: 14%;
		}
		.navbar-nav {
			width: 43%;
			& > li {
				width: 33.3%;
				.navbar-link {
					color: $brand-secondary;
				}
			}
		}
	}
</style>