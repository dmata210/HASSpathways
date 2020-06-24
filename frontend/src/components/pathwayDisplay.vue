<template>

  <!-- <div id="right_panel"> -->

    <v-card class="ml-4 mr-4" height="600px" elevation=0 style="font-family: 'Muli', sans-serif">

    <!-- pathway info -->
    <v-card height=200px color="#DCDCDC" elevation=0>
      <v-card-text>
        <!-- pathway name -->
        <p class="font-weight-black">
          {{ items.name }}
        </p>

        <!-- pathway description // THIS SHOULD CHANGE UPON CLICKING A NEW PATHWAY -->
        <p class="font-weight-medium">
          {{ items.pathDescription }}
        </p>
      </v-card-text>
    </v-card>

    <br>

    <p class="font-weight-bold">Select a first course option</p>
    
    <!-- All available courses for a pathway -->
    <div id="navigation_drawer_panel">

      <v-list color="#DCDCDC" flat width="15%" nav class="py-3">

        <v-list-item v-for="item in items.Courses" :key="item" @click="specifiedCourse = item">
          <v-list-item-content>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-list-item-title v-on="on">{{ item }}</v-list-item-title>
              </template>
              <span>{{ item }}</span>
            </v-tooltip>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </div>

    <!-- Course information for each course part of the specified pathway -->
    <div id="coursePanel">

      <v-card width="100%">
        
        <!-- course name & important chips -->
        <v-card-title>
          {{ specifiedCourse }}
          <v-spacer></v-spacer>
            <v-chip small color="orange" class="ma-2" text-color="white">IHSS 1140</v-chip>
            <v-chip small color="red" class="ma-2" text-color="white">Required</v-chip>
            <v-chip small color="green" class="ma-2" text-color="white">Major Restricted</v-chip>
            <v-chip small color="green" class="ma-2" text-color="white">Gateway Course</v-chip>
            <v-chip small color="red" class="ma-2" text-color="white">HASS Inquiry</v-chip>
        </v-card-title>

        <v-divider></v-divider>

        <!-- course description -->
        <v-card-text class="font-weight-black">
          Integrated with Chinese culture, students will learn all four types of language skills (listening, speaking, reading, and writing). After completing the Chinese pathway, students will be able to communicate in Chinese at their targeted proficiency levels and think critically and creatively with global and multicultural awareness.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="selectCourse" text color="primary">Select</v-btn>
        </v-card-actions>

      </v-card>

    </div>

    </v-card>

  <!-- </div> -->

</template>

<script>

import { mapMutations } from 'vuex'

export default {
  props: ['items'],
  data() {
    return {
      specifiedCourse: ''
    }
  },
  methods: {
    ...mapMutations(['setSelectedCourse1']),
    selectCourse() {
      console.log(this.specifiedCourse)
      this.setSelectedCourse1(this.specifiedCourse)
    }
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
  
  #navigation_drawer_panel {
    float: left;
    width: 100%;
  }

  #coursePanel {
    position: absolute;
    left: 15%;
    width: 85%;
  }

</style>
