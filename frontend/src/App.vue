<template>
  <v-app>
    <v-card color="#fa8072">
      <v-card-text class="mb-2 mt-2" style="font-family: 'Muli', sans-serif; font-size: 20px">
        HASSpathways
        <v-btn id="button" to="/mypathways">My Pathways</v-btn>
      </v-card-text>

    </v-card>

    <div class="mt-2 ml-2 mb-2" style="font-family: 'Muli', sans-serif">
      <v-btn class="mr-4" to="/inquiry">Explore inquiry courses</v-btn>
      <v-btn to="/pathway">Explore pathways</v-btn>
    </div>

    <div class="ml-2 mr-2" id="progress" style="font-family: 'Muli', sans-serif">
      <v-stepper alt-labels>
        <v-stepper-header>
          <v-stepper-step step="1">Step 1</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2">Step 2</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Step 3</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </div>

    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};

</script>

<style>

#button {
  float: right;
}

#progress {
  width: 500px;
}

</style>
