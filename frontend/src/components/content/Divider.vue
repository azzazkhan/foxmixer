<template>
  <div class="text-section-horizontal-divider"></div>
</template>

<style lang="scss" scoped>
.text-section-horizontal-divider {
  background-color: #e1f5fe;
  height: 2px;
  width: 90%;
  margin: 40px auto;
  @media (min-width: 880px) {
    width: 95%;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HorizontalDivider",
});
</script>