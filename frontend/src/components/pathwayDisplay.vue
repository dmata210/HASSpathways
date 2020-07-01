<template>

  <div id="right_panel" style="font-family: 'Muli', sans-serif">

    <!-- pathway info -->
    <v-card flat color="#DCDCDC">
      <v-card-text>

        <!-- pathway name -->
        <v-card-title class="font-weight-black" style="font-size: 1em">
          Pathway Name
        </v-card-title>

        <!-- pathway description // THIS SHOULD CHANGE UPON CLICKING A NEW PATHWAY -->
        <v-card-text class="font-weight-medium">
          Pathway Description
        </v-card-text>

      </v-card-text>
    </v-card>

    <br>

    <p class="font-weight-bold">Select a course option</p>
    
    <!-- All available courses for a pathway -->
      <v-list color="#DCDCDC">
        <v-subheader>Courses</v-subheader>
        <v-list-item-group mandatory color="#fa8072" class="ml-2 mt-2 mr-2">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>course</v-list-item-title>
                <v-list-item-subtitle>more?</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>course</v-list-item-title>
                <v-list-item-subtitle>more?</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>course</v-list-item-title>
                <v-list-item-subtitle>more?</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>course</v-list-item-title>
                <v-list-item-subtitle>more?</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>

   

    <!-- Course information for each course part of the specified course -->
    <div id="coursePanel">

      <v-card outlined id="rounded-left">
        
        <!-- course name & important chips -->
        <v-card-title v-if="specifiedCourse == 'No course specified'">
          default course
        </v-card-title>

        <v-card-title v-else>
          specified course
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
          <v-btn text color="primary">Back</v-btn>
          <!-- <v-spacer></v-spacer> -->
          <v-btn text color="primary">Select</v-btn>
        </v-card-actions>

      </v-card>

    </div>

  </div>

</template>

<script>



export default {
  props: ['items'],
  data() {
    return {
      specifiedCourse: 'No course specified',
      courseNumber: 'first'
    }
  },
  methods: {
  },
  computed: {

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
  
 

 

 


 
</style>
