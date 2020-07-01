<template>
 
  <v-list
  color="#DCDCDC"  class="py-3" id="rounded-right"
        >
          <v-subheader>PATHWAYS {{selectedPathwayID}}</v-subheader>
          <v-list-item-group v-model="selectedPathwayID" class="ml-2 mt-2 mr-2" mandatory color="#fa8072">
            <v-list-item
              v-for="pathway in listItems" :key="pathway.id" @click="selectPathway"
            >
              
              <v-list-item-content>
                <v-list-item-title>{{pathway.name}}</v-list-item-title>
                <v-list-item-subtitle>{{pathway.id}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        
</template>

<script>



export default {
  name: 'SideList',

  data() {
    return {
      selectedPathwayID:"",
      
    }
  },
  methods: {
    selectPathway: function(){
      console.log("here")
      this.$store.commit("setSelectedPathway", this.selectedPathwayID)
    }
  },
 
  created() {
  },

  computed: {
    listItems () {
      return this.$store.state.statepathways
    },
  }

}

</script>

<style>



</style>
