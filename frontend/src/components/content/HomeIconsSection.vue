<template>
  <icons-wrapper>
    <icon-section icon="alarm">
      <template v-slot:title>
        <h1>FoxMixer is <strong>fast</strong></h1>
      </template>
      <p>
        You can decide whether your bitcoins should be credited back to you as quickly as possible, or if a time delay should be added. A delayed and randomized payout increases your privacy even more, as it makes an analysis of time correlation between the payin and payout process impossible.
      </p>
    </icon-section>
    <icon-section icon="person">
      <template v-slot:title>
        <h1>FoxMixer means <strong>privacy</strong></h1>
      </template>
      <p>
        You can decide whether your bitcoins should be credited back to you as quickly as possible, or if a time delay should be added. A delayed and randomized payout increases your privacy even more, as it makes an analysis of time correlation between the payin and payout process impossible.
      </p>
    </icon-section>
    <icon-section class="wide" icon="help">
      <template v-slot:title>
        <h1>FoxMixer is <strong>supportive</strong></h1>
      </template>
      <p>
        Even though FoxMixer is highly optimized and works 24/7, it may always happen that you have a question or there is something else we can help you with. Just send our support team a message, and we will take care of your concern.
      </p>
    </icon-section>
    <icon-section icon="secure">
      <template v-slot:title>
        <h1>FoxMixer is <strong>secure</strong></h1>
      </template>
      <p>
        For every created mix, you will get a signed Letter of Guarantee which serves as a security certificate through the entire mixing process. Beyond that, FoxMixer was coded in a very modern programming language that works highly accurate and tests the servers and all systems automatically. The low minimum payin amount is perfect for trying out the mixer with a small amount of bitcoins first, in order to get a feeling of how it behaves. We are sure, you will love it.
      </p>
    </icon-section>
    <icon-section icon="rotate">
      <template v-slot:title>
        <h1>FoxMixer is <strong>responsive</strong></h1>
      </template>
      <p>
        You will have a great time experiencing FoxMixer throughout all platforms. A highly dynamic layout and content loader makes delays a thing of the past. Using our new and interactive mobile layout allows you to mix your coins even on the go.
      </p>
    </icon-section>
    <icon-section class="wide" icon="bulb">
      <template v-slot:title>
        <h1>FoxMixer was <strong>made with experience</strong></h1>
      </template>
      <p>
        Our team of passionate coders put their hard work into the design of FoxMixer and the sophisticated mixing algorithms, because we love the idea of a decentralized currency and the right of everyone's self-determined privacy. We think that today, this is necessary more than ever!
      </p>
    </icon-section>
  </icons-wrapper>
</template>

<script lang="ts">
import Vue from "vue";
import IconsWrapper from "./IconsSectionWrapper.vue";
import IconSection from "./IconSection.vue";

export default Vue.extend({
  name: "HomeTextsCollection",
  components: {
    "icons-wrapper": IconsWrapper,
    "icon-section": IconSection,
  },
});
</script>