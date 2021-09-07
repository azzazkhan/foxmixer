<template>
  <div>
    <Header />
    <v-app>
      <v-main>
        <Loader />
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Header from "./components/header/index.vue";
  import Loader from "./components/LoadingOverlay.vue";

  export default Vue.extend({
    name: "App",
    components: {
      Header,
      Loader
    },
    created() {
      // const loader = document.getElementById("loader");
      // if (loader) {
      //   loader.style.display = "none";
      // }
    }
  });
</script>
