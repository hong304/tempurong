<template>
	<div class="activity-card">
		<div class="card-body mt-5">
			<div class="row">
				<div class="col-xs-12 col-sm-4">
					<div class="row image-thumbnail">
						<div v-for="(item, index) in resData.images"
								 :class="{ 'col-xs-12': item.cover_image, 'col-xs-6 mt-3': !item.cover_image }">
							<img :src="item.cover_image || item.image_path" :alt="resData['name_' + $i18n.locale]"/>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-8">
					<div class="activity-detail">
						<h2>{{ resData['name_' + $i18n.locale] }}</h2>
						<h4 v-if="resData.subtitle_en">({{ resData['subtitle_' + $i18n.locale] }})</h4>
						<ul class="mt-3">
							<li class="icon-group">
								{{ $t('pages.activities.difficulties') }}
								<span v-for="item in points">
									<icon v-if="item == 1" name="star"></icon>
									<icon v-if="item == 0.5" name="star-half-empty"></icon>
									<icon v-if="item == 0" name="star-o"></icon>
								</span>
							</li>
						</ul>
					</div>
					<p v-html="resData['description_' + $i18n.locale]"></p>
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
      resData: {type: Object}
    },
    data () {
      return {}
    },
    computed: {
      points: function () {
        let array = []
        for (let i = 0; i < 5; i++) {
          let res = this.resData.difficulty - i
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
			font-size: 3.5rem;
			margin: 0;
			@media screen and (max-width: 767px) {
				font-size: 3.5rem;
			}
		}
		h4 {
			font-size: 2.25rem;
			margin: 0;
			@media screen and (max-width: 767px) {
				font-size: 2rem;
			}
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