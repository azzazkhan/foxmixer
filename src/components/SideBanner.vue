<template>
  <div class="side-banner">New Tor Onion V3 URL</div>
</template>

<style lang="scss">
.side-banner {
  position: absolute;
  color: white !important;
  background-color: var(--color-primary);
  font-size: 1.05rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  top: 150px;
  left: -65px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 350px;
  transform: rotate(-45deg);
  transition: transform 0.2s ease;
  &:hover {
    transform: rotate(-45deg) scale(1.1);
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideBanner",
});
</script>
