<template>
	<p v-html="contentParagraph"></p>
</template>

<script>
  export default {
    name: 'content-content',
    props: {
      contentParagraph: {
        type: String,
        default: () => {
          return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	@import '../../assets/style/setting';
	p {
		color: $brand-secondary;
		margin-bottom: 0;
	}
</style>