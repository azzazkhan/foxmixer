<template>
  <navbar>
    <site-logo />
    <navigation-links />
  </navbar>
</template>

<script lang="ts">
import Vue from "vue";
// Components
import Navbar from "./Navbar.vue";
import Navigation from "./Navigation.vue";
import Logo from "./Logo.vue";

export default Vue.extend({
  name: "Header",
  components: {
    navbar: Navbar,
    "site-logo": Logo,
    "navigation-links": Navigation,
  },
});
</script>