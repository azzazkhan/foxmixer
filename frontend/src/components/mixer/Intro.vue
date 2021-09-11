<template>
  <div :class="{'intro-section': true, animate}">
    <div class="text-wrapper">
      <h1 class="intro-title">
        <span :class="{welcome: true, visible: animateFirst}">Welcome</span>
        &nbsp;
        <span :class="{to: true, visible: animateSecond}">to</span>
        &nbsp;
        <span :class="{foxmixer: true, visible: animateThird}">FoxMixer</span>
      </h1>
      <h3 :class="{'intro-description': true, animate: animatedDescription}">
        The High Quality Bitcoin Mixer
      </h3>
    </div>
    <div class="logo-wrapper">
      <img src="../../assets/images/logo-big.svg" @contextmenu.prevent alt="FoxMixer" />
      <video v-if="animateLogo" @contextmenu.prevent class="video" autoplay muted preload="auto">
        <source src="../../assets/logo-animation.mp4" type="video/mp4" />
        FoxMixer Animated Logo
      </video>
    </div>
  </div>
</template>

<style src="../../assets/styles/pages/mixer_intro.scss" lang="scss" scoped></style>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "Intro",
    props: {
      animate: Boolean
    },
    data: () => ({
      animateFirst: false,
      animateSecond: false,
      animateThird: false,
      animatedDescription: false,
      animateLogo: false
    }),
    mounted() {
      setTimeout(() => {
        this.animateFirst = true;
      }, 1000);
      setTimeout(() => {
        this.animateSecond = true;
        this.animateLogo = true;
        setTimeout(() => {
          this.animateLogo = false;
        }, 4000);
      }, 1500);
      setTimeout(() => {
        this.animateThird = true;
      }, 2000);
      setTimeout(() => {
        this.animatedDescription = true;
      }, 2500);
    }
  });
</script>
