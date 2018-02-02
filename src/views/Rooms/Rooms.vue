<template>
	<div class="container" id="rooms">
		<section class="mt-5 py-5">
			<div class="row mb-5">
				<div class="col-xs-12">
					<content-title :contentTitle="$t('pages.rooms.pageTitle')"></content-title>
					<content-paragraph :contentParagraph="$t('pages.rooms.pageIntro')"></content-paragraph>
				</div>
			</div>

			<section class="details-wrapper pb-5">
				<div class="row border-bottom" v-for="(item, index) in roomTypes">
					<div class="col-sm-6 col-xs-12">
						<div class="image-wrapper">
							<img :src="item.cover_image"/>
						</div>
					</div>
					<div class="col-sm-6 col-xs-12">
						<h3>{{ item['name_' + $i18n.locale] }} <span>{{item['room_title_' + $i18n.locale]}}</span></h3>
						<h4 v-if="item['room_subtitle_' + $i18n.locale]">{{item['room_subtitle_' + $i18n.locale]}}</h4>
						<h5>${{item.price}} MYR {{$t('components.card.roomCard.withBreakfast')}}</h5>
						<p>{{ item['size_' + $i18n.locale] }}</p>
						<ul class="icon-list">
							<li class="icon-row">
								<span class="icon icon-guest"></span>
								<span v-if="!item.add_bed">{{ $tc('components.card.roomCard.guests', item.capacity, {count: item.capacity})}} </span>
								<span v-else>{{ $tc('components.card.roomCard.guests', item.capacity, {count: item.capacity})}} {{$t('components.card.roomCard.addMattressRemarks', {count: item.capacity + 1})}}</span>
							</li>
							<li class="icon-row" v-if="item.queen_bed">
								<span class="icon icon-queen-bed"></span>
								<span>{{$tc('components.card.roomCard.queenBed', item.queen_bed, {count: item.queen_bed})}}</span>
							</li>
							<li class="icon-row" v-if="item.bunk_bed">
								<span class="icon icon-bunk-bed"></span>
								<span>{{$tc('components.card.roomCard.bunkBed', item.bunk_bed, {count: item.bunk_bed})}}</span>
							</li>
							<li class="icon-row" v-if="item.add_bed">
								<span class="icon icon-mattress"></span>
								<span>{{$t('components.card.roomCard.extraMattress')}} *</span>
							</li>
							<li class="icon-row">
								<span class="icon icon-breakfast"></span>
								<span>{{$t('components.card.roomCard.extraBreakfast')}}</span>
							</li>
						</ul>
						<p v-if="item.add_bed">* {{ $t('pages.rooms.additionalCost') }}</p>
						<button class="btn btn-main" @click="showDetails(index)">
							<span v-if="show[index]">{{$t('button.hideDetails')}}</span>
							<span v-else>{{$t('button.moreDetails')}}</span>
						</button>
						<collapse class="mt-4" v-model="show[index]">
							<div class="description" style="margin-bottom: 0">
								<h5>{{ $t('components.card.roomCard.description') }}</h5>
								<p>{{ item['description_' + $i18n.locale] }}</p>

								<h5>{{ $t('components.card.roomCard.amenities') }}</h5>
								<icon-list :icons="amenities"></icon-list>

								<h5>{{ $t('components.card.roomCard.resortPolicy') }}</h5>
								<p><span>{{ $t('components.card.roomCard.resortPolicyContent') }}</span>
									<router-link :to="{ name: 'Policy' }" target="_blank">{{ $t('components.card.roomCard.resortPolicyRoute') }}
									</router-link>
								</p>
							</div>
						</collapse>
					</div>
				</div>
				<div class="row mt-5 mx-0">
					<div class="co-xs-12 text-right">
						<router-link :to="{ name: 'Reservations' }" class="btn btn-main">{{ $t("button.bookNow") }}</router-link>
					</div>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import RoomTypeCard from '@/components/card/RoomTypeCard.vue'
  import IconList from '@/components/list/IconList.vue'

  export default {
    name: 'RoomDetail',
    components: {
      IconList,
      RoomTypeCard,
      ContentTitle,
      ContentParagraph
    },
    data () {
      return {
        imageSrc: 'http://placehold.it/2000x1000',
        selected: 1,
        roomTypes: {},
        show: [],
        amenities: []
      }
    },
    created: function () {
      this.axios.get(process.env.API_URL + '/api/room-type').then((response) => {
        this.roomTypes = response.data
        _.forEach(this.roomTypes, () => {
          this.show.push(false)
        })
      }, (error) => {
        console.log(error)
      })
      this.axios.get(process.env.API_URL + '/api/amenities').then((response) => {
        this.amenities = response.data
      }, (error) => {
        console.log(error)
      })
    },
    methods: {
      showDetails (index) {
        if (this.show[index]) {
          this.$set(this.show, index, false)
        } else {
          this.show = this.show.map((v, i) => i === index)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.room-select {
		& > div {
			padding-top: 4rem;
			padding-bottom: 4rem;
			&:first-of-type {
				padding-right: 4rem;
				border-right: 1px solid $light-grey;
			}
			&:last-of-type {
				padding-left: 4rem;
			}
		}
	}

	.image-wrapper {
		& > img {
			width: 100%;
			height: auto;
		}
	}

	.details-header {
		color: $brand-secondary;
		ol {
			display: inline-block !important;
			list-style-type: none;
			padding-left: 0;
			& > li {
				display: inline-block;
				button {
					font-size: 2rem;
					text-transform: uppercase;
					opacity: 0.6;
					transition: opacity 150ms linear;
					span {
						font-size: 1.5rem;
					}
					&:hover, &:focus, &:active {
						color: $brand-secondary;
						opacity: 1;
					}
					&.active {
						opacity: 1;
						font-weight: bold;
						outline: none;
						box-shadow: none;
					}
				}
				&:not(:first-of-type) {
					border-left: 1px solid $light-grey;
				}
			}
			&:after {
				content: '';
				display: block;
				clear: both;
			}
			@media screen and (max-width: 768px) {
				display: flex;
				& > li {
					button {
						font-size: 1.5rem;
						width: 100%;
						padding: 6px;
						span {
							font-size: 1rem;
							width: 100%;
							white-space: pre-wrap;
						}
					}
				}
			}
		}
	}

	.details-wrapper {
		text-align: left;
		color: $brand-secondary;
		h3 {
			margin: 0.5em 0 0;
			font-size: 2em;
			font-weight: bold;
			text-transform: uppercase;
			span {
				font-weight: 400;
				display: block;
			}
		}
		h4 {
			margin: 0;
			font-size: 1.1em;
		}
		h5 {
			margin: 0.5em 0 0;
			font-size: 1.75em;
			@media screen and (max-width: 767px) {
				font-size: 1.35em;
			}
		}
		p {
			margin-bottom: 0.75em;
			a {
				color: $brand-secondary;
				text-decoration: underline;
				&:hover, &:focus {
					color: $brand-primary;
				}
			}
		}
		.icon-list {
			display: table;
			margin-bottom: 1.5rem;
			.icon-row {
				display: table-row;
				span {
					display: table-cell;
					vertical-align: middle;
				}
				.icon {
					width: 2.5rem;
				}
				.fit-content {
					width: 1%;
					padding: 0 2px; /* just some padding, if needed*/
					white-space: pre;
				}
				.big-cell {
					padding-right: 3rem;
				}
			}
			@media screen and (max-width: 767px) {
				margin-bottom: 1rem;
				.icon-row {
					.icon {
						display: inline-block;
						width: 3rem;
						margin-right: 1rem;
					}
				}
			}
		}

		ul {
			list-style-type: none;
			& > li {
				color: $brand-secondary;
				& > p {
					color: $brand-primary;
					font-style: italic;
				}
			}
			&.icon-list {
				list-style-type: none;
				padding-left: 0;
				& > li {
					@media screen and (min-width: 768px) {
						display: inline-block;
						&:not(:last-of-type) {
							margin-right: 2rem;
						}
						&:after {
							content: '';
							display: block;
							clear: both;
						}
					}
					margin-bottom: 0.5rem;
				}
			}
		}
		.description {
			padding: 2rem;
			background-color: #f5f5f5;
			@media screen and (max-width: 767px) {
				padding: 1.5rem;
			}
			h5 {
				margin: 3rem 0 1rem;
				font-weight: bold;
				&:first-of-type {
					margin-top: 0;
				}
			}
		}
		.border-bottom {
			margin-bottom: 2.5em;
			padding-bottom: 2.5em;
			border-bottom: 1px solid $brand-primary;
		}
	}

	.btn-main {
		font-size: 1.15em;
		text-transform: uppercase;
	}
</style>

<style lang="scss">
	@import '../../../node_modules/slick-carousel/slick/slick';
	@import '../../assets/style/setting';

	.slick-slider {
		.slick-slide {
			button {
				border: none;
				padding: 0;
				&:hover, &:focus, &:active {
					outline: none;
					box-shadow: none;
				}
				img {
					width: 100%;
					height: auto;
				}
			}
		}
		.slick-arrow {
			position: absolute;
			top: 50%;
			height: 28px;
			width: 28px;
			padding: 5px 0;
			background: white;
			color: $brand-primary;
			border: 1px solid $brand-primary;
			border-radius: 50%;
			transform: translateY(-50%);
			transition: color 150ms linear, background-color 150ms linear;
			z-index: 1;
			&.slick-prev {
				left: -1rem;
			}
			&.slick-next {
				right: -1rem;
			}
			&:hover, &:focus, &:active {
				background-color: $brand-primary;
				color: white;
			}
		}
	}

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
