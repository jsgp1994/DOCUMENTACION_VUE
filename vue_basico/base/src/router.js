import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TablePru from '@/components/primerComponente'
import ErrorPage from '@/views/ErrorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'tablePru',
      component: TablePru
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage
    }
  ]
})
