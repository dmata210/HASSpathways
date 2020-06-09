import Vue from 'vue'
import Router from 'vue-router'
import Inquiry from './components/Inquiry.vue'
import Pathway from './components/Pathway.vue'
import MyPathways from './components/MyPathways.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/inquiry',
      name: 'inquiry',
      component: Inquiry
    },
    {
      path: '/pathway',
      name: 'pathway',
      component: Pathway
    },
    {
      path: '/mypathways',
      name: 'mypathways',
      component: MyPathways
    }
  ]
})