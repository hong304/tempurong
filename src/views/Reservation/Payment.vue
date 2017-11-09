<template>
	<div class="container" id="reservations-payment">
		<section class="mt-5 py-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="titleOne"></content-title>
				</div>
			</div>
		</section>
		<section class="py-5">
			<div class="row">
				<div class="col-xs-12">

				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'

  export default {
    components: {
      ContentTitle
    },
    name: 'reservations-payment',
    data () {
      return {
        ContentTitle: 'Payment'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';
</style>
