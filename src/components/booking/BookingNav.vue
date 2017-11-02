<template>
    <section>
        <div>
            <HotelDatePicker :startDate="new Date()"/>
        </div>
    </section>
</template>

<script>
  import HotelDatePicker from 'vue-hotel-datepicker'

  export default {
    components: {
      'HotelDatePicker': HotelDatePicker
    },
    data () {
      return {
      }
    }
  }
</script>
