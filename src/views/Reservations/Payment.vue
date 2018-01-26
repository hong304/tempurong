<template>
    <div class="container" id="reservations-payment">
        <section class="mt-5 py-5">
            <div class="row">
                <div class="col-xs-12">
                    <content-title :contentTitle="$t('pages.reservationsContact.pageTitle')"></content-title>
                </div>
            </div>
        </section>
        <section class="py-5">
            <div class="row">
                <div class="col-xs-12">
                    <div class="payment-wrapper">
                        <div class="payment-header">
                            <p>{{$t('pages.reservationsContact.fillInContact')}}</p>
                        </div>
                        <div class="payment-body">
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">
                                    <input v-model="contact.firstName"
                                           name="firstName"
                                           v-bind:placeholder="$t('pages.reservationsContact.firstName') + ' *'">
                                </div>
                                <div class="col-sm-6 col-xs-12">
                                    <input v-model="contact.lastName"
                                           name="lastName"
                                           v-bind:placeholder="$t('pages.reservationsContact.lastName') + ' *'">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">
                                    <input v-model="contact.email"
                                           name="email"
                                           v-bind:placeholder="$t('pages.reservationsContact.email') + ' *'">
                                </div>
                                <div class="col-sm-6 col-xs-12">
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <input v-model="contact.countryCode"
                                                   name="countryCode"
                                                   v-bind:placeholder="$t('pages.reservationsContact.countryCode') + ' *'">
                                        </div>
                                        <div class="col-xs-8">
                                            <input v-model="contact.mobile"
                                                   name="mobile"
                                                   v-bind:placeholder="$t('pages.reservationsContact.mobile') + ' *'">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
									<textarea v-model="contact.remarks"
                                              name="remarks"
                                              v-bind:placeholder="$t('pages.reservationsContact.remarks')"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
									<textarea v-model="contact.additionalNote"
                                              name="additionalNote"
                                              v-bind:placeholder="$t('pages.reservationsContact.additionalNotes')"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <p>{{$t('pages.reservationsContact.tnc')}}</p>
                                    <input type="checkbox" id="tcAgree" v-model="contact.tnc">
                                    <label
                                            for="tcAgree" id="tnc"
                                            v-html="$t('pages.reservationsContact.tncCheckbox')"></label>
                                </div>
                            </div>
                            <h5 class="error-message" v-if="errors" v-for="item in errors.items">
                                <span class="ti-alert"></span>
                                {{ (item.rule == 'required' && item.field != 'tnc' ) ? $t('error.required', {field: $t('pages.reservationsContact.' + item.field)}) : $t('error.' + item.field)
                                }}
                            </h5>
                        </div>
                        <div class="payment-footer">
                            <!-- back button for editing the order details -->
                            <button class="btn btn-main pull-left" @click="goBackToReservation()">
                                <span class="ti-icon ti-pencil-alt"></span><span>{{$t('button.back')}}</span></button>

                            <button class="btn btn-main" @click="goToPreview()">
                                <span>{{$t('button.checkOut')}}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import ContentTitle from '@/components/content/ContentTitle.vue'
  import 'vue-awesome/icons/cc-paypal'
  import Icon from 'vue-awesome/components/Icon'
  import {Validator} from 'vee-validate'

  export default {
    components: {
      ContentTitle,
      Icon,
      Validator
    },
    name: 'reservations-payment',
    validator: null,
    data () {
      return {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '',
          mobile: '',
          remarks: '',
          additionalNote: '',
          tnc: ''
        },
        errMsg: false,
        errors: null
      }
    },
    methods: {
      goBackToReservation: function () {
        this.$router.push({name: 'Reservations'})
      },
      goToPreview: function () {
        this.validator.validateAll({
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          email: this.contact.email,
          countryCode: this.contact.countryCode,
          mobile: this.contact.mobile,
          tnc: this.contact.tnc
        }).then((result) => {
          if (result) {
            this.$localStorage.set('orderContact', JSON.stringify(this.contact))
            this.$router.push({name: 'ReservationSummary'})
          }
        })
      },
      clearErrors () {
        this.errors.clear()
      }
    },
    watch: {
      'contact.tnc': function (val) {
        if (!val) {
          this.contact.tnc = null
        }
      }
    },
    created () {
      if (!this.$localStorage.get('orderDetails')) {
        this.$router.push({name: 'Reservations'})
      }
      if (this.$localStorage.get('orderContact')) {
        this.contact = JSON.parse(this.$localStorage.get('orderContact'))
      }

      this.validator = new Validator({
        firstName: 'required',
        lastName: 'required',
        email: 'required|email',
        countryCode: 'required',
        mobile: 'required',
        tnc: 'required'
      })
      this.$set(this, 'errors', this.validator.errors)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/style/setting';

    .payment-wrapper {
        margin: 0 5rem;
        padding: 5rem;
        color: $brand-secondary;
        border: 1px solid $light-grey;
        text-align: left;
        h3 {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 0;
        }
        p {
            margin-top: 3rem;
            margin-bottom: 0;
            font-size: 2rem;
        }
        @media screen and (max-width: 991px) {
            margin: 0;
            padding: 2rem;
        }
    }

    .payment-header {
        text-transform: uppercase;
        margin-bottom: 3rem;
    }

    .payment-body {
        margin-bottom: 4rem;
        input, textarea {
            width: 100%;
            margin: 1.5rem 0;
            line-height: 3rem;
            border: none;
            border-bottom: 1px solid $brand-primary;
            @media screen and (max-width: 467px) {
                margin: 0.75rem 0;
            }
            &:hover, &:focus, &:active {
                outline: none !important;
                box-shadow: none !important;
                border-bottom-color: $brand-secondary;
            }
            &::placeholder {
                color: $light-grey;
            }
        }
        input[type=checkbox] {
            width: auto;
            margin-top: 0;
            @media screen and (max-width: 467px) {
                margin: 0;
            }
        }
        textarea {
            resize: none;
        }
        label {
            font-weight: 400;
            &#tnc {
                cursor: pointer;
            }
        }
    }

    .payment-footer {
        text-align: right;
        h3 {
            margin-bottom: 1.5rem;
        }
        .total-price {
            &:before {
                content: '$';
                margin-right: 0.5rem;
            }
        }
        @media screen and (max-width: 320px) {
            button {
                display: block;
                width: 100%;
                &:not(:first-of-type) {
                    margin-top: 1rem;
                }
            }
            .pull-left {
                float: none !important;
            }
        }
    }

    .btn-main {
        text-transform: uppercase;
        .fa-icon, span {
            float: left;
        }
        .fa-icon, .ti-icon {
            margin-right: 0.5rem;
        }
        span {
            line-height: 2em;
        }
    }
</style>