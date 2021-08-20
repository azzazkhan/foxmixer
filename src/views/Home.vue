<template>
  <page class="page-home">
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
  </page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";
import Banner from "../components/header/Banner.vue";
import Mixer from "../components/mixer/index.vue";
import HorizontalDivider from "../components/content/Divider.vue";
import TextSection from "../components/content/TextSection.vue";

export default Vue.extend({
  name: "Home",
  components: {
    page: Page,
    "v3-banner": Banner,
    mixer: Mixer,
    "horizontal-divider": HorizontalDivider,
    "text-section": TextSection,
  },
});
</script>
