<template>
	<section>
		<div class="row">
			<div class="picker-nav-bar">
				<div class="picker-input">
					<HotelDatePicker
							:startDate="new Date()"
							:i18n="defineDatePicker()"
							v-on:checkInChanged="checkIn = $event"
							v-on:checkOutChanged="checkOutSelected($event)"
					></HotelDatePicker>
				</div>
				<div class="picker-button">
					<router-link :to="{ name: 'Reservations', params: { checkInFromHome: this.checkIn, checkOutFromHome: this.checkOut } }"
											 class="picker-nav-link">{{ $t('button.bookNow') }}
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
  import HotelDatePicker from 'vue-hotel-datepicker'

  export default {
    components: {
      HotelDatePicker
    },
    data () {
      return {
        checkIn: '',
        checkOut: ''
      }
    },
    mounted: function () {
    },
    methods: {
      defineDatePicker: function () {
        return this.$i18n.getLocaleMessage(this.$i18n.locale).datePicker
      },
      checkOutSelected: function (val) {
        this.checkOut = val
        this.checkIn = this.$moment(this.checkIn).format('YYYY-MM-DD')
        this.checkOut = this.$moment(this.checkOut).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style lang="scss">
	@import '../../assets/style/setting';

	.picker-nav-bar {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		background-color: $brand-primary;
		& > div {
			flex: 0 0 auto;
			align-self: center;
			@media screen and (max-width: 767px) {
				flex: 1 1 100%;
			}
		}
		.picker-input {
			height: 40px;
			margin: 1rem 0.5rem 1rem 1rem;
			@media screen and (max-width: 767px) {
				margin: 1rem 1rem 0.5rem;
			}
			.datepicker__wrapper {
				height: 40px;
				background-color: transparent;
				background-image: url('../../assets/img/calendar.svg');
				.datepicker__dummy-wrapper {
					border-color: white;
					border-radius: 5px;
					.datepicker__dummy-input {
						height: 40px;
						color: white;
						&::placeholder {
							color: white;
						}
						&:first-child {
							background-image: url('../../assets/img/arrow.svg')
						}
					}
				}
				.datepicker__clear-button {
					color: white;
					margin: 0 -2px 0 0;

				}
			}
		}
		.picker-button {
			align-self: center;
			line-height: 40px;
			margin: 1rem 1rem 1rem 0.5rem;
			padding: 0 2rem;
			background-color: white;
			border-radius: 5px;
			@media screen and (max-width: 767px) {
				margin: 0.5rem 1rem 1rem;
			}
			& > a {
				color: $brand-primary;
				&:hover, &:focus {
					text-decoration: none;
				}
			}
		}
		.datepicker {
			top: 40px;
		}
	}
</style>