<template>
 
  <!-- <v-card height="500" width="400" elevation="0"> -->
  <div id="navDrawer">
    <v-navigation-drawer width="100%" height="500" v-model="drawer" :mini-variant.sync="mini" color="#DCDCDC">
    
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

      <v-list>

        <!-- LIST OF COURSES/PATHWAYS -->
        <v-list-item-group elevation="0" color="#fa8072">

          <v-list-item @click="setPath(item)" style="font-family: 'Muli', sans-serif" v-for="item in items" :key="item.name">
          
            <v-list-item-content>
              <v-list-item-title id="textButtons">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          
          </v-list-item>
          
        </v-list-item-group>

      </v-list>

    </v-navigation-drawer>
  </div>
  <!-- </v-card> -->
    
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
    ...mapMutations(['setSelectedCourse1']),
    setPath(path) {
      this.$emit("pathSelection", path)

      this.$store.commit('setSelectedCourse1', path.name)
    },
    setDrawer(){
      if (this.mini) {
        console.log("opened")
        this.$emit("drawerSelector", "open")
        this.mini = false;
      }else{
        console.log("closed")
        this.$emit("drawerSelector", "close")
        this.mini = true;
      }
    }
  },
  computed: mapGetters(['progressBarStatus']),
  mounted: {

  },
  
}
</script>

<style>
  #textButtons {
    font-size: 0.8vw;
  }

 

</style>
