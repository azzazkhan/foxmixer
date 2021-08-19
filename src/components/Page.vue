<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.page {
  position: relative;
  margin-top: var(--header-height);
  width: 100%;
  height: calc(100vh - var(--header-height));
  overflow: auto;
  &.page-home {
    padding-top: 50px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Page",
});
</script>