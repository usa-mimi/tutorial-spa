import Vue from 'vue'
import Router from 'vue-router'
import PollIndex from '@/components/Poll/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PollIndex',
      component: PollIndex,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})
