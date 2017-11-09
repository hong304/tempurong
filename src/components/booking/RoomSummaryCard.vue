<template>
	<div class="room-summary row">
		<div class="image-thumb-wrapper col-md-3 col-xs-12">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper col-md-9 col-xs-12">
			<div class="content-group">
				<h3 class="room-type">{{ infoTitle }}</h3>
				<h3 class="num-of-rooms">{{ numberOfRoom }}</h3>
			</div>
			<div class="content-group">6 guests</div>
			<div class="content-group">
				<p class="price-and-nights">{{ priceOfRoom }} MYR <span v-if="totalRooms">x {{ totalRooms }} rooms</span>
					x {{ totalNight }} nights <span v-if="addExtra" class="extra-note">(including {{ totalExtraMattress
						}} extra mattress with breakfast)</span></p>
				<p class="total-cost">{{ totalCost }} MYR</p>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'room-summary-card',
    props: {
      resData: {
        type: Object,
        default: () => {
          return {
            imageSrc: '/static/img/demo-room.jpg',
            infoTitle: 'Large Room',
            numberOfRoom: 0,
            priceOfRoom: 274,
            totalNight: 0,
            totalRooms: 0,
            addExtra: false,
            totalExtraMattress: 0,
            totalCost: 0
          }
        }
      }
    },
    data () {
      return {
        counter: 0,
        show: false,
        imageSrc: (this.resData.imageSrc) ? this.resData.imageSrc : '/static/img/demo-room.jpg',
        infoTitle: (this.resData.infoTitle) ? this.resData.infoTitle : 'Large Room',
        numberOfRoom: (this.resData.numberOfRoom) ? this.resData.numberOfRoom : 0,
        priceOfRoom: (this.resData.priceOfRoom) ? this.resData.priceOfRoom : 274,
        totalNight: (this.resData.totalNight) ? this.resData.totalNight : 0,
        totalRooms: (this.resData.totalRooms) ? this.resData.totalRooms : 0,
        addExtra: (this.resData.addExtra) ? this.resData.addExtra : false,
        totalExtraMattress: (this.resData.totalExtraMattress) ? this.resData.totalExtraMattress : 0,
        totalCost: (this.resData.totalCost) ? this.resData.totalCost : 0
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
				display: inline-block;
				margin: 0;
				text-transform: uppercase;
			}
			.room-type {
				float: left;
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