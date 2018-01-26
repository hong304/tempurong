<template>
    <div class="room-summary row">
        <div class="image-thumb-wrapper col-sm-3 col-xs-12">
            <img :src="imageSrc"/>
        </div>
        <div class="info-wrapper col-sm-9 col-xs-12">
            <div class="content-group">
                <h3 class="room-type">{{ resData['name_' + $i18n.locale] }}</h3>
                <p>{{ resData['room_title_' + $i18n.locale] }}</p>
            </div>
            <div class="content-group">
                {{ $t('components.card.roomSummaryCard.capacity',
                {'capacity': (resData.mattress && resData.mattress == resData.noOfRoom) ? resData.capacity + 1 : resData.capacity})
                }}
                <span v-if="(resData.add_bed && resData.mattress != resData.noOfRoom)">
					{{ $t('components.card.roomSummaryCard.extraMattressRemarks', {'capacity': resData.capacity + 1})
                    }}</span>
            </div>
            <div class="content-group">
                <p class="price-and-nights">
                    {{ resData.price }} MYR
                    <span v-if="showNoOfRoom"> x {{ $tc('commonUnits.room', resData.noOfRoom, {count: resData.noOfRoom})
                        }}</span>
                    x {{ $tc('dateUnit.nights', totalNights, {'count': totalNights}) }}
                    <span v-if="(resData.breakfast || resData.mattress)" class="extra-note">
						{{
                      $t('components.card.roomSummaryCard.mattressAndBreakfast',
                          {
                            'mattress': $tc('commonUnits.mattress', resData.mattress, {'count': resData.mattress}),
                            'breakfast': $tc('commonUnits.breakfast', resData.breakfast, {'count': resData.breakfast})
                          })
                        }}
					</span>
                </p>
                <p class="total-cost">{{ totalCost }} MYR</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'room-summary-card',
    props: {
      resData: this.item,
      totalNights: {type: Number},
      showNoOfRoom: false
    },
    data () {
      return {
        counter: 0,
        show: false,
        imageSrc: this.resData.cover_image || '/static/img/demo-room.jpg'
      }
    },
    computed: {
      totalCost: function () {
        let breakfast = (this.resData.breakfast) ? this.resData.breakfast * 12 * this.totalNights : 0
        let mattress = (this.resData.mattress) ? this.resData.mattress * 18 * this.totalNights : 0
        if (this.showNoOfRoom) {
          return (this.resData.price * this.totalNights * this.resData.noOfRoom) + breakfast + mattress
        }
        return (this.resData.price * this.totalNights) + breakfast + mattress
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
    @import '../../assets/style/setting';

    .room-summary {
        margin-bottom: 3.5rem;
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
        .content-group {
            &:first-of-type {
                margin-bottom: 2rem;
            }
            & > h3 {
                margin: 0;
                text-transform: uppercase;
            }
            .num-of-rooms {
                float: right;
                &:before {
                    content: 'x';
                    margin-right: 0.5rem;
                }
            }
            &:after {
                content: '';
                display: block;
                clear: both;
            }

            .price-and-nights {
                float: left;
                &:before {
                    content: '$';
                    margin-right: 0.25rem;
                }
                .extra-note {
                    display: block;
                }
            }
            .total-cost {
                float: right;
                &:before {
                    content: '$';
                    margin-right: 0.25rem;
                }
            }
        }
    }
</style>