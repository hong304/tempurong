import Vue from 'vue'
import Router from 'vue-router'

// page view
import Home from '@/views/Home'
import About from '@/views/About'
import Rooms from '@/views/Rooms/Rooms'
import RoomDetail from '@/views/Rooms/RoomDetail'
import Activities from '@/views/Activities'
import Food from '@/views/Food'
import Contact from '@/views/Contact'
import Reservations from '@/views/Reservations/Reservations'
import Summary from '@/views/Reservations/Summary'
import Payment from '@/views/Reservations/Payment'
import SuccessfulBooked from '@/views/Reservations/SuccessfulBooked'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/rooms', name: 'Rooms', component: Rooms},
    {path: '/rooms/detail', name: 'RoomDetail', component: RoomDetail},
    {path: '/activities', name: 'Activities', component: Activities},
    {path: '/food', name: 'Food', component: Food},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/reservations', name: 'Reservations', component: Reservations},
    {path: '/summary', name: 'Summary', component: Summary},
    {path: '/payment', name: 'Payment', component: Payment},
    {path: '/successful-booked', name: 'SuccessfulBooked', component: SuccessfulBooked}
  ]
})
