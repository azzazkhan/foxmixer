<template>
  <page class="page-home">
    <div v-if="false">
      <v3-banner />
      <mixer />
      <horizontal-divider />
      <!-- News -->
      <text-section>
        <template v-slot:title>
          <h1>News &amp; Announcements</h1>
        </template>
        <template v-slot:default>
          <p>
            [2021-04] <strong>Onion URL Update</strong>
            <br /><br />
            <em>This message affects all users accessing FoxMixer using Tor.</em>
            <br /><br />
            FoxMixer has a new Tor onion v3 URL<br />
            <strong>
              <a href="http://foxmixer4dw2zluv7gy4pgqrpp2ab6p323s5clcyt7i5csbpk2pzezid.onion">
                foxmixer4dw2zluv7gy4pgqrpp2ab6p323s5clcyt7i5csbpk2pzezid.onion
              </a>
            </strong>
            <br />
            Store it in your bookmarks, it is now the preffered way accessing FoxMixer through Tor<br />
            The advancements in the Tor development make this step necessary, as the old, shorter v2 URL format (foxmixer6mrsuxrl.onion) has been
            <a href="https://blog.torproject.org/v2-deprecation-timeline" target="_blank">deprecated by the Tor team</a>.
            <br />
            The old onion URL will still stay available. But since July, you are most likely not able to reach FoxMixer using the old URL after updating to the latest version of Tor.
            <br />
            Pay close attention to store this URL correctly, to avoid being tricked by fake websites.
            <br /><br />
            This change does not affect the clearnet domain (https://www.foxmixer.com) in any way, which will stay available as usual.
          </p>
        </template>
      </text-section>
      <horizontal-divider />
      <!-- About -->
      <text-section>
        <template v-slot:title>
          <h1>About FoxMixer</h1>
        </template>
        <template v-slot:default>
          <p>
            FoxMixer is an outstanding, high quality bitcoin mixing service that makes mixing bitcoins as easy as never before. No matter if you have bought new bitcoins, you want to buy or sell something using bitcoins or you intend to pay out bitcoins to another currency. Without mixing, bitcoins can be easily traced back to you. By everyone in the world who has access to the internet! As the protocol of bitcoin is open, it is easy to find out about your transactions and behaviour.<br />
            FoxMixer is the state-of-the-art service for restoring and keeping security and privacy in the bitcoin ecosystem. FoxMixer accepts your bitcoins, mixes them in a huge and constantly changing pool of bitcoins and returns a new and fully independent set of bitcoins. This simple procedure makes the backtracing of transactions impossible.
          </p>
        </template>
      </text-section>
    </div>
    <!-- Icons section -->
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
  </page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";
import Banner from "../components/header/Banner.vue";
import Mixer from "../components/mixer/index.vue";
import HorizontalDivider from "../components/content/Divider.vue";
import TextSection from "../components/content/TextSection.vue";
import IconsSectionWrapper from "../components/content/IconsSectionWrapper.vue";
import IconSection from "../components/content/IconSection.vue";

export default Vue.extend({
  name: "Home",
  components: {
    page: Page,
    "v3-banner": Banner,
    mixer: Mixer,
    "horizontal-divider": HorizontalDivider,
    "text-section": TextSection,
    "icons-wrapper": IconsSectionWrapper,
    "icon-section": IconSection,
  },
});
</script>
