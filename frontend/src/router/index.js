import Vue from 'vue'
import Router from 'vue-router'
import PollIndex from '@/components/Poll/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PollIndex',
      component: PollIndex,
    },
  ],
})
