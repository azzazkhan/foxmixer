<template>
  <div class="page">
    <slot></slot>
    <site-footer />
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
  margin-top: var(--header-height);
  width: 100%;
  height: calc(100vh - var(--header-height));
  overflow: auto;
  padding-bottom: 2px;
  &.page-home {
    padding-top: 50px;
  }
  &.tutorial-page {
    padding-top: 40px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Page",
  components: {
    "site-footer": Footer,
  },
});
</script>