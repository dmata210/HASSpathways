<template>

    <div class="ml-2 mr-2" style="font-family: 'Muli', sans-serif">

      <v-stepper id="progress" class="elevation-0" :value='numberOfCoursesSelected + 1'>

        <v-stepper-header>

          <v-stepper-step 
          :step="1"
          :complete="numberOfCoursesSelected > 0"
          >
          {{coursesList.firstCourse}}
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
          :step="2"
          :complete="numberOfCoursesSelected > 1"
          >
          {{coursesList.secondCourse}}
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step 
          :step="3"
          :complete="numberOfCoursesSelected > 2"
          >
          {{coursesList.thirdCourse}}
          </v-stepper-step>

        </v-stepper-header>

      </v-stepper>

    </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data(){
    return {}
  },
  // we use a computed property to automatically update the 
  // number of steps shown as complete on the progressbar based on the 
  // current application state
  computed: {
    ...mapGetters(['progressBarStatus', 'firstCourse', 'secondCourse', 'thirdCourse']),
    numberOfCoursesSelected () {
      return this.progressBarStatus;
    },
    coursesList() {
      return {
        firstCourse: this.firstCourse ? this.firstCourse : "No Course Selected",
        secondCourse: this.secondCourse ? this.secondCourse : "No Course Selected",
        thirdCourse: this.thirdCourse ? this.thirdCourse : "No Course Selected"
      }
    }
  }
}

</script>
