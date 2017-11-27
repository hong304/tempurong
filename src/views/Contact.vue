<template>
    <div class="container" id="contact">
        <section class="padding-of-section mt-5">
            <div class="row">
                <div class="col-xs-12">
                    <content-title :contentTitle="$t('pages.contact.pageTitle')"></content-title>
                    <content-paragraph></content-paragraph>
                </div>
            </div>
        </section>
        <section class="padding-of-section my-5">
            <div class="row">
                <div class="col-xs-12">
                    <img :src="mapSrc"/>
                </div>
            </div>
        </section>
        <section class="padding-of-section my-5 border-bottom">
            <!--<div class="row text-left">-->
                <!--<div class="col-xs-12">-->
                    <!--<h3>Transportation</h3>-->
                    <!--<p>-->
                        <!--Tempurong Golden Beach is located approximately two hours away from Kota Kinabalu International Airport (BKI) by car. We are happy to provide transportation to and from the airport.</p>-->
                    <!--<ul class="text-list text-center mt-5">-->
                        <!--<li><strong>1-4 pax</strong> RM250 each way | RM500 round trip</li>-->
                        <!--<li><strong>5-10 pax</strong> RM350 each way | RM700 round trip</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
            <div class="row">
                <div class="col-xs-12">
                    <content-title :contentTitle="secondTitle"></content-title>
                    <p>Tempurong Golden Beach is located approximately two hours away from Kota Kinabalu International Airport (BKI) by car. We are happy to provide transportation to and from the airport. </p>
                </div>
            </div>
            <div class="row text-left mt-5 mb-5">
                <div class="col-xs-12">
                    <h3>Airport or KK City Pickup</h3>
                    <p>
                        For 1-4 pax, the total cost is MYR250 each way (MYR500 round trip)<br>
                        For 5-10 pax, the total cost is MYR350 each way (MYR700 round trip)
                    </p>
                    <p>
                        BY US: To make it less complicated for you, we are happy to pick you up from any place in Kota Kinabalu, drive you to Tempurong golden beach resort and at the end of your stay, drive you back to KK, 1-4 person by car MYR200 per way, 5-10 by van MYR300per way.
                    </p>
                </div>
            </div>
            <div class="row text-left mt-5 mb-5">
                <div class="col-xs-12">
                    <h3>Bus</h3>
                    <p>
                        Take a bus from Kota Kinabalu (Bus terminal opposite our KK High Court) to Menumbok Ferry Terminal and ask a driver to drop you off in Kayul roundabout (3 turtles roundabout) between Kuala Penyu and Menumbok (ferry terminal to Labuan). From there, we could come to pick you up and drive you to our paradise for a MYR10 fee.
                    </p>
                    <h4>Bus Service K.K-Menumbok (near Kuala Penyu)-K.K</h4>
                    <p>
                        From Kota Kinabalu to Menumbok:<br>
                        6:45 am / 10:00 am / 12:30 pm
                    </p>
                    <p>
                        From Menumbok to Kota Kinabalu:<br>
                        10:00 am / 3:30 pm / 4:30 pm
                    </p>
                    <p>
                        Bus ticket is MYR 15 one way.
                    </p>
                </div>
            </div>
            <div class="row text-left mt-5 mb-5">
                <div class="col-xs-12">
                    <h3>Self driving by car</h3>
                    <p>
                        Please use Waze or Google map as GPS and type location as Tempurong Golden Beach Resort, it should be accurately plotted on the map.
                    </p>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-xs-12">
                    <h4 class="text-center">Know more about the area?</h4>
                    <router-link :to="{ name: 'Activities' }" class="btn btn-main text-center">
                        {{ $t('button.moreAreaAndActivities') }}
                    </router-link>
                </div>
            </div>
        </section>
        <section class="padding-of-section my-5">
            <div class="row text-left mb-4">
                <div class="col-xs-12">
                    <h3>Find us</h3>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-xs-12 col-sm-6 col-sm-push-6">
                    <img :src="imageSrc"/>
                </div>
                <div class="col-xs-12 col-sm-6 col-sm-pull-6">
                    <ul class="detail-list">
                        <li class="info-title"><strong>Address</strong></li>
                        <li>Jalan Kg Tempurong, Kuala Penyu,<br>89740 Kuala Penyu,<br>Sabah, Malaysia</li>
                        <li class="info-title"><strong>Email</strong></li>
                        <li>sabahtvlkk30@hotmail.com</li>
                        <li class="info-title"><strong>Tel</strong></li>
                        <li>+60 88-230 916</li>
                    </ul>
                    <router-link :to="{ name: 'Reservations' }" class="btn btn-main text-center">{{ $t('button.bookNow')
                        }}
                    </router-link>
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
    name: 'Contact',
    data () {
      return {
        mapSrc: '/static/img/about-map.jpg',
        imageSrc: '/static/img/demo-about-02.jpg',
        secondTitle: 'Getting There'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../assets/style/setting';

    #contact {
        color: $brand-secondary;
        h3 {
            text-transform: uppercase;
            font-weight: bold;
            margin-top: 0;
            font-size: 3rem;
        }
        .text-list {
            list-style-type: none;
            padding-left: 0;
            font-size: 1.5em;
        }
        .border-bottom {
            border-bottom: 1px solid $brand-primary;
        }
        .detail-list {
            list-style-type: none;
            padding-left: 0;
            & > li {
                margin-bottom: 1.5rem;
                &.info-title {
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }
            }
        }
        img {
            width: 100%;
            height: auto;
        }
    }
</style>
