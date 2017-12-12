<template>
	<div class="food-card">
		<h3>{{ resData['name_' + $i18n.locale] }}</h3>
		<h5>{{ resData['subtitle_' + $i18n.locale] }}</h5>
		<img :src="resData.image_path"/>
		<p>{{ resData['description_' + $i18n.locale] }}</p>
	</div>
</template>

<script>
  export default {
    name: 'food-card',
    props: {
      resData: {
        type: Object,
        default: function () {
          return {
            title: 'Card Title',
            subtitle: 'Card Subtitle',
            imageSrc: 'http://placehold.it/500x500',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';

	.food-card {
		text-align: left;
		color: $brand-secondary;
		margin: 0 0 8rem ;
		h3 {
			font-weight: bold;
			text-transform: uppercase;
			font-size: 3.25rem;
			margin: 0;
		}
		h5 {
			font-size: 2rem;
			margin: 0;
		}
		img {
			max-width: 100%;
		}
	}
</style>