<template>
	<div class="rooom-card row">
		<div class="image-thumb-wrapper col-md-5 col-xs-12">
			<img :src="imageSrc"/>
		</div>
		<div class="info-wrapper col-md-7 col-xs-12">
			<div class="content-wrapper">
				<h3>{{ infoTitle }}</h3>
				<h4>{{ infoPrice }}</h4>
				<ul class="icon-list">
					<li></li>
				</ul>
				<div class="rooms-extra">
					<div><multiselect
							v-model="selected"
							:options="options"
							:searchable="false"
							:close-on-select="true"
							:showLabels="false"
					></multiselect></div>
					<div>
						extra mattress with breakfast (MYR30 per night)<br>
						<span>*max 1 extra mattress per room</span>
					</div>
				</div>
				<div class="rooms-footer">
					<span>
						{{ availableRooms }} rooms available |
						<button type="button" @click="show=!show" class="btn btn-text-only">{{ buttonText }}</button>
					</span>
					<span class="rooms-number">
						<button type="button" @click="counter -= 1" class="btn btn-minus" :disabled="!counter">-</button>
						<span class="counter-num">{{ counter }}</span>
						<button type="button" @click="counter += 1" class="btn btn-plus">+</button>
					</span>
				</div>
			</div>
			<collapse v-model="show">
				<div class="well" style="margin-bottom: 0">
					<h5>The Room</h5>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<h5>Amenities</h5>
					<ul class="icon-list">
						<li></li>
					</ul>
					<h5>House Rules</h5>
					<ul class="info-list">
						<li></li>
					</ul>
					<h5>Cancellations</h5>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					<h5>Safety features</h5>
					<ul class="info-list">
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
      imageSrc: {
        type: String,
        default: function () {
          return '/static/img/demo-room.jpg'
        }
      },
      infoTitle: {
        type: String,
        default: function () {
          return 'Default title'
        }
      },
      infoPrice: {
        type: String,
        default: function () {
          return '1,999'
        }
      },
      selected: {
        type: Number,
        default: function () {
          return 0
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
        counter: 0
      }
    }
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
				& > div {
					display: inline-block;
					line-height: 20px;
					&:first-of-type {
						float: left;
					}
					&:last-of-type {
						& > span {
							color: $brand-primary;
							font-style: italic;
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
			font-size: 30px;
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