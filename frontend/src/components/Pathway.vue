<template>
  <v-app>
    <!-- left panel (with the pathway names) -->
    <i v-if=drawer class="material-icons" @click="drawer=!drawer">keyboard_arrow_left</i>
    <i v-else class="material-icons" @click="drawer=!drawer">keyboard_arrow_right</i>
    <v-navigation-drawer v-model="drawer" color="#D3D3D3" height="450" width="14%" class="mt-4">
      <ul class="mt-4 mr-2">
        <v-btn small depressed class="mt-2 text-wrap" v-for="item in items" :key="item.name">
          {{ item.name }}
        </v-btn>
      </ul>
    </v-navigation-drawer>

    <!-- everything right of the pathway names -->
    <div id="right_panel">

      <!-- pathway info -->
      <v-card width="100%" class="mt-1" color="#e5e8ed">
        <v-card-text>
          <!-- pathway name -->
          <p class="font-weight-black">
            Pathway Description
          </p>

          <!-- pathway description -->
          <p class="font-weight-medium">
            Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.
          </p>
        </v-card-text>
      </v-card>
      
      <br>
      <p class="font-weight-bold"> Select a first course option </p>
      
      <!-- pathway courses & course information -->
      <div>
        <v-card width="100%" color="#e5e8ed">

          <!-- all courses possible for path -->
          <v-navigation-drawer v-modoel="drawer" color="#e5e8ed" height="100%" width="256" class="mt-4">
            <ul class="mt-4 mr-2">
              <v-btn color="#e5e8ed" small depressed class="mt-2 text-wrap" v-for="item in items" :key="item.course_name">
                {{ item.courses[0].course_name }}
              </v-btn>
              <v-btn color="#e5e8ed" small depressed class="mt-2 text-wrap" v-for="item in items" :key="item.course_name">
                {{ item.courses[0].course_name }}
              </v-btn>
              <br>
            </ul>
          </v-navigation-drawer>

          <!-- course information -->
          <v-card-title id="course_information_headline" class="font-weight-black">Course Information</v-card-title>

          
          <v-card-title id="actual_course_information" class="font-weight-regular">
            This course is an introduction to the philosophy of mind and cognitive science. Students meet in small sections to have class discussions and debates about questions like: What are minds? Are minds physical or non-physical? Do humans have free will? Does reliance on technology turn humans into cyborgs? How close are humans to building an intelligent robot or machine? Do we want this to be a goal? Students will learn how make a philosophical argument, and how to express them in writing or through an oral presentation. This course is communication intensive.
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary">
              Select
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      drawer: true,
      items: [
        { 
          name: 'Artificial Intelligence', 
          pathway_description: `pathway description bro`,
          courses: [
            {
              course_name: "Minds and Machines",
              course_description: "This course is an introduction to the philosophy of mind and cognitive science. Students meet in small sections to have class discussions and debates about questions like: What are minds? Are minds physical or non-physical? Do humans have free will? Does reliance on technology turn humans into cyborgs? How close are humans to building an intelligent robot or machine? Do we want this to be a goal? Students will learn how make a philosophical argument, and how to express them in writing or through an oral presentation. This course is communication intensive.",
              hass_inquiry: true,
              major_restricted: false,
              gateway_course: false,
              required: false
            },
          ]
        },
        {
          name: 'Chinese Language',
          pathway_description: `pathway description bro`,
          courses: [
            {
              course_name: "Course Name1",
              course_description: "Course description",
              // boolean for special stuff  
            }
          ]
        },
        {
          name: 'History',
          pathway_description: `pathway description bro`,
          courses: [
            {
              course_name: "Course name2",
              course_description: "Course description",
              // boolean for special stuff  
            }
          ]
        },
        {
          name: 'Creative Design and Innovation',
          pathway_description: `pathway description bro`,
          courses: [
            {
              course_name: "Course name",
              course_description: "Course description",
              // boolean for special stuff  
            }
          ]
        },
        {
          name: 'Economics',
          pathway_description: `pathway description bro`,
          courses: [
            {
              course_name: "Course name",
              course_description: "Course description",
              // boolean for special stuff  
            }
          ]
        },
        {
          name: 'Electronic Arts',
          pathway_description: `pathway description bro`,
          courses: [
            {
              course_name: "Course name",
              course_description: "Course description",
              // boolean for special stuff  
            }
          ]
        },
      ],
      pathway_button: true
    }
  }
}


</script>

<style>
#right_panel {
  position: absolute;
  left: 16%;
  top: 4%;
  width: 80%;
}

#course_information_headline {
  background:#e5e8ed;
  position: absolute;
  top: 0px;
  left: 256px;  
}

#actual_course_information {
  background: #e5e8ed;
  position: absolute;
  top: 10%;
  left: 256px;
  width: 50%;
  height: 30%;
}

li {
  list-style-type: none;
  font-family: 'Muli', sans-serif;
}

.material-icons {
    cursor: pointer;
}

</style>