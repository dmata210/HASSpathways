<template>
  <v-app>

    <!-- HEADER -->
    <div id="header" class="mb-2">
      <p class="mt-6 ml-4">HASSpathways</p>
    </div>

    <!-- BUTTONS -->
    <div class="mt-2 ml-2 mb-2" style="font-family: 'Muli', sans-serif">
      <v-btn class="mr-4" to="/inquiry">Explore inquiry courses</v-btn>
      <v-btn to="/pathway">Explore pathways</v-btn>
      <v-btn id="button" to="/mypathways" class="mr-2">Activity</v-btn>
    </div>

    <!-- PROGRESS BAR -->
    <div class="ml-2 mr-2" style="font-family: 'Muli', sans-serif">
      <v-stepper alt-labels id="progress" class="elevation-0">
        <v-stepper-header>
          <v-stepper-step step="1"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"></v-stepper-step>
        </v-stepper-header>
      </v-stepper>
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

#header {
  height: 70px;
  background-color: #fa8072;
  color: white;
  font-family: 'Muli', sans-serif;
  font-size: 20px;
}

</style>
