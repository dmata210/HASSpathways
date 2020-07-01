<template>

  <div id="right_panel" style="font-family: 'Muli', sans-serif">

    <!-- pathway info -->
    <v-card flat width="100%" color="#DCDCDC">
      <v-card-text>

        <!-- pathway name -->
        <v-card-title class="font-weight-black" style="font-size: 1em">
          {{ items.name }}
        </v-card-title>

        <!-- pathway description // THIS SHOULD CHANGE UPON CLICKING A NEW PATHWAY -->
        <v-card-text class="font-weight-medium">
          {{ items.pathDescription }}
        </v-card-text>

      </v-card-text>
    </v-card>

    <br>

    <p class="font-weight-bold">Select a {{ courseNumber }} course option</p>
    
    <!-- All available courses for a pathway -->
    <div id="navigation_drawer_panel">
      <v-list color="#DCDCDC" width="30%" height="90%" nav class="py-3" id="rounded-right">
        <v-list-item-group class="ml-2 mt-2 mr-2" mandatory color="#fa8072">
          <v-list-item v-for="item in courses" :key="item" @click="specifiedCourse = item">
            <v-list-item-content>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-list-item-title v-on="on">{{ item }}</v-list-item-title>
                </template>
                <span>{{ item }}</span>
              </v-tooltip>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>

    </div>

    <!-- Course information for each course part of the specified pathway -->
    <div id="coursePanel">

      <v-card width="100%" height="90%" outlined id="rounded-left">
        
        <!-- course name & important chips -->
        <v-card-title v-if="specifiedCourse == 'No course specified'">
          {{ defaultCourse }}
        </v-card-title>

        <v-card-title v-else>
          {{ specifiedCourse }}
        </v-card-title>

        <v-card-subtitle>
            <v-chip small color="orange" class="mr-2 mt-2" text-color="white">IHSS 1140</v-chip>
            <v-chip small color="red" class="mr-2 mt-2" text-color="white">Required</v-chip>
            <v-chip small color="green" class="mr-2 mt-2" text-color="white">Major Restricted</v-chip>
            <v-chip small color="green" class="mr-2 mt-2" text-color="white">Gateway Course</v-chip>
            <v-chip small color="red" class="mr-2 mt-2" text-color="white">HASS Inquiry</v-chip>
        </v-card-subtitle>

        <v-divider></v-divider>

        <!-- course description -->
        <v-card-text class="font-weight-black">
          Integrated with Chinese culture, students will learn all four types of language skills (listening, speaking, reading, and writing). After completing the Chinese pathway, students will be able to communicate in Chinese at their targeted proficiency levels and think critically and creatively with global and multicultural awareness.
        </v-card-text>

        <v-card-actions class="card-actions">
          <v-btn class="font-weight-bold" @click="undoCourse" text color="primary">Back</v-btn>
          <!-- <v-spacer></v-spacer> -->
          <v-btn class="font-weight-bold" @click="selectCourse" text color="primary">Select</v-btn>
        </v-card-actions>

      </v-card>

    </div>

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
