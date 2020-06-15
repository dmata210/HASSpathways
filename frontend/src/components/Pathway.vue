<template>
  <div>
    <NavigationDrawer :items="pathways"></NavigationDrawer>
  </div>
</template>

<script>

import NavigationDrawer from './NavigationDrawer'

export default {
  components: {
    NavigationDrawer
  },
  data() {
    return {
      pathways: [
        { name: 'Artificial Intelligence'},
        { name: 'Chinese Language'},
        { name: 'History'},
        { name: 'Creative Design and Innovation'},
        { name: 'Economics'},
        { name: 'Electronic Arts'},
        { name: 'Arts History, Theory, and Criticism'},
        { name: 'Behavioral and Cognitive Neuroscience'},
        { name: 'Design, Innovation, and Society'},
        { name: 'Economics of Biotech and Medical Markets'}
      ]
    }
  }
}

</script>

<style>

</style>
