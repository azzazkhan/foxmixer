<template>
  <div class="figures-collection">
    <figure-section title="Some Highlights">
      <h1>Detailed Progress Overview</h1>
      <p>
        A detailed status page informs about the current progress of every mix. It allows for a quick overview of all relevant information at any time.<br />
        After a new mix is created, the individual status page is the central and reliable source of information throughout the whole lifecycle of the mix. As soon as the status of the mix changes, this page updates automatically in the background, so no reloading is necessary at all.<br />
        It is recommended to bookmark this page in your browser for quick and easy access.
      </p>
      <template v-slot:figure>
        Animated Progess Bars Will Go Here
      </template>
    </figure-section>
    <figure-section image="mixcode">
      <h1>Mixcodes - Different Coins Each Time</h1>
      <p>
        Despite our huge mixing volume, there would be still a chance to receive previous coins from an earlier mix.<br />
        To prevent this, FoxMixer supports unique mixcodes. Every new mix that is created with a mixcode is guaranteed to never receive coins from earlier mixes with that same mixcode again.<br />
        This allows for easy and risk-free bitcoin mixing, even in the long-term.
      </p>
    </figure-section>
    <figure-section image="origin">
      <h1>Transaction Origin Randomization</h1>
      <p>
        Most of the modern blockchain analysis services analyze the broadcast origin of a transaction. Operating multiple nodes in multiple countries allows them to trace where a transaction arrives first and by what IP address it is broadcasted.<br />
        FoxMixer uses a global network of transaction broadcast servers to entirely randomize the origin of broadcasted transactions. Each mix payout is randomly broadcasted from a different IP address, providing best-you-can-get location privacy.
      </p>
    </figure-section>
    <figure-section image="dma">
      <h1>Deep Mempool Analysis</h1>
      <p>
        Many transactions get into the focus of analysis because they stand out from the masses.<br />
        For example, if you expect a payout of 4 BTC and at the time of the payout, only transactions of 0.01 BTC get done, it is evident that analysts will focus on your transaction first.<br />
        FoxMixer proactively prevents this privacy leak by its unique "Deep Mempool Analysis". This technology actively monitors the volume of current transactions in the bitcoin mempool and shifts payouts to the perfect timeslot, if necessary.<br />
        For example, if at one minute mainly transactions in the order of 0.01 BTC get done, your transaction will be preponed or delayed by some minutes and by that shifted to a timeslot where more transactions around 4 BTC occur on average.
      </p>
    </figure-section>
  </div>
</template>

<style lang="scss" scoped>
.figures-collection {
  padding: 0 30px;
  margin: 0 auto;
  @media (min-width: 770px) {
    padding: 0 40px;
  }
  @media (min-width: 880px) {
    padding: 0;
    width: 90%;
  }
}
</style>

<script lang="ts">
import FigureSection from "./FigureSection.vue";

import Vue from "vue";
export default Vue.extend({
  name: "FiguresCollection",
  components: {
    "figure-section": FigureSection,
  },
});
</script>