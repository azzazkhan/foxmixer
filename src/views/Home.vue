<template>
  <page class="page-home">
    <v3-banner />
    <mixer />
  </page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";
import Banner from "../components/header/Banner.vue";
import Mixer from "../components/mixer/index.vue";

export default Vue.extend({
  name: "Home",
  components: {
    page: Page,
    "v3-banner": Banner,
    mixer: Mixer,
  },
});
</script>
