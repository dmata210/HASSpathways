<template>
 
  <div id="navDrawer" style="padding-right: 7px">
    <v-navigation-drawer class="rounded" width="100%" height="490px" v-model="drawer" :mini-variant.sync="mini" color="#DCDCDC">
    
      <v-list-item>

        <!-- NAVIGATION OPEN/CLOSE -->
        <v-app-bar fixed elevation="0" color="#DCDCDC">
          <v-btn v-if=mini icon @click="setDrawer()">
            <!-- open -->
            <v-icon class="material-icons">keyboard_arrow_right</v-icon>
          </v-btn>

          <v-btn v-else icon @click="setDrawer()">
            <!-- close -->
            <v-icon class="material-icons">keyboard_arrow_left</v-icon>
          </v-btn>
        </v-app-bar>

      </v-list-item>

      <v-list nav>

        <!-- LIST OF COURSES/PATHWAYS -->
        <v-list-item-group class="ml-2 mt-2" mandatory id="listItemGroup" elevation="0" color="#fa8072">

          <v-list-item @click="setPath(item)" style="font-family: 'Muli', sans-serif" v-for="item in items" :key="item.name">

            <v-tooltip right>
              
              <template v-slot:activator="{ on }">

                <v-list-item-content>

                  <v-list-item-title v-on="on" id="textButtons">{{ item.name }}</v-list-item-title>

                </v-list-item-content>

              </template>

              <span>{{ item.name }}</span>

            </v-tooltip>
          
          </v-list-item>
          
        </v-list-item-group>

      </v-list>

    </v-navigation-drawer>
  </div>
    
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'NavigationDrawer',
  props: ['items'],
  data() {
    return {
      drawer: true,
      mini: false,
      specifiedPath: ""
    }
  },
  methods: {
    ...mapMutations(['setSelectedPathway', 'increment']),
    setPath(path) {
      this.$emit("pathSelection", path)
      this.setSelectedPathway(path.name)
      console.log(this.pathway)
    },
    setDrawer(){
      if (this.mini) {
        console.log("opened")
        this.$emit("drawerSelector", "open")
        this.mini = false;
      } else {
        console.log("closed")
        this.$emit("drawerSelector", "close")
        this.mini = true;
      }
    }
  },
  computed: mapGetters(['pathway']),
  created() {
    this.setPath(this.items[0])
    console.log(this.items[0])
  }
  // mounted: {

  // },
}

</script>

<style>

  #textButtons {
    font-size: 1.0vw;
  }

  .rounded {
    border-radius: 6px;
  }

  #listItemGroup {
    margin-right: 20px;
  }

</style>
