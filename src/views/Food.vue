<template>
	<div id="food">
		<content-title :contentTitle="$t('pages.food.pageTitle')"></content-title>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'

  export default {
    name: 'Food',
    components: {
      ContentTitle
    },
    data () {
      return {
        titleOne: 'Food'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
