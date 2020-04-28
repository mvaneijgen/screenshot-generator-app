import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: require('@/components/Start').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
