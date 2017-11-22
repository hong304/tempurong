<template>
	<div class="type-card">
		<div class="image-wrapper">
			<img :src="imageSrc"/>
		</div>
		<div class="type-info">
			<h3>{{resData.name_en}}</h3>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
			<div class="type-detail my-5">
				<span v-for="(item, index) in typeDetail">
				<h3>{{item.totalRooms}}</h3>
				<h5>{{item.nameOfRooms}}</h5>
				</span>
			</div>
			<router-link :to="{ name: 'RoomDetail', params: { type: this.resData.id }}" class="btn btn-main">{{ $t('button.moreDetails') }}</router-link>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'room-type-card',
    props: {
      resData: {}
    },
    data () {
      return {
        imageSrc: '/static/img/demo-image-01.jpg'
      }
    },
    computed: {
      typeDetail: function () {
        if (this.resData) {
          return [
            {
              totalRooms: (this.resData.room).length,
              nameOfRooms: 'Family Rooms'
            }
          ]
        }
      }
    },
    mounted: function () {
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.type-card {
		color: $brand-secondary;
		h3 {
			text-transform: uppercase;
		}
		h3 {
			font-weight: bold;
		}
	}

	.image-wrapper {
		& > img {
			width: 100%;
		}
	}

	.type-info {
		p {
			margin-bottom: 0;
		}
	}

	.type-detail {
		h3 {
			font-size: 5rem;
			font-weight: 400;
		}
		h3, h5 {
			margin: 0;
			text-transform: uppercase;
		}
	}

	.btn-main {
		text-transform: uppercase;
	}

</style>