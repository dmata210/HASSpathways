<template>
  <v-app>
    <!-- left panel (with the pathway names) -->
    <!-- parent for pathway description & pathway courses -->
    <i v-if=drawer class="material-icons" @click="drawer=!drawer">keyboard_arrow_left</i>
    <i v-else class="material-icons" @click="drawer=!drawer">keyboard_arrow_right</i>
    <v-navigation-drawer v-model="drawer" color="#D3D3D3" height="450" width="14%" class="mt-4">
      <ul class="mt-4 mr-2">
        <v-btn small block depressed class="mt-2 text-wrap" v-for="item in pathway_info" :key="item.name" @click="specifiedPath = item">
          {{ item.name }}
        </v-btn>
      </ul>
    </v-navigation-drawer>

    <!-- everything right of the pathway names -->
    <pathwayDisplay :items="specifiedPath"></pathwayDisplay>
  </v-app>
</template>

<script>
import pathwayDisplay from './pathwayDisplay.vue'

export default {
  // props to change things on the page on click
  components: {
    pathwayDisplay
  },
  data() {
    return {
      specifiedPath: 'Artificial Intelligence',
      drawer: true,
      pathway_info: [
        { name: 'Artificial Intelligence', pathDescription: "Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.", Courses: [1, 2, 3, 4]},
        { name: 'Chinese Language', pathDescription: "Integrated with Chinese culture, students will learn all four types of language skills (listening, speaking, reading, and writing). After completing the Chinese pathway, students will be able to communicate in Chinese at their targeted proficiency levels and think critically and creatively with global and multicultural awareness.", Courses: [1, 2, 3, 4]},
        { name: 'History', pathDescription: "The pathway in History is designed for students interested in US and world history. Courses primarily focus on the social history and evolution of technology, scientific enterprise, medicine, and law.", Courses: [1, 2, 3, 4]},
        { name: 'Creative Design and Innovation', pathDescription: "This pathway looks at creative design and innovation from various humanities, arts, and social science points of view. Students will learn about the cognitive and communicative principles behind design and innovation, the economic policies, markets, and other social institutions driving and shaping design and innovation, and how to engage in sustainable and socially responsible design and innovation for local and global impact.", Courses: [1, 2, 3, 4]},
      ],
      pathway_button: true
    }
  },
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


