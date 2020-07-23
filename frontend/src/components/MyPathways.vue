<template>

  <div>
    <center>
      <h1>Saved Courses</h1>
    </center>

    <v-container v-if="optionsLength > 0">
      
      
      <v-card flat v-for="course in storedCoursesAppender" :key="course">
        <v-card-title>
          Artificial Intelligence
        </v-card-title>

        <v-card-subtitle>

          <!-- loop button x times -->
          <v-btn depressed shaped x-large width="33%" color="pink" dark class="text-wrap" v-on:click="selectCourse('h')">
            <v-icon>mdi-numeric-1</v-icon>
            {{ course.first_course }}
          </v-btn>

          <v-btn depressed shaped x-large width="33%" color="orange" dark class="text-wrap">
            <v-icon>mdi-numeric-2</v-icon>
            {{ course.second_course }}
          </v-btn>

          <v-btn depressed shaped x-large width="33%" color="blue" dark class="text-wrap">
            <v-icon>mdi-numeric-3</v-icon>
            {{ course.third_course }}
          </v-btn>

        </v-card-subtitle>

        <!-- card information -->
        <v-card-text>
          <v-card width="100%" height="90%" outlined id="rounded-left">
          
            <!-- course name & important chips -->
            <template>
              <v-card-title v-if="specifiedCourse == 'None'">
                s{{ course.first_course }}
              </v-card-title>

              <v-card-title v-else>
                ss{{ this.specifiedCourse }}
              </v-card-title>
            </template>

            <v-card-subtitle>
              <v-chip small color="orange" class="mr-2 mt-2" text-color="white">IHSS 1140</v-chip>
              <v-chip small color="red" class="mr-2 mt-2" text-color="white">Required</v-chip>
              <v-chip small color="green" class="mr-2 mt-2" text-color="white">Major Restricted</v-chip>
              <v-chip small color="green" class="mr-2 mt-2" text-color="white">Gateway Course</v-chip>
              <v-chip small color="red" class="mr-2 mt-2" text-color="white">HASS Inquiry</v-chip>
            </v-card-subtitle>

            <v-divider></v-divider>

            <template>
              <!-- course description -->
              <v-card-text class="font-weight-black" v-if="specifiedCourse == 'None'">
                {{ course.first_course }}'s course description IF specifiedCourse EQUALS NONE
              </v-card-text>

              <v-card-text class="font-weight-black" v-else>
                {{ course.first_course }}'s course description IF specifiedCourse DOESN'T EQUAL NONE
              </v-card-text>
            </template>

          </v-card>
        </v-card-text>
      </v-card>

    </v-container>

    <v-container v-else>
      <center>
        <h1>
          <a href="/home">Explore courses</a>

          <!-- ILL PLAY WITH THIS LATER -->
          <v-skeleton-loader class="mx-auto" max-width="300" type="card">

          </v-skeleton-loader>
        </h1>
      </center>
    </v-container>


  </div>
  

</template>


<script>
import { mapGetters } from 'vuex'

export default {
  props: ['path'],
  data() {
    return {
      specifiedCourse: "None"
    }
  },
  methods: {
    selectCourse(course) {
      this.specifiedCourse = course;
    },
  },
  computed: {
    ...mapGetters(['getOptions', 'getOptionsLength']),
    optionsLength() {
      return this.$store.getters.getOptionsLength;
    },
    storedCoursesAppender(){
      var storedCourses = []

      // if no options (no activity)
      // if (this.$store.getters.getOptionsLength === 0) return storedCourses;
      if (this.$store.getters.getOptions.length === 0) return storedCourses;


      var array_length, innerLoop;
      for (array_length = 0; array_length < this.$store.getters.getOptions.length; array_length++){
        var firstCourse, secondCourse, thirdCourse;
        for (innerLoop = 0; innerLoop < this.$store.getters.getOptions[array_length].length; innerLoop++){
          // tempArray.push(this.$store.getters.getOptions[array_length][innerLoop])
          if (innerLoop === 0) firstCourse = this.$store.getters.getOptions[array_length][innerLoop];
          if (innerLoop === 1) secondCourse = this.$store.getters.getOptions[array_length][innerLoop]
          if (innerLoop === 2) thirdCourse = this.$store.getters.getOptions[array_length][innerLoop];
        }
        var object = {first_course: firstCourse, second_course: secondCourse, third_course: thirdCourse}
        storedCourses.push(object);
      }

      console.log(storedCourses)
      return storedCourses;
    }

  }
}
</script>