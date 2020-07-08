<template>
  <v-app id="app">

    <!-- HEADER -->
    <!-- <div id="header">
      <p class="mt-6 ml-4">
        HASSpathways
        <v-btn id="button" to="/mypathways" class="mr-2">Activity</v-btn>
        <v-btn id="button" to="/#" class="mr-2">Explore</v-btn>
      </p>
      <v-autocomplete v-model="value" :items="items" dense solo label="Search Courses"></v-autocomplete>
    </div> -->

    
    <v-app-bar app absolute flat color="#c65353">
        <v-row class="mt-6">
          <v-col cols=2>
            <v-toolbar-title id="title">HASSpathways</v-toolbar-title>
          </v-col>

          <v-col cols=6>
            <v-autocomplete :items="items" dense solo label="Search Courses"></v-autocomplete>
          </v-col>

          <v-col cols=2>
            <v-btn block id="button" to="/mypathways" class="mr-2">Explore</v-btn>
          </v-col>

          <v-col cols=2>
            <v-btn block id="button" to="/mypathways" class="mr-2">Activity</v-btn>
          </v-col>
        </v-row>      
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols=12>
            <ProgressBar/>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols=12>
            <ExpansionPanel/>
          </v-col>
        </v-row>
      </v-container>

      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>

import ProgressBar from './components/ProgressBar'
import ExpansionPanel from './components/ExpansionPanel'

export default {
  name: 'App',
  data: () => ({
    items: ['Minds and Machines', 'AI and Society', 'Are Humans Rational?', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'etc']
  }),
  components: {
    ProgressBar,
    ExpansionPanel
  },
  created() {
    
  }
};

</script>

<style>

/* #button {
  float: right;
} */

#header {
  height: 70px;
  background-color: #fa8072;
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 20px;
}

#title {
  color: white;
}

#app {
  font-family: 'Muli', sans-serif;
}

#list {
  height: 200px;
}

#expansion-header {
  color: white;
}

</style>
