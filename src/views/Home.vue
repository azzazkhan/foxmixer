<template>
  <div class="page page-home">
    <MixerSection>
      <MixerIntro />
      <div class="widget-wrapper">
        <MixerWidget />
        <MixerCode />
      </div>
      <center>
        <button class="start-mix-btn">Start Mixing</button>
      </center>
    </MixerSection>
  </div>
</template>

<style lang="scss">
.widget-wrapper {
  width: 50%;
  margin: 50px auto;
}
.start-mix-btn {
  background-color: #03a9f4;
  color: white;
  font-size: 30px;
  font-weight: bold;
  height: 70px;
  min-width: 90px;
  padding: 0 30px;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.2s ease;
  margin: 0 auto 50px;
  &:hover {
    opacity: 0.9;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import MixerSection from "../components/mixer/Section.vue";
import MixerIntro from "../components/mixer/Intro.vue";
import MixerWidget from "../components/mixer/Widget.vue";
import MixerCode from "../components/mixer/Code.vue";

export default Vue.extend({
  name: "Home",
  components: {
    MixerSection,
    MixerIntro,
    MixerWidget,
    MixerCode,
  },
});
</script>
