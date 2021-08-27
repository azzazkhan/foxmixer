<template>
  <div
    v-if="left"
    :class="{
      'step': true,
      'completed': completed,
      'ongoing': ongoing,
      'pending': pending,
    }"
    :style="{
      'left': (left || 0) + '%'
    }"
  >
    <div v-if="completed" class="arrow-wrapper">
      <svg width="25" height="12.5">
        <polygon points="0,0 25,0 12.5,10" />
      </svg>
    </div>
    <div v-if="ongoing" class="loader-wrapper">
      <div class="circle-outer">
        <div class="circle-inner"></div>
      </div>
      <div class="progress-wrapper">
        <v-progress-circular
          :size="33"
          :width="2"
          color="#01579b"
          indeterminate
        ></v-progress-circular>
      </div>
    </div>
    <div v-if="pending" class="circle-wrapper">
      <div class="white-circle"></div>
    </div>
    <div class="text-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step {
  position: absolute;
  align-items: center;
  bottom: 4.5px;
  transform: translate(-50%, 100%) scale(1);
  &:not(.pending) {
    .text-wrapper,
    .arrow-wrapper {
      animation-name: scaleStep;
      animation-delay: 100ms;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
    }
    .loader-wrapper {
      animation-name: scaleCircleProgress;
      animation-delay: 100ms;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
    }
  }
  .arrow-wrapper,
  .loader-wrapper,
  .circle-wrapper {
    position: relative;
  }
  .arrow-wrapper svg {
    position: absolute;
    top: 4.5px;
    left: 50%;
    transform: translateX(-50%);
    * {
      fill: var(--color-primary);
    }
  }
  .loader-wrapper {
    .progress-wrapper,
    .circle-outer {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: -4px;
    }
    .circle-outer {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      border: 1px solid var(--color-primary);
      border-radius: 50%;
      .circle-inner {
        background-color: var(--color-primary);
        height: 23px;
        width: 23px;
        border-radius: 50%;
      }
    }
  }
  .circle-wrapper .white-circle {
    position: absolute;
    background-color: white;
    left: 50%;
    top: -4px;
    height: 30px;
    width: 30px;
    border: 1px solid var(--color-primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .text-wrapper {
    color: black;
    text-align: center;
    max-width: 180px;
    margin-top: 20px;
    h1 {
      font-size: 18px;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
    }
    p {
      font-size: 18px;
      max-width: 120px;
      margin: -4px auto 0;
    }
  }
}

@keyframes scaleStep {
  0% {
    transform: translateY(0%) scale(1);
  }
  50% {
    transform: translateY(10%) scale(1.5);
  }
  0% {
    transform: translateY(0%) scale(1);
  }
}
@keyframes scaleCircleProgress {
  0% {
    transform: translateY(0%) scale(1);
  }
  50% {
    transform: translateY(10%) scale(1.5);
  }
  0% {
    transform: translateY(0%) scale(1);
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Step",
  props: {
    completed: Boolean,
    ongoing: Boolean,
    pending: Boolean,
    left: Number,
  },
});
</script>