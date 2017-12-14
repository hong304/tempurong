<template>
	<div class="room-square">
		<div class="image-wrapper">
			<img :src="roomType.cover_image"/>
		</div>
		<div class="overlay-wrapper">
			<div class="content-wrapper">
				<h3>{{ roomType['name_' + $i18n.locale] }}</h3>
				<h5>{{ roomType['room_title_' + $i18n.locale]}}</h5>
			</div>
			<router-link :to="{ name: 'Rooms' }" class="btn btn-text-only">
				{{ $t("button.moreDetails") }} >
			</router-link>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'room-square-card',
    props: {
      roomType: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.room-square {
		position: relative;
		.image-wrapper {
			overflow: hidden;
			img {
				width: 100%;
				height: auto;
				transition: transform 250ms ease-Out;
			}
		}
		.overlay-wrapper {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.35);
			color: white;
			text-align: center;
			transition: background-color 250ms linear;
			.content-wrapper {
				position: absolute;
				width: 100%;
				top: 50%;
				transform: translateY(-50%);
				opacity: 0.75;
				transition: opacity 250ms linear;
				h3, h5 {
					margin: 0;
				}
				h3 {
					text-transform: uppercase;
				}
			}
			a {
				position: absolute;
				bottom: 0;
				left: 50%;
				opacity: 0;
				color: $brand-primary;
				transform: translateX(-50%);
				transition: opacity 250ms linear, color 250ms linear;
			}
		}
		&:hover, &:focus {
			.image-wrapper {
				img {
					transform: scale(1.15);
				}
			}
			.overlay-wrapper {
				background-color: rgba(0, 0, 0, 0.65);
				.content-wrapper {
					opacity: 1;
				}
				a {
					opacity: 1;
					&:hover, &:focus {
						color: white;
					}
				}
			}
		}
	}
</style>