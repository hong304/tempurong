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
                                :disabled="!counter"><span
                                class="ti-minus"></span></button>
						<span class="counter-num">{{ counter }}</span>
						<button type="button" @click="changeRoom('add')" class="btn btn-plus"><span
                                class="ti-plus"></span></button>
					</span>
                    <h3 v-html="result['name_'+$i18n.locale]"></h3>
                    <h4>${{ result.price }}</h4>
                </div>
                <ul class="icon-list">
                    <li>{{ resData.guests }} guests <span v-if="(resData.guests < 5)">(adding 1 extra mattress for max.5 guests)</span>
                    </li>
                    <li>{{ resData.queenBeds }} queen beds</li>
                </ul>

                <div class="rooms-body">
                    <input type="checkbox" id="checkbox" @click="handleBreakfastMattress">
                    <label for="checkbox"> Extra mattress or breakfast</label>
                </div>
                <div class="rooms-extra" v-if="needExtra">
                    <div class="extra-breakfast">
                        <div>
                            <multiselect
                                    v-model="roomObject.room.breakfast"
                                    :options="breakfast_select"
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
                                    v-model="roomObject.room.mattress"
                                    :options="mattress_select"
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
      resData: {
        type: Object,
        default: function () {
          return {
            'guests': 4,
            'queenBeds': 2,
            'doubleDeckers': 0
          }
        }
      },
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
      buttonText: {
        type: String,
        default: function () {
          let t = (this.show) ? 'hide details >' : 'more details >'
          return t
        }
      },
      show: false,
      index: {
        type: Number,
        default: function () {
          return 0
        }
      }
    },
    data () {
      return {
        counter: 0,
        info: {},
        no_of_rooms: [],
        roomObject: {
          index: this.index,
          room: {
            type: 1,
            noOfRoom: 3,
            breakfast: 0,
            mattress: 0
          }
        },
        breakfast_select: [],
        mattress_select: [],
        needExtra: false
      }
    },
    methods: {
      handleBreakfastMattress () {
        this.needExtra = !this.needExtra
        if (!this.needExtra) {
          this.roomObject.room.breakfast = 0
          this.roomObject.room.noOfRoom = 0
        }
      },
      changeRoom (type) {
        this.breakfast_select = []
        this.roomObject.room.breakfast = 0
        if (type === 'minus') {
          this.counter--
        } else if (type === 'add') {
          this.counter++
        }
        for (var i = 0; i <= this.counter; i++) {
          this.breakfast_select.push(i)
        }
        this.mattress_select = []
        this.roomObject.room.mattress = 0
        for (i = 0; i <= this.counter; i++) {
          this.mattress_select.push(i)
        }
        this.roomObject.room.noOfRoom = this.counter
//        this.no_of_rooms[typeId]['breakfast'] = 1
      }
    },
    watch: {
      'roomObject': {
        handler: function (val) {
          this.$emit('roomUpdates', this.roomObject)
        },
        deep: true
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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

    .multiselect {
        display: inline-block;
        width: 50px;
        min-height: 30px;
        margin-right: 1rem;
        color: $brand-secondary;
    }
</style>
<style lang="scss">
    @import '../../assets/style/setting';

    .multiselect {
        display: inline-block;
        width: 50px;
        min-height: 30px;
        margin-right: 1rem;
        color: $brand-secondary;
    }
</style>