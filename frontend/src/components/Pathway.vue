<template>
  <div>

    <v-layout>
      <v-flex md3>
        <!-- use listener to respond to clicks -->
        <NavigationDrawer @pathSelection="updatePathway" :items="pathway_info"></NavigationDrawer>
      </v-flex>
      <v-flex md9>
        <!-- everything right of the pathway names -->
        <pathwayDisplay :items="specifiedPath"></pathwayDisplay>
      </v-flex>
    </v-layout>

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
      drawer: true,
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
    }
  }
}

</script>

<style>
  li {
    list-style-type: none;
    font-family: 'Muli', sans-serif;
  }

  .material-icons {
      cursor: pointer;
  }
</style>
