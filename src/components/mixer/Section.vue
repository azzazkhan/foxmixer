<template>
  <div class="mixer-section">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MixerSection",
  data: () => ({}),
});
</script>
