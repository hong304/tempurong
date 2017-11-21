<template>
	<div class="type-card">
		<div class="image-wrapper">
			<img :src="imageSrc"/>
		</div>
		<div class="type-info">
			<h3>{{typeName}}</h3>
			<p>{{typeIntro}}</p>
			<div class="type-detail my-5">
				<span v-for="(item, index) in typeDetail">
					<h3>{{item.numberOfRooms}}</h3>
					<h5>{{item.nameOfRooms}}</h5>
				</span>
			</div>
			<button class="btn btn-main">{{ $t('button.moreDetails') }}</button>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'room-type-card',
    props: {
      resData: {
        type: Object,
        default: () => {
          return {
            imageSrc: '/static/img/demo-image-01.jpg',
            typeName: 'I\'m a sample title',
            typeIntro: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
            typeDetail: [
              {
                numberOfRooms: '0',
                nameOfRooms: 'name'
              }
            ],
            buttonPath: '#'
          }
        }
      }
    },
    data () {
      return {
        imageSrc: (this.resData.imageSrc) ? this.resData.imageSrc : '/static/img/demo-image-01.jpg',
        typeName: (this.resData.typeName) ? this.resData.typeName : 'I\'m sample title.',
        typeIntro: (this.resData.typeIntro) ? this.resData.typeIntro : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
        buttonPath: (this.resData.buttonPath) ? this.resData.buttonPath : '#'
      }
    },
    computed: {
      typeDetail: function () {
        if (this.resData.typeDetail) {
          return this.resData.typeDetail
        } else {
          return [
            {
              numberOfRooms: '0',
              nameOfRooms: 'name'
            }
          ]
        }
      }
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