import Vue from 'vue'
import Router from 'vue-router'
import MyPathways from './components/MyPathways.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mypathways',
      name: 'mypathways',
      component: MyPathways
    }
  ]
})