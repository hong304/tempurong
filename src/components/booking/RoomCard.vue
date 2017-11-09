<template>
	<div class="room-card row">
		<div class="image-thumb-wrapper col-md-5 col-xs-12">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper col-md-7 col-xs-12">
			<div class="content-wrapper">
				<h3 v-html="result['name_'+$i18n.locale]"></h3>
				<h4>${{ result.price }}</h4>
				<ul class="icon-list">
					<li></li>
				</ul>
				<div class="rooms-extra">
					<div class="extra-breakfast">
						<div>
							<multiselect
											v-model="breakfast"
											:options="options"
											:searchable="false"
											:close-on-select="true"
											:showLabels="false"
											:disabled="!counter"
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
											v-model="mattress"
											:options="options"
											:searchable="false"
											:close-on-select="true"
											:showLabels="false"
											:disabled="!counter"
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
						<button type="button" @click="show=!show" class="btn btn-text-only">{{ $t('button.moreDetails')
							}} > </button>
					</span>
					<span class="rooms-number">
						<button type="button" @click="totalRooms(result.id)" class="btn btn-minus" :disabled="!counter"><span
										class="ti-minus"></span></button>
						<span class="counter-num">{{ counter }}</span>
						<button type="button" @click="totalRooms(result.id)" class="btn btn-plus"><span class="ti-plus"></span></button>
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
      options: {
        type: Array,
        default: function () {
          return [0, 1]
        }
      },
      availableRooms: {
        type: String,
        default: function () {
          return '0'
        }
      },
      buttonText: {
        type: String,
        default: function () {
          let t = (this.show) ? 'hide details >' : 'more details >'
          return t
        }
      },
      show: false
    },
    data () {
      return {
        counter: 0,
        info: {},
        no_of_rooms: [],
        mattress: 0,
        breakfast: 0
      }
    },
    methods: {
      totalRooms (typeId) {
        this.counter++
//        this.no_of_rooms[typeId]['breakfast'] = 1
        console.log(this.no_of_rooms)
      }
    },
    computed: {}
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
    @import '../../assets/style/setting';

    .rooom-card {
        border-bottom: 2px solid $brand-primary;
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
            & > h3, & > h4 {
                margin: 0;
                text-transform: uppercase;
            }
            & > h3 {
                font-weight: bold;
            }
            & > h4 {
                font-weight: 100;
                margin-bottom: 1rem;
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
            .rooms-footer {
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
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
        .rooms-number {
            float: right;
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

    .multiselect {
        display: inline-block;
        width: 50px;
        min-height: 30px;
        margin-right: 1rem;
        color: $brand-secondary;
    }
	@import '../../assets/style/setting';
	
	.rooom-card {
		border-bottom: 2px solid $brand-primary;
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
			& > h3, & > h4 {
				margin: 0;
				text-transform: uppercase;
			}
			& > h3 {
				font-weight: bold;
			}
			& > h4 {
				font-weight: 100;
				margin-bottom: 1rem;
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
			.rooms-footer {
				margin-top: 1.5rem;
				margin-bottom: 1.5rem;
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
		.rooms-number {
			float: right;
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
	
	.multiselect {
		display: inline-block;
		width: 50px;
		min-height: 30px;
		margin-right: 1rem;
		color: $brand-secondary;
	}
</style>