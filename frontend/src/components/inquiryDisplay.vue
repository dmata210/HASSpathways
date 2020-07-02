<template>
  <div id="right_panel" style="font-family: 'Muli', sans-serif">
      
    <!-- Top panel which shows description of course name -->
    <v-card flat width="100%" color="#DCDCDC">
      <v-card-text>
        <!-- course name & description-->
        <v-card-title class="font-weight-black" style="font-size: 1em">
          <!-- course name -->
          {{ items.name }}
          <!-- send chips to the right -->
          <v-spacer></v-spacer>
          <!-- chips with special information -->
          <v-chip small color="orange" class="ma-2" text-color="white">IHSS 1140</v-chip>
          <v-chip small color="pink" class="ma-2" text-color="white">Fall terms annually</v-chip>
          <v-chip small color="green" class="ma-2" text-color="white">Any Prerequisites</v-chip>
        </v-card-title>

        <!-- course description -->
        <v-card-text class="font-weight-medium">
          {{ items.courseDescription }}
        </v-card-text>
      </v-card-text>
    </v-card>

    <br>

    <p class="font-weight-bold">Select one of the following compatible pathways </p>
    
    <!-- Navigational drawer for pathway details -->
    <!-- <div id="navigationalDrawer_and_coursePanel"> -->
    <div id="navigationalDrawer">
      <v-list color="#DCDCDC" width="30%" height="90%" nav class="py-3" id="rounded-right">
        <v-list-item-group class="ml-2 mt-2 mr-2" mandatory color="#fa8072">
          <v-list-item v-for="item in items.pathways" :key="item" @click="specifiedPathway = item">
            <v-list-item-content>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-list-item-title v-on="on">{{ item }}</v-list-item-title>
                </template>
                <span>{{ item }}</span>
              </v-tooltip>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    
    <!-- Information for each pathway -->
    <div id="coursePanel">
      <v-card width="100%" height="90%" outlined id="rounded-left">
        <!-- pathway name -->
        <v-card-title>
          Pathway: {{ specifiedPathway }}
        </v-card-title>

        <v-divider></v-divider>

        <!-- pathway description -->
        <v-card-text class="font-weight-black">
          Pathway description for:  {{ specifiedPathway }} <br> Artificial Intelligence is quickly becoming pervasive in our lives. Study how Artificial Intelligence can benefit from concepts and ideas from cognitive science, and explore the ways in which Artificial Intelligence is changing our lives.
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-btn class="font-weight-bold" text color="primary" @click="fromInquirySelector(specifiedPathway)">Select</v-btn>
          <!-- so now data has to transfer from here to the pathways page -->
        </v-card-actions>
      </v-card>
    </div>
    <!-- </div> -->

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['items'],
  data() {
    return {
      specifiedPathway: "a",
      selectedPathway: "a"
    }
  },
  methods: {
    fromInquirySelector(path_name) {
      // event bus emitter
      EventBus.$emit("inquiry_updatePathway", path_name)

      // change page view to pathway webpage
      window.location.replace("http://localhost:8080/#/pathway");
    }
  }
}

</script>


<style>

  /* #navigationalDrawer_and_coursePanel {
      width: 100%;
  } */

  #navigationalDrawer {
    float: left;
    width: 100%;
    height: 300px;
  }

  #coursePanel {
    position: absolute;
    left: 30%;
    width: 70%;
    height: 300px;
  }

  #rounded-right {
    border-radius: 6px 0px 0px 6px;
  }
  
  #rounded-left {
    border-radius: 0px 6px 6px 0px;
  }

  .card-actions {
    position: absolute;
    bottom: 0px;
    right: 1%;
  }

</style>