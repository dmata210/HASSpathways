<template>
  <div>
    <v-expansion-panels accordion hover id="expansion-panel" class="overflow-y-auto">
      <v-expansion-panel @click="selectPathway(path)" v-for="(path, i) in pathways" :key="i">
        <v-expansion-panel-header color="#c65353" id="expansion-header">{{ path.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card tile flat color="#dcdcdc">
            <v-card-text class="mt-4">{{ path.pathDescription }}</v-card-text>
          </v-card>

          <FirstCourses @nextBucket="moveToNextBucket" v-if="courseNumber=='first'" :path="path"/>
          <SecondCourses @nextBucket="moveToNextBucket" v-else-if="courseNumber=='second'" :path="path"/>
          <ThirdCourses v-else-if="courseNumber=='third'" :path="path"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import FirstCourses from './FirstCourses'
import SecondCourses from './SecondCourses'
import ThirdCourses from './ThirdCourses'

export default {
  components: {
    FirstCourses,
    SecondCourses,
    ThirdCourses
  },
  data() {
    return {
      pathways: [
        { name: 'Artificial Intelligence', pathDescription: "Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.", Courses: ["Minds and Machines", "AI and Society", "Are Humans Rational?"], secondCourses: ["Introduction to Cognitive Science"], thirdCourses: ["Cognitive Modeling, Programming for Cognitive Science and AI", "Game AI", "Intelligent Virtual Agents", "Language Endowed Intelligent Agents", "Learning and Advanced Game AI"], clicked: false},
        { name: 'Chinese Language', pathDescription: "Integrated with Chinese culture, students will learn all four types of language skills (listening, speaking, reading, and writing). After completing the Chinese pathway, students will be able to communicate in Chinese at their targeted proficiency levels and think critically and creatively with global and multicultural awareness.", Courses: [1, 2, 3, 4], clicked: false},
        { name: 'History', pathDescription: "The pathway in History is designed for students interested in US and world history. Courses primarily focus on the social history and evolution of technology, scientific enterprise, medicine, and law.", Courses: [1, 2, 3, 4], clicked: false},
        { name: 'Creative Design and Innovation', pathDescription: "This pathway looks at creative design and innovation from various humanities, arts, and social science points of view. Students will learn about the cognitive and communicative principles behind design and innovation, the economic policies, markets, and other social institutions driving and shaping design and innovation, and how to engage in sustainable and socially responsible design and innovation for local and global impact.", Courses: [1, 2, 3, 4], clicked: false},
        { name: 'Arts History, Theory, and Criticism'},
        { name: 'Behavioral and Cognitive Neuroscience'},
        { name: 'Design, Innovation, and Society'},
        { name: 'Economics'},
        { name: 'Economics of Banking & Finance'}
      ],
      courseNumber: 'first'
    }
  },
  methods: {
    ...mapMutations(['setSelectedCourse1', 'setSelectedCourse2', 'setSelectedCourse3']),
    selectPathway(path) {
      console.log(path.name)
    },
    moveToNextBucket(course) {
      this.courseNumber = course
    }
  }
}
</script>

<style scoped>

  #expansion-panel {
    height: 400px;
  }
</style>