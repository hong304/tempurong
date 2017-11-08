import Vue from 'vue'
import Router from 'vue-router'

// page view
import Home from '@/views/Home'
import About from '@/views/About'
import Rooms from '@/views/Rooms'
import Activities from '@/views/Activities'
import Food from '@/views/Food'
import Contact from '@/views/Contact'
import Reservations from '@/views/Reservations'
import Summary from '@/views/Reservation/Summary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/rooms', name: 'Rooms', component: Rooms},
    {path: '/activities', name: 'Activities', component: Activities},
    {path: '/food', name: 'Food', component: Food},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/reservations', name: 'Reservations', component: Reservations},
    {path: '/summary', name: 'Summary', component: Summary}
  ]
})
