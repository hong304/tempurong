<template>
	<div class="room-summary row">
		<div class="image-thumb-wrapper col-sm-3 col-xs-12">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper col-sm-9 col-xs-12">
			<div class="content-group">
				<h3 class="room-type">{{ roomType }}</h3>
				<h3 class="num-of-rooms">{{ noOfRoom }}</h3>
			</div>
			<div class="content-group">6 guests</div>
			<div class="content-group">
				<p class="price-and-nights">{{ price }} MYR <span v-if="totalRooms">x {{ totalRooms }} rooms</span>
					x {{ totalNights }} nights <span v-if="addExtra" class="extra-note">(including {{ extraMattress
						}} extra mattress and {{ extraBreakfast }} breakfast)</span></p>
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
      totalNights: {type: Number}
    },
    data () {
      return {
        counter: 0,
        show: false,
        imageSrc: this.resData.imageSrc || '/static/img/demo-room.jpg',
        roomType: this.resData.roomType || 'Large Room',
        noOfRoom: this.resData.noOfRoom || 0,
        price: this.resData.price || 250,
        totalNight: this.resData.totalNight || 0,
        totalRooms: this.resData.totalRooms || 0,
        addExtra: this.resData.add_bed || false,
        extraMattress: this.resData.mattress || 0,
        extraBreakfast: this.resData.breakfast || 0
      }
    },
    computed: {
      totalCost: function () {
        return this.resData.price * this.resData.noOfRoom * this.totalNights
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