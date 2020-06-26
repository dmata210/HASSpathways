<template>

  <div id="test2">

    <NavigationDrawer id="n_pan" class="navDrawer_id" @drawerSelector="drawerSetter" @pathSelection="updatePathway" :items="pathway_info"></NavigationDrawer>
    
    <pathwayDisplay id="p_pan" class="pathwayDisplay_id" :items="specifiedPath"></pathwayDisplay>

  </div>

</template>

<script>

import pathwayDisplay from './pathwayDisplay.vue'
import NavigationDrawer from './NavigationDrawer'

export default {
  // props to change things on the page on click
  components: {
    pathwayDisplay,
    NavigationDrawer
  },
  data() {
    return {
      specifiedPath: '',
      drawerValue: true,
      pathway_info: [
        { name: 'Artificial Intelligence', pathDescription: "Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.", Courses: ["Minds and Machines", "AI and Society", "Are Humans Rational?", "Introduction to Cognitive Science"], clicked: false},
        { name: 'Chinese Language', pathDescription: "Integrated with Chinese culture, students will learn all four types of language skills (listening, speaking, reading, and writing). After completing the Chinese pathway, students will be able to communicate in Chinese at their targeted proficiency levels and think critically and creatively with global and multicultural awareness.", Courses: [1, 2, 3, 4], clicked: false},
        { name: 'History', pathDescription: "The pathway in History is designed for students interested in US and world history. Courses primarily focus on the social history and evolution of technology, scientific enterprise, medicine, and law.", Courses: [1, 2, 3, 4], clicked: false},
        { name: 'Creative Design and Innovation', pathDescription: "This pathway looks at creative design and innovation from various humanities, arts, and social science points of view. Students will learn about the cognitive and communicative principles behind design and innovation, the economic policies, markets, and other social institutions driving and shaping design and innovation, and how to engage in sustainable and socially responsible design and innovation for local and global impact.", Courses: [1, 2, 3, 4], clicked: false},
      ],
    }
  },
  methods: {
    updatePathway(path) {
      this.specifiedPath = path
    },
    drawerSetter(word) {
      if (word === "open") {
        this.drawerValue = false
        // nav bar
        document.getElementById("n_pan").style.float = "left";
        document.getElementById("n_pan").style.left = "7%"
        document.getElementById("n_pan").style.width = "20%"

        // pathway panel
        document.getElementById("p_pan").style.position = "absolute"
        document.getElementById("p_pan").style.left = "21%"
        document.getElementById("p_pan").style.width = "75%"

      }else if (word === "close") {
        this.drawerValue = true
        // nav panel
        document.getElementById("n_pan").style.float = "left";
        document.getElementById("n_pan").style.left = "10%"
        document.getElementById("n_pan").style.width = "20%"

        // pathway panel
        document.getElementById("p_pan").style.position = "absolute"
        document.getElementById("p_pan").style.left = "4%"
        document.getElementById("p_pan").style.width = "89%"

      }
    }
  }
}

</script>

<style>
  .navDrawer_id {
    float: left;
    left: 1%;
    width: 20%;
  }

  .pathwayDisplay_id {
    position: absolute;
    left: 21%;
    width: 77%;
  }

</style>
