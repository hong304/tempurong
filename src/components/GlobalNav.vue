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
				<router-link :to="{ path: '/' }" class="navbar-brand" role="button">Logo</router-link>
			</div>
			<collapse class="navbar-collapse" v-model="showNavbar">
				<ul class="nav navbar-nav">
					<!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
					<li><router-link :to="{ path: '/about' }">About</router-link></li>
					<li><router-link :to="{ path: '/rooms' }">Rooms</router-link></li>
					<li><router-link :to="{ path: '/activities' }">Activities</router-link></li>
					<li><router-link :to="{ path: '/food' }">Food</router-link></li>
					<li><router-link :to="{ path: '/contact' }">Contact</router-link></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><router-link :to="{ path: '/book' }">Book</router-link></li>
				</ul>
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