<template>
  <div>
    <ProgressBar/>
    <v-expansion-panels accordion hover multiple id="expansion-panel" class="overflow-y-auto">
      <v-expansion-panel @click="selectPathway(path)" v-for="(path, i) in pathways" :key="i">
        <v-expansion-panel-header color="#c65353" id="expansion-header">{{ path.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card tile flat color="#dcdcdc">
            <v-card-text class="mt-4">{{ path.pathDescription }}</v-card-text>
          </v-card>
          <v-list id="list" class="overflow-y-auto">
            Select a {{ courseNumber }} course
            <v-divider></v-divider>
            
            <v-list-group color="#c65353" v-for="(course, i) in courses(path)" :key="i">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ course }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item>
                <v-card tile flat class="mt-2 mb-2" color="#dcdcdc" width="100%">
                  <v-card-text>Description of course here</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="selectCourse(course)" class="mr-2 mb-2">Add</v-btn>
                  </v-card-actions>
                </v-card>
              
              </v-list-item>

            </v-list-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import ProgressBar from './ProgressBar.vue'


export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      items: ['Minds and Machines', 'AI and Society', 'Are Humans Rational?', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'etc'],
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
    selectCourse(course) {
      if (this.courseNumber == 'first') {
        this.setSelectedCourse1(course)
        this.courseNumber = 'second'
      } else if (this.courseNumber == 'second') {
        this.setSelectedCourse2(course)
        this.courseNumber = 'third'
      } else if (this.courseNumber == 'third') {
        this.setSelectedCourse3(course)
      }
      console.log(course)
    },
    selectPathway(path) {
      console.log(path.name)
    },
    courses(path) {
      if (this.courseNumber == 'first') {
        return path.Courses
      } else if (this.courseNumber == 'second') {
        return path.secondCourses
      } else if (this.courseNumber == 'third') {
        return path.thirdCourses
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

  #expansion-panel {
    height: 100%;
  }
</style>