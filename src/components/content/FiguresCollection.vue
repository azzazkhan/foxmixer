<template>
  <div class="figures-collection"></div>
</template>

<script lang="ts">
import FigureSection from "./FigureSection.vue";

import Vue from "vue";
export default Vue.extend({
  name: "FiguresCollection",
  components: {
    "figure-section": FigureSection,
  },
});
</script>