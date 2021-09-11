<template>
  <header>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  color: white;
  background-color: var(--color-primary);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  width: 100%;
  padding: 0 30px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
});
</script>