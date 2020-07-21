<template>
  <v-app id="app">    
    <v-app-bar app fixed flat color="#c65353" extension-height="100px">
        <v-container fluid>
          <v-layout row>
            <v-flex md2 sm11 xs11>
              <v-toolbar-title id="title">HASSpathways</v-toolbar-title>
            </v-flex>
              
            <v-flex md7>
              <v-combobox append-icon="" prepend-inner-icon="mdi-magnify" hide-details class="hidden-sm-and-down" clearable :items="items" dense flat solo label="Search Courses" item-color="#c65353" color="#c65353" :search-input.sync="searchInput" @update:search-input="handleInput"></v-combobox>
            </v-flex>

            <v-flex md3>
              <v-btn class="hidden-sm-and-down" depressed id="button" :to="{name: 'activity'}">Activity</v-btn>
              <v-btn class="hidden-sm-and-down mr-2" depressed id="button" :to="{name: 'home'}">Explore</v-btn>
            </v-flex>

            <v-flex sm1 xs1>
              <v-icon @click="extension=!extension" class="hidden-md-and-up" color="white">fa-bars</v-icon>
            </v-flex>

          </v-layout>
        </v-container>

        <template v-if="(this.$vuetify.breakpoint.xs==true || this.$vuetify.breakpoint.sm==true) && extension==true" v-slot:extension>
          <v-layout column>
            <v-combobox class="mb-2" append-icon="" prepend-inner-icon="mdi-magnify" hide-details clearable :items="items" dense flat solo label="Search Courses" item-color="#c65353" color="#c65353" :search-input.sync="searchInput" @update:search-input="handleInput"></v-combobox>
            
            <div class="mb-2">
              <v-btn class="mr-2" depressed :to="{name: 'activity'}">Activity</v-btn>
              <v-btn depressed :to="{name: 'home'}">Explore</v-btn>
            </div>
            
          </v-layout>
        </template>
        
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app >
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

export default {
  name: 'App',
  data: () => ({
    items: ['Minds and Machines', 'AI and Society', 'Are Humans Rational?', 'Chinese 1', 'Chinese 2', 'Chinese 3', 'Chinese 4', 'etc'],
    searchInput: "",
    extension: false
  }),
  methods: {
    handleInput() {
      this.$root.$emit('changedFilter', this.searchInput)

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
