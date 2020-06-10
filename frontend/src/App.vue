<template>
  <v-app>
    <v-card color="#fa8072">
      <v-card-text class="mb-2 mt-2" style="font-family: 'Muli', sans-serif; font-size: 20px">
        HASSpathways
        <v-btn id="button" to="/mypathways">My Pathways</v-btn>
      </v-card-text>

    </v-card>

    <div class="mt-2 ml- mb-2" style="font-family: 'Muli', sans-serif">
      <v-btn class="mr-4" to="/inquiry">Explore inquiry courses</v-btn>
      <v-btn to="/pathway">Explore pathways</v-btn>
    </div>

    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};

</script>

<style>

#button {
  float: right;
}
</style>
