<template>
  <page>
    <div class="page-why">
      <div class="container">
        <template>
          <h1>Why You should Mix Your Bitcoins</h1>
          <h4>Bitcoin Mixing for legal use</h4>
          <img src="../assets/images/fungibility.svg" alt="Fungibility" />
          <p>
            Imagine bank notes had a public past, meaning every transaction that was ever made with
            a note was visible.
            <br />
            In this example, would you accept a note, knowing that it may had been involved within a
            criminal activity in the past?
          </p>
          <br />
          <p>
            This tiny example shows a general issue of Bitcoin. It's the lack of fungibility, how
            this feature is called. Fungibility allows you to accept and use values, because you
            don't know details about their use in the past. This is a feature we're used to and that
            bank notes naturally have by design, but Bitcoin lacks this property.
          </p>
          <p>
            As soon as you provide personal details, for example when you buy new Bitcoins, your
            privacy is compromised. In fact, all Bitcoin transactions are stored on every (!)
            computer that participates at the Bitcoin network. It's easy to link your transaction
            data and build a detailed profile about you. For bank notes however, no such public
            storage exists. Why should this feature be limited to bank notes, if it is possible to
            also have it with Bitcoins?
          </p>
          <p>
            That's where Bitcoin Mixers come into play. By periodically mixing your coins, you can
            treat Bitcoins just as you would deal with real bank notes. All security measures and
            your privacy, as well as the privacy of previous users is preserved and restored - easy
            and fast.
          </p>
          <div class="divider"></div>
        </template>
        <temaplte>
          <h4>How does a Bitcoin Mixer work?</h4>
          <img src="../assets/images/pool.svg" alt="Pool" />
          <p>
            At the beginning, you send a certain amount of Bitcoins that you want to mix to a
            specific Bitcoin address that is presented to you as soon as you create a new mix. This
            is explained in detail at the tutorial section. As soon as the Bitcoins arrive at
            FoxMixer, they instantly go into a huge Bitcoin pool. This pool makes up the base of a
            Bitcoin Mixer. After a certain amount of time that you can set freely, FoxMixer picks a
            random new set of independent Bitcoins out of this pool for you. This set of Bitcoins is
            then returned back to a single address or multiple addresses owned by you, such that you
            have full control about how to use it. We don't keep logs about transactions and the
            details of a mix are deleted automatically after 7 days.
          </p>
          <br />
          <p>
            <router-link to="/mixer" class="btn-start">Start Mixing</router-link>
          </p>
        </temaplte>
      </div>
    </div>
  </page>
</template>

<style lang="scss" scoped src="../assets/styles/pages/why.scss"></style>

<script lang="ts">
  import Vue from "vue";
  import Page from "../components/Page.vue";

  export default Vue.extend({
    name: "WhyPage",
    components: {
      page: Page
    }
  });
</script>
