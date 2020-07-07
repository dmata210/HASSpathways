<template>
  <v-app>

    <!-- HEADER -->
    <div id="header" class="mb-2">
      <p class="mt-6 ml-4">
        HASSpathways
        <v-btn id="button" to="/mypathways" class="mr-2">Activity</v-btn>
      </p>
    </div>

    <div id="searchBar">
      <v-autocomplete v-model="value" :items="items" dense solo label="Search Courses"></v-autocomplete>
    </div>

    <ProgressBar />

    <router-view></router-view>

  </v-app>
</template>

<script>

import ProgressBar from './components/ProgressBar'

export default {
  name: 'App',
  data: () => ({
    items: ['Minds and Machines', 'AI and Society', 'Are Humans Rational?', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'etc']
  }),
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

#searchBar{
  width: 100%;
}

</style>
