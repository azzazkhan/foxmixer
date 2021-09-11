<template>
  <div class="steps-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.steps-wrapper {
  position: relative;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StepsWrapper",
});
</script>