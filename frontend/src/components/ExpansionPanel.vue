<template>
  <div>
    <ProgressBar/>
    <v-expansion-panels tile accordion hover multiple id="expansion-panel" class="overflow-y-auto">
      <v-expansion-panel @click="selectPathway(path)" v-for="(path, i) in filteredPathways" :key="i">
        <v-expansion-panel-header color="#c65353" id="expansion-header">{{ path.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card tile flat color="#dcdcdc">
            <v-card-text class="mt-4">{{ path.pathDescription }}</v-card-text>
          </v-card>

          <FirstCourses @nextBucket="moveToNextBucket" v-if="courseNumber=='first'" :path="path"/>
          <SecondCourses @nextBucket="moveToNextBucket" v-else-if="courseNumber=='second'" :path="path"/>
          <ThirdCourses v-else-if="courseNumber=='third'" :path="path"/>

        </v-expansion-panel-content>

        <v-divider></v-divider>

      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

// import { mapMutations } from 'vuex'
import ProgressBar from './ProgressBar.vue'
import FirstCourses from './FirstCourses'
import SecondCourses from './SecondCourses'
import ThirdCourses from './ThirdCourses'

import { mapGetters, mapMutations } from 'vuex'


export default {
  components: {
    FirstCourses,
    SecondCourses,
    ThirdCourses,
    ProgressBar
  },
  data() {
    return {
      pathways: [
        { name: 'Artificial Intelligence', pathDescription: "Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.", Courses: ["Minds and Machines", "AI and Society", "Are Humans Rational?"], secondCourses: ["Introduction to Cognitive Science"], thirdCourses: ["Cognitive Modeling, Programming for Cognitive Science and AI", "Game AI", "Intelligent Virtual Agents", "Language Endowed Intelligent Agents", "Learning and Advanced Game AI"] },
        { name: 'Chinese Language', pathDescription: "Integrated with Chinese culture, students will learn all four types of language skills (listening, speaking, reading, and writing). After completing the Chinese pathway, students will be able to communicate in Chinese at their targeted proficiency levels and think critically and creatively with global and multicultural awareness.", Courses: ["AI and Society", "2", "3", "4"], secondCourses: ["Introduction to Cognitive Science"] },
        { name: 'History', pathDescription: "The pathway in History is designed for students interested in US and world history. Courses primarily focus on the social history and evolution of technology, scientific enterprise, medicine, and law.", Courses: ["AI and Society", "2", "3", "4"], secondCourses: ["1"] },
        { name: 'Creative Design and Innovation', pathDescription: "This pathway looks at creative design and innovation from various humanities, arts, and social science points of view. Students will learn about the cognitive and communicative principles behind design and innovation, the economic policies, markets, and other social institutions driving and shaping design and innovation, and how to engage in sustainable and socially responsible design and innovation for local and global impact.", Courses: ["1", "2", "3", "4"] },
        { name: 'Arts History, Theory, and Criticism' },
        { name: 'Behavioral and Cognitive Neuroscience' },
        { name: 'Design, Innovation, and Society' },
        { name: 'Economics' },
        { name: 'Economics of Banking & Finance' }
      ],
      courseNumber: 'first',
      savedCourses: [],
      filter: ''
    }
  },
  methods: {
    ...mapMutations(['setSelectedPathway']),
    selectPathway(path) {
      console.log(path.name)
      this.setSelectedPathway(path)
    },
    moveToNextBucket(course) {
      this.courseNumber = course
      if (this.courseNumber == "first") {
        this.$root.$emit('changeWhichCourse', "first")
      } else if (this.courseNumber == "second") {
        this.$root.$emit('changeWhichCourse', "second")
      } else if (this.courseNumber == "third") {
        this.$root.$emit('changeWhichCourse', "third")
      }
    }
  },
  mounted() {
    this.$root.$on('changeWhichCourse', (course) => {
      this.courseNumber = course
    }),
    this.$root.$on('changedFilter', (input) => {
      this.filter = input
    })
  },
  computed: {
    ...mapGetters(['pathway', 'firstCourse', 'secondCourse']),
    filteredPathways() {
      var items = this.pathways
      var result = []

      // var entries = Object.entries(items)
      // console.log(entries)

      // for (const [index, item] of entries) {
      //   console.log(index + "   " + item.name)
      //   entries.splice(1, 1)
      // }

      for (var key in items) {
        if (key == null) {
          console.log("not null")
          break
        }
        var item = items[key]
        var courses = item.Courses
        var secondCourses = item.secondCourses

        if (courses != null) {
          for (var i = 0; i < courses.length; i++) {
            var course = courses[i]          
            if (course == this.filter) {
              result[key] = item
            }
          }
        }

        if (courses != null) {
          for (i = 0; i < courses.length; i++) {
            course = courses[i]
            if (course == this.firstCourse) {
              result[key] = item
            }
          }
        }

        if (secondCourses != null) {
          for (i = 0; i < secondCourses.length; i++) {
            course = secondCourses[i]
            if (course == this.secondCourse) {
              result[key] = item
            }
          }
        }
      }      

      if (result.length != 0) {
        return result
      }

      return items
    }
  }
}
</script>

<style scoped>

  #expansion-panel {
    height: 100%;
  }

</style>