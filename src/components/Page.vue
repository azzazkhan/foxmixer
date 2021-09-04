<template>
  <div class="page">
    <div class="page-content">
      <slot></slot>
    </div>
    <site-footer />
  </div>
</template>

<style lang="scss" scoped>
  .page {
    position: relative;
    overflow: auto;
    width: 100%;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: var(--header-height);
    padding-bottom: 2px;
    &.page-home {
      padding-top: 50px;
    }
    &.tutorial-page,
    &.api-page,
    &.faq-page,
    &.review-page {
      padding-top: 40px;
    }
    &.investing-page,
    &.contact-page {
      padding-top: 30px;
    }
    &.pgp-page {
      padding-top: 30px;
    }
    &.mix-complete-page {
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
      "site-footer": Footer
    }
  });
</script>
