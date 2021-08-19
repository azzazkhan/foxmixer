<template>
  <div class="intro-section">
    <div class="text-wrapper">
      <h1 class="intro-title">Welcome to FoxMixer</h1>
      <h3 class="intro-description">The High Quality Bitcoin Mixer</h3>
    </div>
    <div class="logo-wrapper">
      <img src="../../assets/images/logo-big.svg" alt="FoxMixer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-section {
  color: var(--color-primary);
  display: flex;
  width: 80%;
  margin-bottom: 60px;
  .text-wrapper {
    text-align: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    .intro-title {
      font-size: 56px;
      line-height: 1.3em;
      letter-spacing: -1px;
      margin-bottom: 12px;
    }
    .intro-description {
      font-size: 34px;
      line-height: 1.2em;
    }
  }
  .logo-wrapper {
    display: none;
    img {
      height: 134px;
      width: 134px;
      border-radius: 4px;
    }
  }
  @media (min-width: 1100px) {
    padding-left: 10px;
    width: auto;
    display: inline-flex;
    margin-left: 50px;
    .text-wrapper {
      text-align: left;
      justify-content: flex-start;
    }
    .logo-wrapper {
      display: block;
      position: relative;
      left: 50px;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Intro",
});
</script>
