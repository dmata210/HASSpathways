import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import Vuex from 'vuex';

Vue.use(Vuex)
// this code here is for tracking application state
// application state includes the following
// 1. current state which is comprised of:
    // a. a pathway the user has selected
    // b. first course the user has selected
    // c. second course the user has selected
    // d. third course the user has selected
// 2. a "shopping cart" which is a json object storing the current states the user has saved 
// I'm just going to import the json files in order to make a working prototype
// not sure if this is bad design
import courses from "../../database/Courses_v2.json"
import pathways from "../../database/Pathways_v2.json"

const store = new Vuex.Store({
  state: {
    statecourses: courses,
    statepathways: pathways,
    count: 0,
    currentSelection: {
      pathway: null,
      course1: null,
      course2: null,
      course3: null
    },
    // shopping cart starts out as an empty object
    // we just copy application states as the user saves them
    shoppingCart: {
      options: []
    }
  },
  mutations: {
    setSelectedPathway(state, pathwayID) {
      state.currentSelection.pathway = pathwayID;
    },
    setSelectedCourse1(state, courseName) {
      state.currentSelection.course1 = courseName;
      if (state.currentSelection.course1 != null) {
        if (this.getters.stateAlreadyExists([state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3], state.count)) {
          return
        }
        state.shoppingCart.options[state.count] = [state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3];
      }
    },
    setSelectedCourse2(state, courseName) {
      state.currentSelection.course2 = courseName;
      if (state.currentSelection.course2 != null) {
        if (this.getters.stateAlreadyExists([state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3], state.count)) {
          return
        }
        state.shoppingCart.options[state.count] = [state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3];
      }
    },
    setSelectedCourse3(state, courseName) {
      state.currentSelection.course3 = courseName;
      console.log()
      if (state.currentSelection.course3 != null) {
        if (this.getters.stateAlreadyExists([state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3], state.count)) {
          return
        }
        state.shoppingCart.options[state.count] = [state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3];
        state.count += 1;
      }
      
      
      // Save to options for activity panel
      // state.shoppingCart.options[state.count] = [state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3];
      // state.count += 1;

      // Reset everything
      // state.currentSelection.pathway = null;
      // state.currentSelection.course1 = null
      // state.currentSelection.course2 = null;
      // state.currentSelection.course3 = null;

      // notification
      // alert("Saved Information to activity panel");
    },
    saveButton(state) {
      state.shoppingCart.options[state.count] = [state.currentSelection.course1, state.currentSelection.course2, state.currentSelection.course3];
      state.count += 1;

      state.currentSelection.pathway = null;
      state.currentSelection.course1 = null
      state.currentSelection.course2 = null;
      state.currentSelection.course3 = null;
    },
    clearCurrentSelection(state) {
      state.currentSelection = {}
    },
    saveCurrentSelection(state,currentSelection) {
      state.shoppingCart.options[state.count] = currentSelection;
      state.count+=1;
    },
    loadSelection(state, selectionToLoad) {
      state.currentSelection = selectionToLoad;
    },
    incrementCount(state) {
      state.count += 1;
    },
    clear(state) {
      state.shoppingCart.options = []
      state.count = 0
    }
  },
  getters: {
    progressBarStatus(state) {
      // this function returns the number of courses the user has selected (0, 1, 2 or 3)
      // this is intended to be used with our 3 part progress bar
      if(!state.currentSelection.course1) {
        return 0;
      } else if (!state.currentSelection.course2) {
        return 1;
      } else if (!state.currentSelection.course3) {
        return 2;
      } else {
        return 3;
      }
    },
    firstCourse(state) {
      return state.currentSelection.course1;
    },
    secondCourse(state) {
      return state.currentSelection.course2;
    },
    thirdCourse(state) {
      return state.currentSelection.course3;
    },
    pathway(state) {
      return state.currentSelection.pathway;
    },
    getOptionsLength(state) {
      // double check
      if (state.count === state.shoppingCart.options.length){
        return state.count
      } else {
        return state.shoppingCart.options.length;
      }
    },
    getOptions(state) {
      // return state.shoppingCart.options;
      return state.shoppingCart.options;
    },
    stateAlreadyExists(state) {
      return (courseCombo, count) => {
        for (var i = 0; i < state.shoppingCart.options.length; i++) {
          if (state.shoppingCart.options[i][0] == courseCombo[0] &&
            state.shoppingCart.options[i][1] == courseCombo[1] &&
            state.shoppingCart.options[i][2] == courseCombo[2] &&
            count != i) {
              console.log("exists")
              return true
          }
        }
        console.log("does not exist")
        return false
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
