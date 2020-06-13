<template>
  <v-app>
    <!-- left panel (with the pathway names) -->
    <!-- parent for pathway description & pathway courses -->
    <i v-if=drawer class="material-icons" @click="drawer=!drawer">keyboard_arrow_left</i>
    <i v-else class="material-icons" @click="drawer=!drawer">keyboard_arrow_right</i>
    <v-navigation-drawer v-model="drawer" color="#D3D3D3" height="450" width="14%" class="mt-4">
      <ul class="mt-4 mr-2">
        <v-btn small block depressed class="mt-2 text-wrap" v-for="item in pathway_info" :key="item.name">
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

          <!-- pathway description // THIS SHOULD CHANGE UPON CLICKING A NEW PATHWAY -->
          <!-- child of parent (line 4) -->
          <p class="font-weight-medium">
            Pathway description
          </p>
        </v-card-text>
      </v-card>
      
      <br>

      <!-- THIS SHOULD CHANGE (FIRST/SECOND/THIRD) ON STEPPER EVENT -->
      <p class="font-weight-bold"> Select a first course option </p>
      
      <!-- pathway courses & course information // THIS SHOULD CHANGE UPON NEW PATHWAY CLICK (NEW COURSES DISPLAYED)-->
      <div>
        <v-card width="100%" height="100%" color="#e5e8ed">

          <!-- all courses possible for path -->
          <!-- child of parent (line 4) -->
          <!-- parent for course descriptions -->
          <v-navigation-drawer v-modoel="drawer" color="#e5e8ed" height="100%" width="256" class="mt-4">
            <ul class="mt-4 mr-2">
              <v-btn color="#e5e8ed" block depressed class="mt-2 text-wrap" v-for="item in pathway_info" :key="item.Courses[0]">
                {{ item.Courses[0]}}
              </v-btn>
              <br>
            </ul>
          </v-navigation-drawer>

          <!-- course information -->
          <v-card-title id="course_information_headline" class="font-weight-black">Course Information</v-card-title>

          <!-- THIS SHOULD CHANGE UPON CLICKING ON COURSE NAME  -->
          <!-- child of parent (line 45) -->
          <v-card-title id="actual_course_information" class="font-weight-regular">
            Course description
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>

            <!-- THIS SHOULD TRIGGER STEPPER EVENT -->
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
  // props to change things on the page on click
  props: {
    pathGrabber: String,
    courseGrabber: String
  },
  data() {
    return {
      drawer: true,
      pathway_info: [
        {
            "id": 0,
            "name": "Artifical Intelligence",
            "desc": "Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.",
            "Courses": [
              1972,
              1140,
              1235
            ]
          },
          {
            "id": 1,
            "name": "Arts History, Theory, and Criticism",
            "desc": "This pathway allows students to study a range of art history and media art histories and theories. This immersive study will give students a comprehensive view of how these histories have shaped our current day media and given rise to a variety of art making tools in our digital and computational era.",
            "Courses": [
              1080,
              1300,
              1170,
              1700
            ]
          },
          {
            "id": 4,
            "name": "Creative Design and Innovation",
            "desc": "This pathway looks at creative design and innovation from various humanities, arts, and social science points of view. Students will learn about the cognitive and communicative principles behind design and innovation, the economic policies, markets, and other social institutions driving and shaping design and innovation, and how to engage in sustainable and socially responsible design and innovation for local and global impact.",
            "Courses": [
              1170,
              1700,
              1969,
              1964
            ]
          },
          {
            "id": 6,
            "name": "Economics",
            "desc": "Study different types of theories and statistical methods used by economists. Students are prepared to gain a broad understanding of how consumers, firms and governments make decisions, and their implications.",
            "Courses": [
              1200
            ]
          },
          {
            "id": 7,
            "name": "Economics of Banking and Finance",
            "desc": "Study markets and policies in banking and finance. Students are prepared to use different types of mathematical models and econometric techniques used by economists to study the behavior of individuals, firms, and the economy.",
            "Courses": [
              1200
            ]
          },
          {
            "id": 8,
            "name": "Economics of Biotech and Medical Markets",
            "desc": "Study different types of markets related to pharmaceuticals, medical devices, and healthcare. Students are prepared to use theory, econometric models, and data to study the role of R&D, patents, innovation, and policies in healthcare markets, and in pharmaceuticals and medical devices.",
            "Courses": [
              1200
            ]
          },
          {
            "id": 9,
            "name": "Economics of Policy and Regulations",
            "desc": "Study different types of regulations and economic policy measures, and their impact on individuals, markets, and the economy. Students are prepared to use economic models, quantitative methods, and data to assess different types of regulations and policies, and their impact.",
            "Courses": [
              1200
            ]
          },
          {
            "id": 10,
            "name": "Economics of Quantitative Modeling",
            "desc": "Study different types of mathematical models and econometric techniques used in Economics. Students are prepared to use economic theory, and econometric and statistical methods to study behavior of individuals and firms in the economy.",
            "Courses": [
              1200
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
  left: 256px;
  top: 30%;

}

li {
  list-style-type: none;
  font-family: 'Muli', sans-serif;
}

.material-icons {
    cursor: pointer;
}

</style>


