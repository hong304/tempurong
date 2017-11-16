<template>
	<div class="container" id="order-history">
		<section class="padding-of-section mt-5 py-3 py-sm-5">
			<div class="row">
				<div class="col-xs-12">
					<h1>Order History</h1>
					<vuetable ref="vuetable"
										api-url="https://vuetable.ratiw.net/api/users"
										:fields="['name', 'email', 'birthdate']"
					></vuetable>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    name: 'OrderHistory',
    components: {
      Vuetable
    }
  }
</script>

<style lang="scss" scoped>

</style>