<template>
  <div class="angled-banner">
    <router-link to="#news">New Tor Onion V3 URL</router-link>
  </div>
</template>

<style lang="scss">
  .angled-banner {
    position: absolute;
    color: white !important;
    background-color: var(--color-primary);
    top: 45px;
    left: -65px;
    font-size: 1.05rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    padding: 0;
    line-height: 1.1em;
    transform: rotate(-45deg);
    transition: transform 0.2s ease;
    &:hover {
      transform: rotate(-45deg) scale(1.1);
    }
    & > * {
      color: white !important;
      text-decoration: none !important;
      width: 140px;
    }
    @media (min-width: 1100px) {
      width: 350px;
      top: 80px;
      left: -70px;
      height: 2.4rem;
      & > * {
        width: 100%;
      }
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "Banner"
  });
</script>
