<template>
    <div class="card">
        <div class="image-wrapper">
            <img :src="imageSrc"/>
        </div>
        <div class="info-wrapper">
            <h3>{{ cardTitle }}</h3>
        </div>
    </div>
</template>

<script>
  import { baseImageUrl } from '@/config'

  export default {
    name: 'card',
    props: {
      imageSrc: {
        type: String,
        default: function () {
          return baseImageUrl + 'demo-image-01.jpg'
        }
      },
      cardTitle: {
        type: String,
        default: function () {
          return 'I\'m a sample title'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../assets/style/setting';
</style>