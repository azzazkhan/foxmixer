<template>
  <center>
    <div class="mixer-section">
      <intro-section />
      <mixer-widget />
      <mixer-code />
      <center>
        <button class="start-mix-btn">Start Mixing</button>
      </center>
    </div>
  </center>
</template>

<style lang="scss" scoped>
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
import Intro from "./Intro.vue";
import Widget from "./Widget.vue";
import Code from "./Code.vue";

export default Vue.extend({
  name: "Mixer",
  components: {
    "intro-section": Intro,
    "mixer-widget": Widget,
    "mixer-code": Code,
  },
});
</script>
