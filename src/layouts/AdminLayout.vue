<template>
	<div id="admin">
		<div class="side-nav">
			<router-link :to="{ name: 'Home' }" class="nav-brand" role="button">
				<img src="/static/img/logo.png" :alt="$t('companyName')">
			</router-link>
			<ul>
				<li><router-link :to="{ name: 'OrderHistory' }" class="nav-link">
					<span class="ti-list"></span>
					<p>Order History</p>
				</router-link></li>
				<li>
					<router-link :to="{ name: 'Home' }" class="nav-link">
						<span class="ti-settings"></span>
						<p>Profile</p>
					</router-link></li>
				<li><router-link :to="{ name: 'Home' }" class="nav-link">
					<span class="ti-power-off"></span>
					<p>Logout</p>
				</router-link></li>
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
      }
    },
    mounted () {
      window.addEventListener('resize', this.handleResize)
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
		padding: 10px;
		background: #2B2E33;
		.nav-brand {
			width: 60px;
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