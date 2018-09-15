import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '',
      name: 'home',
      component: Home
    }
  ],
  mode: 'history'
})
