import Vue from 'vue'
import Router from 'vue-router'

// page view
import MasterLayout from '@/layouts/MasterLayout'
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
import OrderDetail from '@/views/Reservations/OrderDetail'
import FAQ from '@/views/Policy/FAQ'
import Policy from '@/views/Policy/Policy'

// blank layout
import BlankLayout from '@/layouts/BlankLayout'
import Login from '@/views/Auth/Login'

// admin layout and view
import AdminLayout from '@/layouts/AdminLayout'
import AdminDashboard from '@/views/Admin/AdminDashboard'
import OrderHistory from '@/views/Admin/OrderHistory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MasterLayout,
      children: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/rooms', name: 'Rooms', component: Rooms},
        {path: '/rooms/detail', name: 'RoomDetail', component: RoomDetail, props: true},
        {path: '/activities', name: 'Activities', component: Activities},
        {path: '/food', name: 'Food', component: Food},
        {path: '/contact', name: 'Contact', component: Contact},
        // all the routes for reservation
        {path: '/reservations', name: 'Reservations', component: Reservations, props: true},
        {path: '/reservations/contact', name: 'ReservationContact', component: Payment},
        {path: '/reservations/summary', name: 'ReservationSummary', component: Summary},
        {path: '/reservations/booked', name: 'SuccessfulBooked', component: SuccessfulBooked},
        {path: '/order-detail', name: 'OrderDetail', component: OrderDetail, props: true},
        // policy routes
        {path: '/faq', name: 'FAQ', component: FAQ},
        {path: '/policy', name: 'Policy', component: Policy}
      ]
    },
    {
      path: '/login',
      component: BlankLayout,
      children: [
        {path: '', name: 'Login', component: Login}
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {path: '', name: 'AdminDashboard', component: AdminDashboard},
        {path: 'order-history', name: 'OrderHistory', component: OrderHistory}
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // if user use the back arrow to go back to the previous page, it will goto the previous position
      return savedPosition
    } else {
      // else back to the top of the page
      return { x: 0, y: 0 }
    }
  }
})
