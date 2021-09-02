<template>
  <center>
    <div class="mixer-section">
      <payout-settings-popup />
      <coupon-code-popup />
      <!-- Logo & name section -->
      <intro-section :animate="!showWidget" />
      <!-- Mixer widget and sub-components -->
      <div class="mixer-area" v-if="showWidget">
        <template v-if="!widgetLoading">
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
            <button class="start-mix-btn" @click.prevent="startMixing">
              Start Mixing
            </button>
          </center>
        </template>
        <div class="widget-loader" v-else>
          <v-progress-circular :size="50" color="#3f51b5" indeterminate></v-progress-circular>
        </div>
      </div>
      <animated-home-button v-else />
    </div>
    <!-- Alerts wrapper -->
    <template>
      <v-snackbar
        color="#FF4081"
        v-model="alert.opened"
        top
        right
        content-class="text--white text-subtitle-1"
        dark
        :elevation="0"
        width="100px"
      >
        <div class="d-flex justify-space-between white--text">
          <v-icon color="white" size="35">mdi-shield-alert-outline</v-icon>
          <span style="display: block; padding: 0 20px 0 10px">{{ alert.text }}</span>
        </div>
      </v-snackbar>
    </template>
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
    .mixer-area {
      position: relative;
      .widget-loader {
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 100%;
      }
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
  import {mapState, mapMutations, mapGetters} from "vuex";
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
      couponCode: "",
      couponCodeError: false,
      widgetLoading: true,
      snackbarOpened: true,
      alert: {
        opened: false,
        text: ""
      }
    }),
    mounted() {
      setTimeout(() => {
        this.widgetLoading = false;
        this.snackbarOpened = true;
      }, 2000);
    },
    methods: {
      ...mapMutations(["toggleSettingsPopup", "toggleCouponPopup", "addWidget", "removeWidget"]),
      startMixing() {
        const {totalWidgets, widgets} = this;
        const addressRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
        const amountRegex = !/^\d\d*(\.\d+)?$/;

        // First address is empty
        if (totalWidgets === 1 && !widgets[0].address)
          return this.showAlert("You must specify at least 1 values");
        // Total payout percentage must be equal to 100%
        if (this.payoutMethod === "percentage" && this.totalPercentage !== 100)
          return this.showAlert("The total payout amount must be equal to 100%");
        // Total payout amount must be greater than

        if (this.payoutMethod === "amount" && parseFloat(this.totalAmount) !== 100)
          return this.showAlert("The total payout amount must be 100%");
        for (const widget of widgets) {
          if (this.payoutMethod === "amount" && (!(widget.amount) || !(amountRegex.test(widget.amount)))) {
            return this.showAlert(`payoutAddresses.${widget.number - 1}.payoutPercentage is invalid`);
          if (!widget.address)
            return this.showAlert(
              `payoutAddresses.${widget.number - 1}.payoutPercentage is invalid`
            );
          else if (!addressRegex.test(widget.address))
            return this.showAlert(`payoutAddresses.${widget.number - 1}.address is invalid`);
        }
      },
      showAlert(text: string): void {
        this.alert.opened = true;
        this.alert.text = text;
      }
    },
    computed: {
      ...mapState(["widgets", "payoutMethod"]),
      ...mapGetters(["totalPercentage", "totalWidgets"])
    }
  });
</script>
