<template>
  <div class="progress-bar-wrapper">
    <div
      class="progress-bar"
      :style="{'width': progressBarWidth + '%'}"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar-wrapper {
  background: #e1f5fe;
  width: 100%;
  height: 16px;
  border-radius: 10px;
  .progress-bar {
    background-color: var(--color-primary);
    height: 100%;
    width: 0%;
    border-radius: 10px;
    transition: width 2s ease-out;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      progressBarWidth: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.setBarWidth(this.value);
    }, 50);
  },
  watch: {
    value(width) {
      this.setBarWidth(width);
    },
  },
  methods: {
    setBarWidth(width: number) {
      this.progressBarWidth =
        width && /^\d\d*(\.\d+)?$/.test(width.toString())
          ? width
          : this.progressBarWidth;
    },
  },
});
</script>