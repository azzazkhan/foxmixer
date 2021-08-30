<template>
  <router-link to="/mixer" class="logo-wrapper">
    <img src="../../assets/images/logo.svg" class="icon" alt="FoxMixer" />
    <span class="title-wrapper">FoxMixer</span>
  </router-link>
</template>

<style lang="scss" scoped>
  .logo-wrapper {
    color: white !important;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      flex-shrink: 0;
      height: 32px;
      width: 32px;
      margin: 0 22px 5px 1px;
    }
    .title-wrapper {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "Logo"
  });
</script>
