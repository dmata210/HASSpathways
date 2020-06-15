<template>
    <div class="ml-2 mr-2" style="font-family: 'Muli', sans-serif">
      <v-stepper alt-labels id="progress" class="elevation-0" v-model="currentStep">
        <v-stepper-header>
          <v-stepper-step :complete="currentStep > 1" :step="1"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="currentStep > 2" :step="2"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="currentStep > 3" :step="3"></v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <v-btn @click="nextStep(currentStep)">Continue</v-btn>
    </div>
</template>

<script>
export default {
  data() {
    return {
      steps: 3,
      currentStep: 1
    }
  },
  methods: {
    nextStep() {
      this.currentStep = this.currentStep + 1
    }
  }
}
</script>
