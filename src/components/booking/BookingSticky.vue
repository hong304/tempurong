<template>
	<div class="booking-sticky" :class="{ shown: show }">
		<button type="button" v-show="isMobile" @click="show=!show" class="btn btn-close"><span
				:class="{ 'ti-angle-up': !show, 'ti-angle-down': show}"></span>
		</button>
		<div class="summary-shorthand">
			<h2 class="total-price"><strong>{{ $t('components.booking.bookingSticky.total') }}</strong> ${{totalPrice}} MYR
			</h2>
			<h4 class="total-guests">
				<strong>{{ $tc('components.booking.bookingSticky.guests', totalGuests, {count: totalGuests}) }}</strong>
				({{ $tc('dateUnit.days', totalDays, {count: totalDays}) }},
				{{ $tc('dateUnit.nights', totalNights, {count: totalNights}) }})
			</h4>
			<p class="check-in-out"><span class="ti-calendar"></span> {{checkInData}} - {{checkOutData}}</p>
		</div>
		<div class="summary-detail">
			<div class="picker-input">

				<div class="no-of-people">
					<span class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}}</span>
					<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 0)" class="btn btn-minus"
										:disabled="!counterAdults"><span
								class="ti-minus"></span></button>
						<span class="counter-num">{{ counterAdults }}</span>
						<button type="button" @click="changePeopleNumber('add', 0)" class="btn btn-plus"><span
								class="ti-plus"></span></button>
					</span>
				</div>

				<div class="no-of-people">
					<span class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}}</span>
					<span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 1)" class="btn btn-minus"
										:disabled="!counterChildren"><span
								class="ti-minus"></span></button>
						<span class="counter-num">{{ counterChildren }}</span>
						<button type="button" @click="changePeopleNumber('add', 1)" class="btn btn-plus"><span
								class="ti-plus"></span></button>
					</span>
				</div>

			</div>
			<div class="sticky-footer">
				<button class="btn" :class="{ 'btn-main': !isMobile, 'btn-secondary': isMobile }">{{ $t('button.book') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'booking-sticky',
    components: {
      Multiselect
    },
    props: {
      isMobile: this.isMobile,
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
        totalNights: '6',
        show: false,
        adults: 0,
        children: 0,
        checkInData: '2017-12-01',
        checkOutData: '2017-12-07',
        counterAdults: 0,
        counterChildren: 0
      }
    },
    methods: {
      changePeopleNumber (type, people) {
        if (people) {
          if (type === 'minus') {
            this.counterChildren--
          } else if (type === 'add') {
            this.counterChildren++
          }
        } else {
          if (type === 'minus') {
            this.counterAdults--
          } else if (type === 'add') {
            this.counterAdults++
          }
        }
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.booking-sticky {
		border: 1px solid $light-grey;
		padding: 2rem;
		color: $brand-secondary;
		text-align: left;
		@media screen and (max-width: 991px) {
			position: fixed;
			height: 100vh;
			width: 100vw;
			top: calc(100vh - 8vh - 3.25rem);
			left: 0;
			padding: calc(1.5rem) 1.5rem 1.5rem;
			background-color: $brand-primary;
			border-color: $brand-secondary transparent transparent;
			overflow-y: scroll;
			z-index: 1;
			transition: top .3s ease;
			&.shown {
				top: 0;
			}
		}
		@media screen and (max-width: 767px) {
			top: calc(100vh - 12vh - 3.25rem);
		}
	}

	.summary-shorthand {
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid $light-grey;
		@media screen and (max-width: 767px) {
			min-height: calc(8vh);
			margin-bottom: 1.5rem;
			padding-bottom: 1.5rem;
		}
		.total-price {
			margin: 0;
			text-transform: uppercase;
			@media screen and (max-width: 767px) {
				font-size: 5vh;
			}
		}
		.total-guests {
			margin: 0.5rem 0 0;
			@media screen and (max-width: 767px) {
				font-size: 3vh;
				margin: 0;
			}
		}
		.check-in-out {
			margin: 0.5rem 0 0;
		}
	}

	.picker-input {
		margin: 0 0 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid $brand-secondary;
		& > div {
			height: 34px;
			margin-bottom: 1rem;
			&:last-of-type {
				margin-bottom: 0;
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
			.people-title {
				line-height: 34px;
				float: left;
			}
			.controls {
				float: right;
				.btn-minus, .btn-plus {
					background-color: transparent;
					color: $brand-primary;
					width: 25px;
					height: 25px;
					border: 1px solid $brand-primary;
					border-radius: 50%;
					padding: 0;
					line-height: 25px;
					font-size: 15px;
					vertical-align: middle;
					outline: none;
				}
			}
		}
	}

	.summary-detail {
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.multiselect {
		color: $brand-secondary;
	}

	.btn-main, .btn-secondary {
		display: block;
		width: 100%;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.btn-close {
		position: absolute;
		right: 0.5rem;
		height: 25px;
		width: 30px;
		padding: 0.25rem;
		top: 0;
		font-size: 16px;
		background: none;
		border: none;
		z-index: 1;
	}

</style>