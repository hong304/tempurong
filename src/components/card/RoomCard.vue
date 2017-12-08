<template>
	<div class="room-card row">
		<div class="image-thumb-wrapper col-sm-5 col-xs-12 mb-3 mb-sm-0">
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
					<p>{{result['room_title_' + $i18n.locale]}}</p>
					<h4>${{ result.price }} MYR <span>{{$t('components.card.roomCard.withBreakfast')}}</span></h4>
				</div>
				<ul class="icon-list">
					<li>
						<p>
							<span class="icon icon-guest"></span>
							<span> {{ $tc('components.card.roomCard.guests', result.capacity, {count: result.capacity})}} </span>
							<span
									v-if="(result.add_bed)">{{$t('components.card.roomCard.addMattressRemarks', {count: result.capacity + 1})}}</span>
						</p>
					</li>
					<li>
						<p>
							<span class="icon icon-queen-bed"></span>
							<span>{{$tc('components.card.roomCard.queenBed', result.queen_bed, {count: result.queen_bed})}}</span>
						</p>
					</li>
					<li v-if="(result.bunk_bed > 0)">
						<p>
							<span class="icon icon-bunk-bed"></span>
							<span>{{$tc('components.card.roomCard.bunkBed', result.bunk_bed, {count: result.bunk_bed})}}</span>
						</p>
					</li>
				</ul>

				<div class="rooms-body">
					<input type="checkbox" :id="'checkbox'+ index" v-model="needExtra" @click="handleBreakfastMattress"
								 :disabled="!counterRooms">
					<label :for="'checkbox'+ index"
								 :class="{ disabled: !counterRooms }">{{$t('components.card.roomCard.addMattressAndBreakfastOption')}}</label>
				</div>
				<div class="rooms-extra" v-if="needExtra">
					<div class="extra-breakfast">
						<div>
							<multiselect
									class="extra-select custom-multiselect"
									v-model="roomTypeCondition.breakfast"
									:options="breakfast_options"
									:searchable="false"
									:close-on-select="true"
									:showLabels="false"
									:hide-selected="true"
									:disabled="!counterRooms"
							></multiselect>
						</div>
						<div>
							{{ $t('components.card.roomCard.extraBreakfast') }}<br>
							<span>{{ $t('components.card.roomCard.breakfastRemarks') }}</span>
						</div>
					</div>
					<div class="extra-mattress" v-if="(result.add_bed)">
						<div>
							<multiselect
									class="extra-select custom-multiselect"
									v-model="roomTypeCondition.mattress"
									:options="mattress_options"
									:searchable="false"
									:close-on-select="true"
									:showLabels="false"
									:hide-selected="true"
									:disabled="!counterRooms"
							></multiselect>
						</div>
						<div>
							{{ $t('components.card.roomCard.extraMattress') }}<br>
							<span>{{ $t('components.card.roomCard.mattressRemarks') }}</span>
						</div>
					</div>
				</div>

				<div class="rooms-footer">
					<span>
						{{ $tc('components.card.roomCard.roomAvailable', availableRooms, {count: availableRooms}) }} |
						<button type="button" @click="show=!show"
										class="btn btn-text-only">{{ (!show) ? $t('button.moreDetails') : $t('button.hideDetails')
							}} > </button>
					</span>
				</div>
			</div>
			<collapse v-model="show">
				<div class="well" style="margin-bottom: 0">
					<h5>{{ $t('components.card.roomCard.description') }}</h5>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<h5>{{ $t('components.card.roomCard.amenities') }}</h5>
					<ul class="icon-list">
						<li></li>
					</ul>
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
          noOfRoom: this.result.noOfRoom || 0,
          breakfast: this.result.breakfast || 0,
          mattress: this.result.mattress || 0
        },
        roomType: this.result,
        breakfast_options: [],
        mattress_options: [],
        needExtra: false,
        show: false
      }
    },
    methods: {
      handleBreakfastMattress () {
        // if user checked the extra box will show the option
        // to select how many mattress or breakfast they need
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

        this.mattressOrBreakfastOption()

        if (this.counterRooms > 0) {
          this.roomTypeCondition.noOfRoom = this.counterRooms
        } else {
          this.roomTypeCondition.noOfRoom = 0
        }
      },
      mattressOrBreakfastOption: function () {
        for (var i = 0; i <= this.counterRooms; i++) {
          this.breakfast_options.push(i)
          this.mattress_options.push(i)
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
        this.roomTypeCondition.noOfRoom = 0
        this.roomTypeCondition.breakfast = 0
        this.roomTypeCondition.mattress = 0
      }
    },
    created () {
      this.mattressOrBreakfastOption()
      if (this.result.breakfast || this.result.mattress) {
        this.needExtra = true
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
			height: auto;
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
					span {
						text-transform: lowercase;
						font-style: italic;
						font-size: 0.8em;
					}
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
			.icon-list {
				li {
					display: table;
					p {
						display: table-row;
						span {
							display: table-cell;
							vertical-align: middle;
							padding-right: 2px;
							&.icon {
								padding-right: 2.5rem;
							}
						}
					}
				}
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

	.rooms-body {
		label {
			&:hover, &:focus {
				cursor: pointer;
			}
			&.disabled {
				color: $light-grey;
				cursor: not-allowed;
			}
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
<style lang="scss">
	.icon {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-size: contain;
		background-repeat: no-repeat;

		&.icon-guest {
			background-image: url("/static/img/icons/guest.svg");
		}
		&.icon-breakfast {
			background-image: url("/static/img/icons/breakfast.svg");
		}
		&.icon-bunk-bed {
			background-image: url("/static/img/icons/bunk_bed.svg");
		}
		&.icon-queen-bed {
			background-image: url("/static/img/icons/queen_bed.svg");
		}
		&.icon-mattress {
			background-image: url("/static/img/icons/mattress.svg");
		}
	}
</style>