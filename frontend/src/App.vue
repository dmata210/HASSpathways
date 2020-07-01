<template>
  <v-app>

    <!-- HEADER -->
    <div id="header" class="mb-2">
      <p class="mt-6 ml-4">HASSpathways</p>
    </div>
  <v-container>
    <v-row>
    <!-- BUTTONS -->
    <div class="mt-2 ml-2 mb-2" style="font-family: 'Muli', sans-serif">
      <v-btn to="/pathway">Explore pathways</v-btn>
      <v-btn id="button" to="/mypathways" class="mr-2">Activity</v-btn>
    </div>
    </v-row>
    
    <ProgressBar></ProgressBar>
 
  </v-container>
  <router-view></router-view>

  </v-app>
</template>

<script>

import ProgressBar from './components/ProgressBar'

export default {
  name: 'App',
  components: {
    ProgressBar
  },
  created() {
    
  }
};

</script>

<style>

#button {
  float: right;
}

#header {
  height: 70px;
  background-color: #fa8072;
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 20px;
}

</style>
