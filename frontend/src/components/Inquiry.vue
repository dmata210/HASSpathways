<template>
  <v-app>
    <NavigationDrawer :items="inquiries"></NavigationDrawer>
  </v-app>
</template>

<script>

import NavigationDrawer from './NavigationDrawer'

export default {
  components: { NavigationDrawer },
  data() {
    return {
      inquiries: [
        { name: 'AI and Society'},
        { name: 'The American Dream'},
        { name: 'Are Humans Rational?'},
        { name: 'The Art of Listening'},
        { name: 'Behind the Television Screen'},
        { name: 'Century of the Gene'},
        { name: 'Designing Climate Justice'},
        { name: 'Documentary in the 21st Century'},
        { name: 'Fiction: From Film to the Internet'},
        { name: 'The Genome and You'}
      ]
    }
  }
}

</script>

<style>

</style>