<template>
  <div class="icons-section-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icons-section-wrapper {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 428px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 880px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IconsSectionWrapper",
  data: () => ({}),
});
</script>