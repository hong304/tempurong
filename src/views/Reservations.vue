<template>
	<div class="container" id="reservations">
		<section class="my-5 pt-5">
			<div class="row">
				<div class="col-xs-12">
					<content-title :contentTitle="titleOne"></content-title>
					<content-paragraph></content-paragraph>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import ContentTitle from '../components/content/ContentTitle.vue'
  import ContentParagraph from '../components/content/ContentParagraph.vue'

  export default {
    components: {
      ContentTitle,
      ContentParagraph
    },
    name: 'Book',
    data () {
      return {
        titleOne: 'Reservations'
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
