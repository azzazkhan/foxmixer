<template>
  <center>
    <div class="mixer-section">
      <payout-settings-popup />
      <coupon-code-popup />
      <!-- Logo & name section -->
      <intro-section :animate="!showWidget" />
      <!-- Mixer widget and sub-components -->
      <template v-if="showWidget">
        <div class="mixer-section">
          <center>
            <div class="mixer-widgets-wrapper">
              <mixer-widget
                v-for="(widget, index) in widgets"
                :key="widget.number"
                :number="index + 1"
              />
            </div>
          </center>
        </div>
        <!-- Mix code inpute box -->
        <mixer-code />
        <!-- Process start button -->
        <center>
          <button
            class="start-mix-btn"
            @click.prevent="$router.push('/mix/okWorDP9c6MgjS8YH/complete')"
          >
            Start Mixing
          </button>
        </center>
      </template>
      <animated-home-button v-else />
    </div>
  </center>
</template>

<style lang="scss">
  .mixer-section {
    padding: 0 40px;
    .mixer-widgets-wrapper {
      text-align: left;
      margin: 50px 6% 0;
      max-width: 690px;
    }
  }
  // Popup styles
  .popup-header {
    color: var(--color-primary);
    position: relative;
    top: 10px;
    margin-top: 10px;
  }
  // Process start button
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
    margin: 0 auto 20px;
    &:hover {
      opacity: 0.9;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import {mapState, mapMutations} from "vuex";
  import Intro from "./Intro.vue";
  import Widget from "./Widget.vue";
  import Code from "./Code.vue";
  import PayoutSettingsPopup from "./popups/PayoutSettings.vue";
  import CouponCodePopup from "./popups/Coupon.vue";
  import AnimatedHomeButton from "../content/AnimatedHomeButton.vue";

  export default Vue.extend({
    name: "Mixer",
    props: {
      showWidget: Boolean
    },
    components: {
      "intro-section": Intro,
      "mixer-widget": Widget,
      "mixer-code": Code,
      "payout-settings-popup": PayoutSettingsPopup,
      "coupon-code-popup": CouponCodePopup,
      "animated-home-button": AnimatedHomeButton
    },
    data: () => ({
      settingPopupOpened: false,
      couponPopupOpened: false,
      payoutType: "null", // percentage | amount
      couponCode: "",
      couponCodeError: false
    }),
    methods: {
      ...mapMutations(["toggleSettingsPopup", "toggleCouponPopup", "addWidget", "removeWidget"])
    },
    computed: {
      ...mapState({
        widgets: "widgets"
      })
    }
  });
</script>
