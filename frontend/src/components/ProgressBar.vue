<template>

    <div style="font-family: 'Muli', sans-serif">

      <div id="stepper">
        <v-stepper id="progress" class="elevation-0" :value="numberOfCoursesSelected + 1">

          <v-stepper-header>

            <v-stepper-step 
            :step="1"
            :complete="numberOfCoursesSelected > 0"
            @click="goToCourse(1)"
            :editable='firstCourseEditable'
            color="#c65353"
            >
            {{coursesList.firstCourse}}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
            :step="2"
            :complete="numberOfCoursesSelected > 1"
            @click="goToCourse(2)"
            :editable='secondCourseEditable'
            color="#c65353"
            >
            {{coursesList.secondCourse}}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
            :step="3"
            :complete="numberOfCoursesSelected > 2"
            @click="goToCourse(3)"
            :editable='thirdCourseEditable'
            color="#c65353"
            >
            {{coursesList.thirdCourse}}
            </v-stepper-step>

          </v-stepper-header>

        </v-stepper>
      </div>

      <!-- <div id="save">
        <v-btn v-if="coursesList.thirdCourse === 'No Course Selected'" disabled text color="primary">Save</v-btn>
        <v-btn v-if="coursesList.thirdCourse !== 'No Course Selected'" text color="primary" @click="saveCourses()">Save</v-btn>
      </div> -->


    </div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      courseNumber: "",
      firstCourseEditable: true,
      secondCourseEditable: false,
      thirdCourseEditable: false
    }
  },
  methods: {
    // ...mapMutations(['saveButton']),
    // saveCourses() {
    //   this.saveButton();
    // },
    goToCourse(num) {
      if (num == 1) {
        this.courseNumber = "first"
        this.$root.$emit('changeWhichCourse', "first")
      } else if (num == 2) {
        if (this.firstCourse != null) {
          this.courseNumber = "second"
          this.$root.$emit('changeWhichCourse', "second")
        }
      } else if (num == 3) {
        if (this.secondCourse != null) {
          this.courseNumber = "third"
          this.$root.$emit('changeWhichCourse', "third")
        }
      }
    }
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
    },
    editable() {
      if (this.firstCourse && this.secondCourse && this.thirdCourse) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.$root.$on('changeWhichCourse', (course) => {
      this.courseNumber = course
    }),
    this.$root.$on('makeSecondCourseEditable', (editable) => {
      this.secondCourseEditable = editable
    }),
    this.$root.$on('makeThirdCourseEditable', (editable) => {
      this.thirdCourseEditable = editable
    }),
    this.firstCourseEditable = this.editable,
    this.secondCourseEditable = this.editable,
    this.thirdCourseEditable = this.editable
  }
}

</script>


<style>

  /* #stepper {
    float: left;
    width: 90%;
  }

  #save {
    position: relative;
  } */

</style>