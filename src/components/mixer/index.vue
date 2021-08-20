<template>
  <center>
    <div class="mixer-section">
      <!-- Payout method settings popup -->
      <v-dialog v-model="settingPopupOpened" max-width="50%">
        <v-card>
          <v-card-text class="pt-2">
            <h2 class="popup-header">Advance payout settings</h2>
            <v-radio-group v-model="payoutType">
              <v-radio
                label="Set relative payout percentages (recommended)"
                value="percentage"
              />
              <v-radio
                label="Set absolute payout amounts"
                value="amount"
              />
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              class="ml-auto"
              text
              @click="settingPopupOpened = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Coupn code popup -->
      <v-dialog v-model="couponPopupOpened" max-width="50%">
        <v-card>
          <v-card-text class="pt-2">
            <h2 class="popup-header">Coupon Code</h2>
            <div class="coupon-code-wrapper">
              <v-text-field type="text" v-model="couponCode" class="input-field" placeholder="Enter Coupon Code here" />
              <span v-show="couponCodeError" class="error-message">The given coupon code is not valid</span>
          </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              class="ml-auto"
              text
              @click="couponPopupOpened = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Logo & name section -->
      <intro-section />
      <!-- Actual mixer widget -->
      <mixer-widget
        :payoutType="payoutType"
        :addWidgetTrigger="() => {}"
        :couponPopupTrigger="openCouponPopup"
        :settingsPopupTrigger="openSettingsPopup"
      />
      <!-- Mix code inpute box -->
      <mixer-code />
      <!-- Process start button -->
      <center>
        <button class="start-mix-btn">Start Mixing</button>
      </center>
    </div>
  </center>
</template>

<style lang="scss">
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
.coupon-code-wrapper {
  margin-top: 40px;
  position: relative;
  input {
    font-size: 1.2rem;
    font-weight: bold;
    border: #dddddd !important;
    &::placeholder {
      color: var(--color-primary) !important;
      font-weight: 400;
    }
  }
  .error-message {
    position: absolute;
    color: #de3226;
    bottom: -1px;
    left: 0;
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
  data: () => ({
    settingPopupOpened: false,
    couponPopupOpened: false,
    payoutType: "null", // percentage | amount
    couponCode: "",
    couponCodeError: false,
  }),
  methods: {
    openSettingsPopup() {
      this.settingPopupOpened = true;
    },
    openCouponPopup() {
      this.couponPopupOpened = true;
    },
  },
});
</script>
