<template>
  <div :class="{
    'single-icon-wrapper': true,
    'animate-icon': animate
  }" :id="ref_id">
    <div class="icon-wrapper">
      <img
        v-if="icon"
        :src="require(`../../assets/images/icon_${icon}.png`)"
        alt="Image not available"
      />
    </div>
    <div class="title-wrapper">
      <slot name="title" />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
    <div class="divider"></div>
  </div>
</template>

<style lang="scss">
.single-icon-wrapper {
  margin: 0 20px;
  &.wide {
    @media (min-width: 428px) {
      grid-column: span 2 / span 2;
      margin: 0 10px;
    }
    @media (min-width: 880px) {
      grid-column: span 1 / span 1;
    }
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 130px;
      transform: scale(0);
      @media (min-width: 880px) {
        height: 160px;
      }
    }
  }
  .title-wrapper > * {
    color: var(--color-primary);
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    display: block;
    height: 70px;
    margin: 25px 0 5px;
    @media (min-width: 880px) {
      margin: 35px 0 5px;
      font-size: 30px;
    }
  }
  .content-wrapper {
    p {
      color: #000000;
      font-size: 14px;
      line-height: 19px;
      text-align: justify;
      margin: 0 10px 30px;
      @media (min-width: 428px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media (min-width: 880px) {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
  .divider {
    height: 2px;
    background-color: #e1f5fe;
    width: 100%;
    margin: 30px 10px 40px;
    @media (min-width: 880px) {
      background: transparent;
    }
  }
  &.animate-icon .icon-wrapper img {
    animation-name: scaleShakeIcon;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }
}

@keyframes scaleShakeIcon {
  0% {
    transform: rotate(0deg) scale(0);
  }
  50% {
    transform: rotate(0deg) scale(1.1);
  }
  65% {
    transform: rotate(10deg) scale(1);
  }
  90% {
    transform: rotate(-15deg) scale(1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IconSection",
  props: {
    icon: String,
  },
  data: () => ({
    ref_id: `icon_section_${Math.floor(Math.random() * 999999)}_${Math.floor(
      Math.random() * 999999
    )}`,
    animate: false,
  }),
  mounted() {
    const scrollElement = document.querySelector(".page") as HTMLElement | null;
    // Break the functionality if no scroller is defined
    if (!scrollElement) return false;
    // Put the task at the end of queue
    setTimeout(() => {
      scrollElement.addEventListener("scroll", this.handleScroll);
    }, 0);
  },
  // Remove the event listener the the componenet is unmounted
  destroyed() {
    // Put the task queue in the end
    setTimeout(() => {
      document
        .querySelector(".page")
        ?.removeEventListener("scroll", this.handleScroll);
    }, 0);
  },
  methods: {
    handleScroll(event: Event) {
      const elem = document.getElementById(this.ref_id) as HTMLElement;
      if (elem.getBoundingClientRect().top <= 340) {
        this.animate = true;
        (event.target as HTMLElement).removeEventListener(
          "scroll",
          this.handleScroll
        );
      }
    },
  },
});
</script>