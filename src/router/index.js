import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import INDEX from '@/components/index'
import CONTAINER from '@/components/container'
import LOGIN from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: INDEX
    },
    {
      path: '/container',
      name: 'container',
      component: CONTAINER
    },
    {
      path: '/login',
      name: 'login',
      component: LOGIN
    }
  ]
})
