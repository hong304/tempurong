<template>
    <nav id="global-nav" class="navbar">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <collapse class="navbar-collapse" v-model="showNavbar">
                <div class="navbar-wrapper">
                    <ul class="nav navbar-nav">
                        <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>-->
                        <li v-for="link in lLinks">
                            <router-link :to="{ path: link.path }" class="navbar-link">{{ link.name }}</router-link>
                        </li>
                    </ul>
                    <router-link :to="{ path: '/' }" class="navbar-brand" role="button">Logo</router-link>
                    <ul class="nav navbar-nav">
                        <li v-for="link in rLinks">
                            <router-link :to="{ path: link.path }" class="navbar-link">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </collapse>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'global-nav',
    data () {
      return {
        showNavbar: false,
        lLinks: [
          { path: '/about', name: 'About' },
          { path: '/rooms', name: 'Rooms & Amenities' },
          { path: '/activities', name: 'Activities' }
        ],
        rLinks: [
          { path: '/food', name: 'Food' },
          { path: '/contact', name: 'Contact' },
          { path: '/book', name: 'Book Now' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../assets/style/setting';
    .navbar {
        margin-bottom: 0;
    }
    .navbar-wrapper {
        margin: 0 auto;
        .navbar-brand {
            width: 14%;
        }
        .navbar-nav {
            width: 43%;
            & > li {
                width: 33.3%;
                .navbar-link {
                    color: $brand-secondary;
                }
            }
        }
    }
</style>