<template>
  <v-app>
    <Header />
    <v-main>
      <SideBanner />
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
main {
  position: relative;
}

.page {
  margin-top: var(--header-height);
  &.page-home {
    padding-top: 70px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import SideBanner from "./components/SideBanner.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    SideBanner,
  },
});
</script>
