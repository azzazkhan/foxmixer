<template>
  <div>
    <Header />
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      appearance: none;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Header from "./components/header/index.vue";

  export default Vue.extend({
    name: "App",
    components: {
      Header
    }
  });
</script>
