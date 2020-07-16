<template>

  <div>
    <v-list id="list" class="overflow-y-auto" height="250px">
      Select a {{ bucketNumber }} course
      <v-divider></v-divider>
      <v-list-group color="#c65353" v-for="(course, i) in path.thirdCourses" :key="i">
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
  </div>
    
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  props: ['path'],
  data() {
    return {
      bucketNumber: 'third'
    }
  },
  methods: {
    ...mapMutations(['setSelectedCourse3']),
    selectCourse(course) {
      this.setSelectedCourse3(course);
      console.log(course)
    }
  }
}
</script>

<style scoped>

</style>