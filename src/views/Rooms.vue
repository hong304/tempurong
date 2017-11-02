<template>
	<div id="rooms">
		<intro-section :introTitle="introTitle"></intro-section>
	</div>
</template>

<script>
  import IntroSection from '../components/paragraph/IntroParagraph.vue'

  export default {
    name: 'Rooms',
    components: {IntroSection},
    data () {
      return {
        introTitle: 'Rooms'
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
