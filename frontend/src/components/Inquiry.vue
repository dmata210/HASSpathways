<template>
  <v-app>
    <i v-if=drawer class="material-icons" @click="drawer=!drawer">keyboard_arrow_left</i>
    <i v-else class="material-icons" @click="drawer=!drawer">keyboard_arrow_right</i>
    <v-navigation-drawer v-model="drawer" color="#D3D3D3" height="450" width="256" class="mt-4">
      <ul class="mt-4 mr-2">
        <li class="mt-2" v-for="item in items" :key="item.name">
          {{ item.name }}
        </li>
      </ul>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      drawer: true,
      items: [
        { name: 'AI and Society'},
        { name: 'The American Dream'},
        { name: 'Are Humans Rational?'},
        { name: 'The Art of Listening'},
        { name: 'Behind the Television Screen'},
        { name: 'Century of the Gene'},
        { name: '...'}
      ]
    }
  }
}

</script>

<style>

li {
  list-style-type: none;
  font-family: 'Muli', sans-serif;
}

</style>