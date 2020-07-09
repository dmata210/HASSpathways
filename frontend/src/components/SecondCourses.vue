<template>

  <div>
    <v-list id="list" class="overflow-y-auto">
      Select a {{ bucketNumber }} course
      <v-divider></v-divider>
      <v-list-group color="#c65353" v-for="(course, i) in path.secondCourses" :key="i">
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
      bucketNumber: 'second',
      nextBucketNumber: 'third'
    }
  },
  methods: {
    ...mapMutations(['setSelectedCourse2']),
    selectCourse(course) {
      this.setSelectedCourse2(course);
      console.log(course)
      this.$emit('nextBucket', this.nextBucketNumber)
    }
  }
}
</script>

<style scoped>

</style>