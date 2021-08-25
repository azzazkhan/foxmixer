<template>
  <page class="investing-page">
    <div class="padding-wrapper">
      <div class="investing-container">
        <h1 class="entry-title">Investing</h1>
        <p class="entry-description">
          For more information on investing options, contact us at investing(at)foxmixer.com
        </p>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
.padding-wrapper {
  padding: 0 40px;
}
.investing-container {
  max-width: 1000px;
  margin: 0 auto;
  .entry-title {
    font-size: 56px;
    color: var(--color-primary);
    margin-bottom: 10px;
  }
  .entry-description {
    color: black;
    font-size: 18px;
  }
  h4 {
    color: var(--color-primary);
    font-size: 30px;
    margin: 30px 0 15px;
    line-height: 32px;
  }
  p {
    color: black;
    font-size: 18px;
    line-height: 24px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";

export default Vue.extend({
  name: "Invest",
  components: {
    page: Page,
  },
});
</script>
