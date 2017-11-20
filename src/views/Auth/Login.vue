<template>
	<div class="container-fluid" id="login">
		<section class="padding-of-section mt-5 py-3 py-sm-5">
			<div class="row">
				<div class="col-xs-12">
					<div class="login-wrapper">
						<img :src="logoSrc" alt="Tempourong Logo" />
						<h4>Admin Login</h4>
						<input v-model="username" placeholder="Username">
						<input v-model="password" placeholder="Password" type="password">
						<button class="btn btn-main"><span class="ti-unlock"></span> Log in</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	#login {
		background-color: #f5f5f5;
		height:100vh;
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