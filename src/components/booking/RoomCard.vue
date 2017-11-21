<template>
	<div class="room-card row">
		<div class="image-thumb-wrapper col-sm-5 col-xs-12">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper col-sm-7 col-xs-12">
			<div class="content-wrapper">
				<div class="room-header">
					<span class="rooms-number">
						<button type="button" @click="changeRoom('minus')" class="btn btn-minus"
						        :disabled="!counterRooms"><span
										class="ti-minus"></span></button>
						<span class="counter-num">{{ counterRooms }}</span>
						<button type="button" @click="changeRoom('add')" class="btn btn-plus"
						        :disabled="counterRooms >= availableRooms"><span
										class="ti-plus"></span></button>
					</span>
					<h3 v-html="result['name_'+$i18n.locale]"></h3>
					<h4>${{ result.price }}</h4>
				</div>
				<ul class="icon-list">
					<li>{{ $tc('components.booking.roomCard.guests', result.capacity, {count: result.capacity})}}
						<span v-if="(result.add_bed)">{{$t('components.booking.roomCard.addMattressRemarks', {count: result.capacity + 1})}}</span>
					</li>
					<li>{{$tc('components.booking.roomCard.queenBed', result.queen_bed, {count: result.queen_bed})}}</li>
					<li v-if="(result.bunk_bed > 0)">
						{{$tc('components.booking.roomCard.bunkBed', result.bunk_bed, {count: result.bunk_bed})}}
					</li>
				</ul>
				
				<div class="rooms-body">
					<input type="checkbox" id="checkbox" @click="handleBreakfastMattress">
					<label for="checkbox">{{$t('components.booking.roomCard.addMattressAndBreakfastOption')}}</label>
				</div>
				<div class="rooms-extra" v-if="needExtra">
					<div class="extra-breakfast">
						<div>
							<multiselect
											class="extra-select custom-multiselect"
											v-model="roomTypeCondition.room.breakfast"
											:options="breakfast_options"
											:searchable="false"
											:close-on-select="true"
											:showLabels="false"
											:hide-selected="true"
											:disabled="!counterRooms"
							></multiselect>
						</div>
						<div>
							{{ $t('components.booking.roomCard.extraBreakfast') }}<br>
							<span>{{ $t('components.booking.roomCard.breakfastRemarks') }}</span>
						</div>
					</div>
					<div class="extra-mattress">
						<div>
							<multiselect
											class="extra-select custom-multiselect"
											v-model="roomTypeCondition.room.mattress"
											:options="mattress_options"
											:searchable="false"
											:close-on-select="true"
											:showLabels="false"
											:hide-selected="true"
											:disabled="!counterRooms"
							></multiselect>
						</div>
						<div>
							{{ $t('components.booking.roomCard.extraMattress') }}<br>
							<span>{{ $t('components.booking.roomCard.mattressRemarks') }}</span>
						</div>
					</div>
				</div>
				
				<div class="rooms-footer">
					<span>
						{{ $tc('components.booking.roomCard.roomAvailable', availableRooms, {count: availableRooms}) }} |
						<button type="button" @click="show=!show"
						        class="btn btn-text-only">{{ (!show) ? $t('button.moreDetails') : $t('button.hideDetails')
							}} > </button>
					</span>
				</div>
			</div>
			<collapse v-model="show">
				<div class="well" style="margin-bottom: 0">
					<h5>{{ $t('components.booking.roomCard.description') }}</h5>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<h5>{{ $t('components.booking.roomCard.amenities') }}</h5>
					<ul class="icon-list">
						<li></li>
					</ul>
					<h5>{{ $t('components.booking.roomCard.resortPolicy') }}</h5>
					<ul class="info-list">
						<li></li>
					</ul>
					<h5>{{ $t('components.booking.roomCard.cancellations') }}</h5>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
			</collapse>
		</div>
	</div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'room-card',
    components: {
      Multiselect
    },
    props: {
      result: {type: Object},
      imageSrc: {
        type: String,
        default: function () {
          return '/static/img/demo-room.jpg'
        }
      },
      availableRooms: {
        type: Number,
        default: function () {
          return 0
        }
      },
      show: false,
      index: {
        type: Number,
        default: function () {
          return 0
        }
      },
      updated: {
        type: String
      }
    },
    data () {
      return {
        counterRooms: this.result.noOfRoom || 0,
        roomTypeCondition: {
          index: this.index,
          type: this.result.id,
          noOfRoom: 0,
          breakfast: 0,
          mattress: 0
        },
        roomType: this.result,
        breakfast_options: [],
        mattress_options: [],
        needExtra: false
      }
    },
    methods: {
      handleBreakfastMattress () {
        // if user checked the extra box will show the option
        // to select how many mattress or breakfast they need
        this.needExtra = !this.needExtra
        if (!this.needExtra) {
          // reset the numbers when the user deselect the checkbox
          this.roomTypeCondition.breakfast = 0
          this.roomTypeCondition.mattress = 0
        }
      },
      changeRoom (type) {
        // will trigger once the use add / subtract the number of room
        this.roomType.reload = false
        this.breakfast_options = []
        this.mattress_options = []
        this.roomTypeCondition.breakfast = this.roomTypeCondition.mattress = 0
        if (type === 'minus') {
          this.counterRooms--
        } else if (type === 'add') {
          this.counterRooms++
        }
        for (var i = 0; i <= this.counterRooms; i++) {
          this.breakfast_options.push(i)
          this.mattress_options.push(i)
        }
        if (this.counterRooms > 0) {
          this.roomTypeCondition.noOfRoom = this.counterRooms
        } else {
          this.roomTypeCondition.noOfRoom = 0
        }
      }
    },
    watch: {
      'roomTypeCondition': {
        handler: function (val) {
          this.roomType = _.merge(this.roomType, this.roomTypeCondition)
          this.roomType.reload = false
          this.$emit('roomUpdates', this.roomType)
        },
        deep: true
      },
      updated: function () {
        this.counterRooms = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	
	.room-card {
		border-bottom: 1px solid $brand-primary;
		padding-bottom: 2.5rem;
		margin-bottom: 2.5rem;
	}
	
	.image-thumb-wrapper {
		& > img {
			width: 100%;
		}
	}
	
	.info-wrapper {
		text-align: left;
		color: $brand-secondary;
		.content-wrapper {
			.room-header {
				& > h3, & > h4 {
					margin: 0;
					text-transform: uppercase;
				}
				& > h3 {
					display: inline-block;
					font-weight: bold;
				}
				& > h4 {
					font-weight: 100;
					margin-bottom: 1rem;
				}
				.rooms-number {
					float: right;
				}
			}
			.rooms-extra {
				.extra-breakfast {
					margin-bottom: 0.5rem;
				}
				.extra-breakfast, .extra-mattress {
					& > div {
						display: inline-block;
						line-height: 20px;
						&:first-of-type {
							float: left;
						}
						&:last-of-type {
							width: calc(100% - 60px);
							& > span {
								color: $brand-primary;
								font-weight: bold;
								font-style: italic;
							}
						}
					}
				}
			}
			.room-body {
				display: block;
			}
			.rooms-footer {
				margin-top: 0.5rem;
				margin-bottom: 0rem;
			}
		}
		.btn-text-only {
			color: $brand-primary;
			padding: 0.5rem 0;
			&:hover, &:focus {
				color: $brand-secondary;
			}
		}
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
		.counter-num {
			font-size: 2rem;
			line-height: 25px;
			vertical-align: middle;
		}
	}
	
	.well {
		border: none;
		border-radius: 0;
		box-shadow: none;
		& > h5 {
			font-weight: bold;
			margin-top: 2rem;
			margin-bottom: 0.5rem;
			font-size: 1.5rem;
			&:first-of-type {
				margin-top: 0;
			}
		}
	}
	
	ul {
		list-style-type: none;
		padding-left: 0;
	}
	
	.extra-select {
		display: inline-block;
		width: 50px;
		min-height: 30px;
		margin-right: 1rem;
		color: $brand-secondary;
	}
</style>