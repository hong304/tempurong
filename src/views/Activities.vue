<template>
	<div id="activities">
		<content-title :contentTitle="titleOne"></content-title>
	</div>
</template>

<script>
  import ContentTitle from '../components/paragraph/ContentTitle.vue'

  export default {
    name: 'Activities',
    components: {
      ContentTitle
    },
    data () {
      return {
        titleOne: 'Activities'
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
