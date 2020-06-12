<template>
  <v-app>

    <!-- NAVIGATION DRAWER COMPONENT -->
    <v-card height="500" width="400" elevation="0">
      <v-navigation-drawer width="400" permanent v-model="drawer" :mini-variant.sync="mini" color="#DCDCDC">
        
        <v-list-item>

          <!-- NAVIGATION OPEN/CLOSE -->
          <v-app-bar fixed elevation="0" color="#DCDCDC">
            <v-btn v-if=mini icon @click="mini=!mini">
              <v-icon class="material-icons">keyboard_arrow_right</v-icon>
            </v-btn>

            <v-btn v-else icon @click="mini=!mini">
              <v-icon class="material-icons">keyboard_arrow_left</v-icon>
            </v-btn>
          </v-app-bar>

        </v-list-item>

        <v-list>

          <!-- LIST OF COURSES/PATHWAYS -->
          <v-list-item class="ml-2" style="font-family: 'Muli', sans-serif" v-for="item in items" :key="item.name">
            
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

        </v-list>

      </v-navigation-drawer>
    </v-card>
    
  </v-app>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: ['items'],
  data() {
    return {
      drawer: true,
      mini: false
    }
  }
}
</script>

<style>

</style>