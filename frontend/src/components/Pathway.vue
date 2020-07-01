<template>
    <v-container>
    <v-row>
      <v-col>
        <SideList></SideList>
      </v-col>
      <v-col>
        <pathwayDisplay></pathwayDisplay>
      </v-col>

    </v-row>
    </v-container>
</template>

<script>

import pathwayDisplay from './pathwayDisplay.vue'
import SideList from './SideList'

export default {
  components: {
    pathwayDisplay,
    SideList
  },
  data() {
    return {
    }
  },
  methods: {
  
    
  }
}

</script>

<style>
  .navDrawer_id {
    float: left;
    /* left: 1%; */
    /* width: 20%; */
  }

  .pathwayDisplay_id {
    position: absolute;
    left: 20%;
    width: 80%;
  }

</style>
