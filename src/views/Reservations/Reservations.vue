<template>
  <div class="container" id="reservations">
    <section class="padding-of-section mt-5 py-3 py-sm-5">
      <div class="row mb-0 mb-sm-5">
        <div class="col-xs-12">
          <content-title
            v-if="!optionSelected"
            :contentTitle="$t('pages.reservations.pageTitle')"
            :contentSubTitle="$t('pages.reservations.pageSubtitle')"
          ></content-title>
          <content-title v-if="optionSelected"
                         :contentTitle="$t('pages.reservations.pageTitle2')"
                         :contentSubTitle="$t('pages.reservations.pageSubtitle')"
          ></content-title>
        </div>
      </div>
    </section>
    <div class="overlay-wrapper" v-if="!optionSelected && currentStartDate">
      <div class="overlay-options">
        <div class="picker-input">
          <HotelDatePicker class="custom-picker"
                           :checkIn="orderDetails.checkIn"
                           :checkOut="orderDetails.checkOut"
                           :startDate=currentStartDate
                           :i18n="defineDatePicker()"
                           v-on:checkInChanged="orderDetails.checkIn = $event"
                           v-on:checkOutChanged="orderDetails.checkOut = $event">
          </HotelDatePicker>
          <h5 class="error-message" v-if="errorDate"><span class="ti-alert"></span>
            {{ $t('error.noCheckInOut') }}
                    </h5>
          <div class="no-of-people">
            <span class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}}</span>
            <span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 0)" class="btn btn-minus"
                    :disabled="!orderDetails.adults"><span
              class="ti-minus"></span></button>
						<span class="counter-num">{{ orderDetails.adults }}</span>
						<button type="button" @click="changePeopleNumber('add', 0)" class="btn btn-plus"><span
              class="ti-plus"></span></button>
						</span>
          </div>

          <div class="no-of-people">
            <span class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}}</span>
            <span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 1)" class="btn btn-minus"
                    :disabled="!orderDetails.children"><span
              class="ti-minus"></span></button>
						<span class="counter-num">{{ orderDetails.children }}</span>
						<button type="button" @click="changePeopleNumber('add', 1)" class="btn btn-plus"><span
              class="ti-plus"></span></button>
						</span>
          </div>
          <h5 class="error-message" v-if="errorPeople"><span class="ti-alert"></span>
            {{ $t('error.noGuestSelected') }}</h5>

        </div>
        <button type="button" class="btn btn-main" @click="checkSelected">{{$t('button.submit')}}</button>
      </div>
    </div>

    <section class="pb-5" v-if="optionSelected">
      <div class="row py-5">
        <div class="col-md-8 col-xs-12">
          <div class="picker-input">
            <HotelDatePicker
              :startDate=currentStartDate
              :i18n="defineDatePicker()"
              v-on:checkInChanged="orderDetails.checkIn = $event"
              v-on:checkOutChanged="checkOutDate($event)"></HotelDatePicker>

            <div class="no-of-people">
              <span class="people-title">{{$t('components.booking.bookingSticky.adultTitle')}}</span>
              <span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 0)" class="btn btn-minus"
                    :disabled="!orderDetails.adults"><span
              class="ti-minus"></span></button>
						<span class="counter-num">{{ orderDetails.adults }}</span>
						<button type="button" @click="changePeopleNumber('add', 0)" class="btn btn-plus"><span
              class="ti-plus"></span></button>
						</span>
            </div>

            <div class="no-of-people">
              <span class="people-title">{{$t('components.booking.bookingSticky.childrenTitle')}}</span>
              <span class="controls">
						<button type="button" @click="changePeopleNumber('minus', 1)" class="btn btn-minus"
                    :disabled="!orderDetails.children"><span
              class="ti-minus"></span></button>
						<span class="counter-num">{{ orderDetails.children }}</span>
						<button type="button" @click="changePeopleNumber('add', 1)" class="btn btn-plus"><span
              class="ti-plus"></span></button>
						</span>
            </div>

            <h5 class="error-message" v-if="errorTotalGuest"><span class="ti-alert"></span>
              {{ $t('error.noGuestSelected') }}</h5>

          </div>
          <div v-for="(item, index) in orderDetails.roomObjects">
            <room-card :result="item" :index="index" :availableRooms="item.available_room"
                       :updated="updated"
                       v-on:roomUpdates="roomDataUpdate"></room-card>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <booking-sticky
            :isMobile="isMobile"
            :orderDetails="orderDetails"
          ></booking-sticky>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import ContentParagraph from '@/components/content/ContentParagraph.vue'
  import RoomCard from '@/components/card/RoomCard.vue'
  import BookingSticky from '@/components/booking/BookingSticky.vue'
  import HotelDatePicker from 'vue-hotel-datepicker'

  export default {
    components: {
      BookingSticky,
      RoomCard,
      ContentTitle,
      ContentParagraph,
      HotelDatePicker
    },
    name: 'Reservations',
    data () {
      return {
        bgImageSrc: '/static/img/demo-about-02.jpg',
        optionSelected: false,
        errorDate: false,
        errorPeople: false,
        rooms: [],
        errorTotalGuest: false,
        orderDetails: {
          checkIn: this.checkInFromHome || '',
          checkOut: this.checkOutFromHome || '',
          adults: this.adultsFromHome || 0,
          children: this.childrenFromHome || 0,
          totalPrice: 0,
          totalRooms: 0,
          totalGuests: 1,
          roomObjects: []
        },
        updated: Date()
      }
    },
    props: {
      isMobile: this.isMobile,
      checkInFromHome: {},
      checkOutFromHome: {},
      adultsFromHome: {},
      childrenFromHome: {}
    },
    computed: {
      currentStartDate () {
        return this.$store.getters.getterStartDate || null
      }
    },
    methods: {
      checkSelected: function () {
        // use to check the first step of input in reservation page
        // check the check in out date first
        if (this.orderDetails.checkIn !== '' && this.orderDetails.checkOut !== '') {
          // check how many guest are there
          if (this.orderDetails.adults > 0 || this.orderDetails.children > 0) {
            this.orderDetails.checkIn = this.$moment(this.orderDetails.checkIn).format('YYYY-MM-DD')
            this.orderDetails.checkOut = this.$moment(this.orderDetails.checkOut).format('YYYY-MM-DD')
            this.optionSelected = true
            this.getAvailableRooms()
            this.errorPeople = false
          } else {
            this.errorPeople = true
          }
          this.errorDate = false
        } else {
          this.errorDate = true
        }
      },
      roomDataUpdate: function (val) {
        this.orderDetails.roomObjects[val.index] = val

        // calculating the total price
        let price = 0
        let night = this.totalNights()

        this.orderDetails.roomObjects.forEach(function (item) {
          if (item.noOfRoom) {
            let breakfast = (item.breakfast) ? item.breakfast * 12 * night : 0
            let mattress = (item.mattress) ? item.mattress * 18 * night : 0
            price = price + (item.price * item.noOfRoom * night) + breakfast + mattress
          } else {
            item.breakfast = 0
            item.mattress = 0
            item.noOfRoom = 0
          }
        })

        this.orderDetails.totalPrice = price

        // variable for calculating the total rooms
        let calculated = 0
        let result = _.map(this.orderDetails.roomObjects, 'noOfRoom')

        // calculating total rooms
        _.forEach(result, function (value, key) {
          if (typeof value !== 'undefined') {
            calculated += value
          }
        })
        this.orderDetails.totalRooms = calculated
      },
      defineDatePicker: function () {
        if (typeof this.orderDetails.checkIn !== 'undefined' && this.orderDetails.checkIn.length > 0) {
          let datePickerI18n = this.$i18n.getLocaleMessage(this.$i18n.locale).datePicker
          datePickerI18n['check-in'] = this.orderDetails.checkIn
          datePickerI18n['check-out'] = this.orderDetails.checkOut
          return datePickerI18n
        }
        return this.$i18n.getLocaleMessage(this.$i18n.locale).datePicker
      },
      getAvailableRooms: function () {
        this.axios.post(process.env.API_URL + '/api/checkAvailableRooms', {
          checkIn: this.orderDetails.checkIn,
          checkOut: this.orderDetails.checkOut,
          withRoomDetails: true
        }).then((response) => {
          this.orderDetails.roomObjects = response.data
        }, (error) => {
          console.log(error)
        })
      },
      checkOutDate: function (date) {
        this.orderDetails.checkIn = this.$moment(this.orderDetails.checkIn).format('YYYY-MM-DD')
        this.orderDetails.checkOut = this.$moment(date).format('YYYY-MM-DD')
        this.getAvailableRooms()
        this.orderDetails.totalRooms = 0
        this.orderDetails.totalPrice = 0
        this.updated = Date()
      },
      changePeopleNumber (type, people) {
        if (type === 'minus') {
          people ? this.orderDetails.children-- : this.orderDetails.adults--
          if (!(this.orderDetails.adults + this.orderDetails.children)) {
            this.errorTotalGuest = true
            people ? this.orderDetails.children += 1 : this.orderDetails.adults += 1
          }
        } else if (type === 'add') {
          people ? this.orderDetails.children++ : this.orderDetails.adults++
          this.errorTotalGuest = false
        }
        this.orderDetails.totalGuests = this.orderDetails.children + this.orderDetails.adults
      },
      totalDays: function () {
        let i = this.$moment(this.orderDetails.checkIn)
        let o = this.$moment(this.orderDetails.checkOut)
        let days = o.diff(i, 'days') + 1
        return days
      },
      totalNights: function () {
        return this.totalDays() - 1
      }
    },
    mounted: function () {
      // check if there is order details in local storage
      let defaultOrderDetails = JSON.stringify(this.orderDetails)
      this.orderDetails = JSON.parse(this.$localStorage.get('orderDetails', defaultOrderDetails))
      // after getting data from local storage, remove the local storage variable
      this.$localStorage.remove('orderDetails')
      this.$localStorage.remove('orderContact')

      // if check in date exists, show room type details
      if (this.orderDetails.checkIn.length > 0) {
        this.optionSelected = true
      }

      // if check in date exists but not roomObjects => data comes from home page
      // so, fetch room type data
      if (this.orderDetails.checkIn.length > 0 && this.orderDetails.roomObjects.length <= 0) {
        this.checkSelected()
      }
    },
    created () {
      this.$store.dispatch('getStartDate')
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style/setting';

  .overlay-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    background-color: white;
    min-height: 30vh;
    .overlay-options {
      flex: 0 1 auto;
      align-self: center;
      display: inline-block;
      padding: 2.5rem;
      @media screen and (max-width: 767px) {
        padding: 0;
      }
      .btn-main {
        padding: 0.75rem 3rem;
        border: 1px solid #ECBE03;
        text-transform: uppercase;
        font-weight: bold;
        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }
    }
  }

  .picker-input {
    margin: 0 0 2rem;
    padding-bottom: 0;
    & > div {
      height: 40px;
      margin-bottom: 1rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      &.no-of-people {
        display: inline-block;
        min-height: 27px;
        width: calc(50% - 0.75rem);
        padding: 0.5rem 1.5rem;
        border: 1px solid $light-grey;
        border-radius: 5px;
        color: $brand-secondary;
        background-color: white;
        @media screen and (max-width: 767px) {
          width: 100%;
          margin-top: -0.5rem;
        }
        &:last-of-type {
          margin: 0 0 0 1rem;
          @media screen and (max-width: 767px) {
            margin: 0;
          }
        }
        .people-title {
          line-height: 27px;
          margin-right: 0.5rem;
        }
        .controls {
          .btn-minus, .btn-plus {
            background-color: transparent;
            color: $brand-primary;
            width: 25px;
            height: 25px;
            border: 1px solid $brand-primary;
            border-radius: 50%;
            padding: 0;
            line-height: 25px;
            font-size: 15px;
            vertical-align: middle;
            outline: none;
          }
        }
      }
    }
  }

</style>
<style lang="scss">
  @import '../../assets/style/setting';

  .picker-input {
    margin: 0 0 1rem;
    padding-bottom: 2rem;
    .datepicker__wrapper {
      height: 40px;
      background-color: transparent;
      background-image: url('../../assets/img/calendar-brand-sec.svg');
      .datepicker__dummy-wrapper {
        border-color: $light-grey;
        border-radius: 5px;
        .datepicker__dummy-input {
          height: 40px;
          color: $brand-secondary;
          cursor: pointer;
          &::placeholder {
            color: $brand-secondary;
          }
          &:first-child {
            background-image: url('../../assets/img/arrow-brand-sec.svg')
          }
        }
      }
      &.custom-picker {
        border-radius: 5px;
        border: 1px solid $light-grey;
        background-color: white;
        .datepicker__dummy-wrapper {
          border: none;
          border-radius: 0;
        }
      }
      .datepicker__clear-button {
        color: $brand-secondary;
        margin: 0 -2px 0 0;

      }
    }
  }

  .datepicker {
    top: 40px;
  }

  .datepicker__month-day {
    cursor: pointer;
  }

</style>
