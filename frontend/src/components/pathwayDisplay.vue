<template>

  <div>
    
  </div>

</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  props: ['items'],
  data() {
    return {
      specifiedCourse: 'No course specified',
      courseNumber: 'first'
    }
  },
  methods: {
    ...mapMutations(['setSelectedCourse1', 'setSelectedCourse2', 'setSelectedCourse3']),
    selectCourse() {
      // console.log(this.specifiedCourse)
      // console.log(this.firstClass)
      if (this.courseNumber == 'first') {
        this.setSelectedCourse1(this.specifiedCourse)
        this.courseNumber = 'second'
        this.specifiedCourse = this.items.secondCourses[0]
      } else if (this.courseNumber == 'second') {
        this.setSelectedCourse2(this.specifiedCourse)
        this.courseNumber = 'third'
        this.specifiedCourse = this.items.thirdCourses[0]
      } else if (this.courseNumber == 'third') {
        this.setSelectedCourse3(this.specifiedCourse)
      }
    },
    undoCourse() {
      if (this.courseNumber == 'third') {
        if (this.thirdCourse == null) {
          this.setSelectedCourse2(null)
          this.courseNumber = 'second'
        } else {
          this.setSelectedCourse3(null)
        }
      } else if (this.courseNumber == 'second') {
        this.setSelectedCourse1(null)
        this.courseNumber = 'first'
      }
    }
  },
  computed: {
    courses() {
      if (this.courseNumber == 'first') {
        return this.items.Courses
      } else if (this.courseNumber == 'second') {
        return this.items.secondCourses
      } else if (this.courseNumber == 'third') {
        return this.items.thirdCourses
      } else {
        return null
      }
    },
    defaultCourse() {
      return this.items.Courses[0]
    },
    ...mapGetters(['thirdCourse', 'secondCourse'])
  }
}
</script>

<style scoped>

  /* #right_panel {
    position: absolute;
    left: 16%;
    top: 4%;
    width: 80%;
  } */

  #right_panel {
    font-family: 'Muli', sans-serif;
  }
  
  #navigation_drawer_panel {
    float: left;
    width: 100%;
    height: 300px;
  }

  #coursePanel {
    position: absolute;
    left: 30%;
    width: 70%;
    height: 300px;
  }

  #rounded-left {
    border-radius: 0px 6px 6px 0px;
  }

  #rounded-right {
    border-radius: 6px 0px 0px 6px;
  }

  .card-actions {
    position: absolute;
    bottom: 0px;
    right: 1%;
  }

  .v-list {
    overflow-y: auto;
  }

</style>
