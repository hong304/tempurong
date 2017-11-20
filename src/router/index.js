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
        {path: '/rooms/detail', name: 'RoomDetail', component: RoomDetail},
        {path: '/activities', name: 'Activities', component: Activities},
        {path: '/food', name: 'Food', component: Food},
        {path: '/contact', name: 'Contact', component: Contact},
        {path: '/reservations', name: 'Reservations', component: Reservations},
        {path: '/reservations/summary', name: 'Summary', component: Summary},
        {path: '/reservations/payment', name: 'Payment', component: Payment},
        {path: '/successful-booked', name: 'SuccessfulBooked', component: SuccessfulBooked},
        {path: '/order-detail', name: 'OrderDetail', component: OrderDetail}
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
  ]
})
