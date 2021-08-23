<template>
  <div class="image-section">
    <div class="content-side">
      <slot />
    </div>
    <div class="figure-side">
      <img
        v-if="image"
        :src="require(image)"
        class="figure-image"
        alt="Image not available"
      />
      <div v-else class="figure-wrapper">
        <slot name="figure" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FigureSection",
  props: {
    image: String,
  },
});
</script>