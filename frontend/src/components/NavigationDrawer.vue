<template>
 
<div>
  
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
