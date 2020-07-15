<template>

  <div>
    <center>
      <h1>Saved Courses</h1>
    </center>

    <v-card flat>
      <v-card-title>
        Artificial Intelligence
      </v-card-title>
      <v-card-subtitle>
        <v-btn depressed shaped x-large width="33%" color="pink" dark @click="selectCourse('Minds and Machines')">
          <v-icon>mdi-numeric-1</v-icon>
          {{ history[0] }}
        </v-btn>
        <v-btn depressed shaped x-large width="33%" color="orange" dark  @click="selectCourse('Artificial Intelligence and Society')">
          <v-icon>mdi-numeric-2</v-icon>
          Artificial Intelligence and Society
        </v-btn>
        <v-btn depressed shaped x-large width="33%" color="success" dark  @click="selectCourse('Are Humans Rational?')">
          <v-icon>mdi-numeric-3</v-icon>
          Are Humans Rational?
        </v-btn>
      </v-card-subtitle>
      <v-card-text>
        <v-card width="100%" height="90%" outlined id="rounded-left">
        
          <!-- course name & important chips -->
          <v-card-title v-if="specifiedCourse == 'None'">
            Minds and Machines
          </v-card-title>

          <v-card-title v-else>
            {{ this.specifiedCourse }}
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
        </v-card>
      </v-card-text>
    </v-card>


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
    ...mapGetters(['getOptions']),
    selectCourse(course) {
      this.specifiedCourse = course;
    },
    history() {
      return this.getOptions;
    }
  }
}
</script>