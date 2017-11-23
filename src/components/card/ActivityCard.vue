<template>
	<div class="activity-card">
		<div class="card-header">
			<h2>{{ resData.activityTitle }}</h2>
			<h4>({{ resData.activitySubTitle }})</h4>
		</div>
		<div class="card-body mt-5">
			<div class="row">
				<div class="col-xs-12 col-sm-4">
					<div class="row image-thumbnail">
						<div v-for="(item, index) in resData.images" :class="{ 'col-xs-12': !index, 'col-xs-6 mt-3': index }">
							<img :src="item.imageSrc" :alt="item.imageAlt"/>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-8">
					<div class="activity-detail">
						<ul>
							<li><span class="ti-time"></span> {{ resData.tourDuration }} mins</li>
							<li><span class="walking-distance"></span> {{ resData.walkingDistance }}m from resort</li>
							<li class="icon-group">
								Difficulties
								<span v-for="item in points">
									<icon v-if="item == 1" name="star"></icon>
									<icon v-if="item == 0.5" name="star-half-empty"></icon>
									<icon v-if="item == 0" name="star-o"></icon>
								</span>
							</li>
						</ul>
					</div>
					<p>
						Pulau Tiga is an island off the coast of Borneo that is most well known as “Survivor Island”, as it was the location where the debut season of Survivor was filmed. On this day trip you will travel to the beautiful waters off the coast of the island for swimming and snorkeling. Marvelous sights of giant clams, families of tropical fish, and other beautiful ocean life are common amongst the coral reefs. You will also have the option of dipping into the volcano mud baths of Pulau Tiga, which are located just a 20-minute hike inland from the island’s shore, and offer a fun experience said to be good for the skin. Be sure to bring footwear that you won’t mind getting muddy if you opt for the hike.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/star-half-empty'
  import 'vue-awesome/icons/star-o'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    components: {
      Icon
    },
    name: 'activity-card',
    props: {
      resData: {
        type: Object,
        default: function () {
          return {
            'activityTitle': 'Pulau Tiga Day Trip',
            'activitySubTitle': 'Snorkeling and Volcano Mud Bath',
            'images': [
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-01'
              },
              {
                'imageSrc': '/static/img/demo-about-02.jpg',
                'imageAlt': 'image-02'
              },
              {
                'imageSrc': '/static/img/demo-about-01.jpg',
                'imageAlt': 'image-03'
              }
            ],
            'tourDuration': 30,
            'walkingDistance': 30,
            'difficulties': 3.5
          }
        }
      }
    },
    data () {
      return {}
    },
    computed: {
      points: function () {
        let array = []
        for (let i = 0; i < 5; i++) {
          let res = this.resData.difficulties - i
          if (res > 0) {
            if (res < 1) {
              // if res have 0.5 point
              array[i] = 0.5
            } else {
              array[i] = 1
            }
          } else {
            array[i] = 0
          }
        }
        return array
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.activity-card {
		color: $brand-secondary;
		text-align: left;
		border-bottom: 2px solid $brand-primary;
		margin-bottom: 5rem;
		padding-bottom: 5rem;
		h2 {
			text-transform: uppercase;
			font-weight: bold;
			font-size: 5rem;
			margin: 0;
		}
		h4 {
			font-size: 3rem;
			margin: 0;
		}
		ul {
			list-style-type: none;
			padding-left: 0;
			font-size: 2rem;
			.ti-time {
				font-size: 1.75rem;
			}
		}
	}

	.image-thumbnail {
		.col-xs-6 {
			padding-right: 0.5rem;
			&:last-of-type {
				padding-left: 0.5rem;
				padding-right: 15px;
			}
		}
	}

	.card-body {
		img {
			width: 100%;
			height: auto;
		}
	}

	.icon-group {
		display: inline-block;
		& > span {
			& > svg {
				bottom: 0;
			}
		}
	}

	.walking-distance {
		position: relative;
		margin-right: 2.5rem;
		&:before {
			content: '';
			position: absolute;
			display: inline-block;
			top: 0.4rem;
			width: 1.75rem;
			height: 1.75rem;
			background-image: url(../../assets/img/icon/walk.png);
			background-size: cover;
		}
	}
</style>