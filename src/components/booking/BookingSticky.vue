<template>
	<div class="booking-sticky">
		<div class="summary-shorthand">
			<h2 class="total-price"><strong>Total</strong> ${{totalPrice}} myr</h2>
			<h4 class="total-guests"><strong>{{totalGuests}} guests</strong> ({{totalDays}} days, {{totalNights}} nights)</h4>
		</div>
		<div class="picker-input">
			<div><HotelDatePicker :startDate="new Date()"/></div>
			<div><multiselect
					v-model="selectedOne"
					:options="optionsOne"
					:searchable="false"
					:close-on-select="true"
					:showLabels="false"
			></multiselect></div>
			<div><multiselect
					v-model="selectedTwo"
					:options="optionsTwo"
					:searchable="false"
					:close-on-select="true"
					:showLabels="false"
			></multiselect></div>
		</div>
		<div class="sticky-footer">
			<button class="btn btn-main">Book</button>
		</div>
	</div>
</template>

<script>
  import HotelDatePicker from 'vue-hotel-datepicker'
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'booking-sticky',
    components: {
      HotelDatePicker,
      Multiselect
    },
    props: {
      selectedOne: {
        type: String,
        default: function () {
          return 'Adults'
        }
      },
      optionsOne: {
        type: Array,
        default: function () {
          return ['1 Adult', '2 Adults', '3 Adults', '4 Adults']
        }
      },
      selectedTwo: {
        type: String,
        default: function () {
          return 'Children'
        }
      },
      optionsTwo: {
        type: Array,
        default: function () {
          return ['1 Children', '2 Children', '3 Children', '4 Children']
        }
      }
    },
    data () {
      return {
        totalPrice: '12,345',
        totalGuests: '10',
        totalDays: '7',
        totalNights: '6'
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.booking-sticky {
		border: 1px solid #dddddd;
		padding: 2rem;
		color: $brand-secondary;
		text-align: left;
	}

	.summary-shorthand {
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid #dddddd;
		.total-price {
			margin: 0;
			text-transform: uppercase;
		}
		.total-guests {
			margin: 0.5rem 0 0;
		}
	}
	.multiselect {
		color: $brand-secondary;
	}

	.btn-main {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>

<style lang="scss">
	@import '../../assets/style/setting';

	.picker-input {
		margin: 1rem 0;
		padding-bottom: 2rem;
		border-bottom: 1px solid $brand-secondary;
		& > div {
			height: 40px;
			margin-bottom: 1rem;
			&:last-of-type {
				margin-bottom: 0;
			}
		}
		.datepicker__wrapper {
			height: 40px;
			background-color: transparent;
			background-image: url('../../assets/img/calendar-brand-sec.svg');
			.datepicker__dummy-wrapper {
				border-color: $brand-secondary;
				border-radius: 5px;
				.datepicker__dummy-input {
					height: 40px;
					color: $brand-secondary;
					&::placeholder {
						color: $brand-secondary;
					}
					&:first-child {
						background-image: url('../../assets/img/arrow-brand-sec.svg')
					}
				}
			}
			.datepicker__clear-button {
				color: $brand-secondary;
				margin: 0 -2px 0 0;

			}
		}
	}

	.datepicker {
		top: 40px;
	}
</style>