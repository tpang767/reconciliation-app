import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddUser from '@/components/AddUser'
import CreateEditRecord from '@/components/CreateEditRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/CreateEdit',
      name: 'CreateEditRecord',
      component: CreateEditRecord
    }
    // {
    //   path: '/users/add',
    //   name: 'AddUser',
    //   component: AddUser
    // }
  ]
})
