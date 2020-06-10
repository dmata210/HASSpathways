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
        { name: 'Artificial Intelligence'},
        { name: 'Chinese Language'},
        { name: 'History'},
        { name: 'Creative Design and Innovation'},
        { name: 'Economics'},
        { name: 'Electronic Arts'},
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

.material-icons {
    cursor: pointer;
}

</style>