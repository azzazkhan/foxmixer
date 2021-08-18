<template>
  <div class="intro-wrapper">
    <div class="titles-wrapper">
      <h1 class="title">Welcome to FoxMixer</h1>
      <h3 class="description">The High Quality Bitcoin Mixer</h3>
    </div>
    <div class="logo-wrapper">
      <img src="../../assets/images/logo-big.svg" class="logo" alt="FoxMixer" />
    </div>
  </div>
</template>

<style lang="scss">
.intro-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 60%;
  margin: auto;
  .titles-wrapper {
    .title,
    .description {
      font-weight: 400;
      color: var(--color-primary);
    }
    .title {
      font-size: 56px !important;
      letter-spacing: -0.6px;
      margin-bottom: 16px;
    }
    .description {
      font-size: 34px;
    }
  }
  .logo-wrapper {
    margin-left: 40px;
    .logo {
      height: 134px;
      width: 134px;
      border-radius: 4px;
      transform: translateY(-30px);
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MixerIntro",
  data: () => ({}),
});
</script>
