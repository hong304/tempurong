<template>
	<section>
		<form class="form-inline">
			<dropdown class="form-group">
				<div class="input-group">
					<input class="form-control" type="text" v-model="checkinDate">
					<div class="input-group-btn">
						<button class="btn btn-default dropdown-toggle" type="button"><i class="glyphicon glyphicon-calendar"></i></button>
					</div>
				</div>
				<template slot="dropdown">
					<li>
						<date-picker v-model="checkinDate"></date-picker>
					</li>
				</template>
			</dropdown>
		</form>
	</section>
</template>

<script>
  export default {
    data () {
      return {
        checkinDate: null
      }
    },
    created () {
      console.log(_.isEmpty(null))
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
</style>