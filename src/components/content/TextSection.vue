<template>
  <div class="text-section">
    <div class="title-wrapper">
      <slot name="title"></slot>
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-section {
  width: 90%;
  margin: 0 auto;
  @media (min-width: 880px) {
    max-width: 1000px;
  }
  .title-wrapper {
    & > * {
      color: var(--color-primary);
      font-size: 30px;
      margin: 30px 0 15px;
      line-height: 32px;
    }
  }
  .content-wrapper {
    color: #000000;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: normal;
    a {
      color: -webkit-link;
      text-decoration: none;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",
  data: () => ({}),
});
</script>