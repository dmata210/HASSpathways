<template>

  <v-app id="app">

    <!-- HEADER -->
    <v-app-bar app fixed flat color="#c65353" extension-height="100px">

        <v-container fluid>
          <v-layout row>

            <!-- TITLE -->
            <v-flex md2 sm11 xs11>
              <v-toolbar-title id="title">HASSpathways</v-toolbar-title>
            </v-flex>
            
            <!-- SEARCH BAR -->
            <v-flex md6>
              <v-combobox append-icon="" prepend-inner-icon="mdi-magnify" hide-details class="hidden-sm-and-down" clearable :items="items" dense flat solo label="Search Courses" item-color="#c65353" color="#c65353" :search-input.sync="searchInput" @update:search-input="handleInput"></v-combobox>
            </v-flex>

            <!-- BUTTONS -->
            <v-flex md4>
              <v-btn class="hidden-sm-and-down" depressed id="button" :to="{name: 'activity'}">Activity</v-btn>
              <v-btn class="hidden-sm-and-down mr-2" depressed id="button" :to="{name: 'home'}">Explore</v-btn>
              <v-tooltip transition="slide-x-reverse-transition" left color="white">
                <template v-slot:activator="{ on, attrs}">
                  <v-icon v-bind="attrs" v-on="on" class="hidden-sm-and-down mr-4" @click="clearProgress()" x-large id="button" color="white">mdi-delete-forever</v-icon>
                </template>
                <span style="color: black">Clear progress</span>
              </v-tooltip>
              
            </v-flex>

            <!-- MENU BAR -->
            <v-flex sm1 xs1>
              <v-icon @click="extension=!extension" class="hidden-md-and-up" color="white">fa-bars</v-icon>
            </v-flex>

          </v-layout>
        </v-container>

        <!-- HEADER EXTENSION -->
        <template v-if="(this.$vuetify.breakpoint.xs==true || this.$vuetify.breakpoint.sm==true) && extension==true" v-slot:extension>
          <v-layout column>

            <!-- SEARCH BAR -->
            <v-combobox class="mb-2" append-icon="" prepend-inner-icon="mdi-magnify" hide-details clearable :items="items" dense flat solo label="Search Courses" item-color="#c65353" color="#c65353" :search-input.sync="searchInput" @update:search-input="handleInput"></v-combobox>
            
            <!-- BUTTONS -->
            <div class="mb-2">
              <v-icon class="mr-4" @click="clearProgress()" x-large color="white">mdi-delete-forever</v-icon>
              <v-btn class="mr-2" depressed :to="{name: 'activity'}">Activity</v-btn>
              <v-btn depressed :to="{name: 'home'}">Explore</v-btn>
            </div>
            
          </v-layout>
        </template>
        
    </v-app-bar>

    <!-- ROUTER VIEW -->
    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- FOOTER -->
    <v-footer app>

      <v-layout column>
        <div>

          We love feedback!
          <a href="https://github.com/dmata210/HASSpathways/issues" target="_blank" style="text-decoration: none">

            <span style="color: #c65353">
              Github
              <i style="color: #c65353" class="fab fa-github"></i>
            </span>

          </a>

        </div>
      </v-layout>
      
      <v-spacer></v-spacer>

      <div>HASSpathways &copy; {{ new Date().getFullYear() }}</div>

    </v-footer>

  </v-app>

</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    items: ['Minds and Machines', 'AI and Society', 'Are Humans Rational?', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'etc'],
    searchInput: "",
    extension: false
  }),
  methods: {
    ...mapMutations(['setSelectedCourse1', 'setSelectedCourse2', 'setSelectedCourse3', 'incrementCount']),
    handleInput() {
      this.$root.$emit('changedFilter', this.searchInput)
    },
    clearProgress() {
      console.log("clear progress")
      this.setSelectedCourse1(null)
      this.setSelectedCourse2(null)
      this.setSelectedCourse3(null)
      this.incrementCount()
      this.$root.$emit('changeWhichCourse', "first")
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint)
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
