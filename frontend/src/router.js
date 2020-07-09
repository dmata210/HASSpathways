import Vue from 'vue'
import Router from 'vue-router'
import MyPathways from './components/MyPathways.vue'
import ExpansionPanel from './components/ExpansionPanel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: ExpansionPanel,
    },
    {
      path: "/mypathways",
      name: "mypathways",
      component: MyPathways,
    },
    {
      path: "*",
      name: "",
      component: ExpansionPanel
    }
  ],
  mode: "history",
});
