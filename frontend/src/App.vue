<template>
  <v-app id="app">    
    <v-app-bar app absolute flat color="#c65353">
        <v-container fluid>
          <v-layout row class="mt-6">
            <v-flex md2 sm3 xs4>
              <v-toolbar-title id="title">HASSpathways</v-toolbar-title>
            </v-flex>
              
            <v-flex md6 sm5 xs2>
              <v-autocomplete :items="items" dense flat solo label="Search Courses" item-color="grey" color="#c65353" :search-input.sync="searchInput"></v-autocomplete>
            </v-flex>

            <v-flex md4 sm4 xs6>
              <v-btn id="button" to="/mypathways">Activity</v-btn>
              <v-btn id="button" to="/" class="mr-2">Explore</v-btn>
            </v-flex>

          </v-layout>
        </v-container>
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
            <ExpansionPanel :filter="searchInput"/>
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
    items: ['Minds and Machines', 'AI and Society', 'Are Humans Rational?', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'etc'],
    searchInput: ""
  }),
  components: {
    ProgressBar,
    ExpansionPanel
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
