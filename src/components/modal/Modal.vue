<!-- template for the modal component -->
<template>
	<div id="modal-template">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">

					<div class="modal-header" v-if="this.$slots.header">
						<slot name="header">
							default header
						</slot>
					</div>

					<div class="modal-body" v-if="this.$slots.body">
						<slot name="body">
							default body
						</slot>
					</div>

					<div class="modal-footer" v-if="this.$slots.footer">
						<slot name="footer">
							default footer
							<button class="modal-default-button" @click="$emit('close')">
								OK
							</button>
						</slot>
					</div>
					<slot name="processing" v-if="this.$slots.processing"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'vue-modal'
	}
</script>


<style lang="scss" scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		position: relative;
		width: 300px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;
	}

	.modal-header h3 {
		margin-top: 0;
		color: #42b983;
	}

	.modal-body {
		margin: 20px 0;
	}

	.modal-default-button {
		float: right;
	}

</style>