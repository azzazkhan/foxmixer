<template>
  <div class="payout-widget">
    <div class="widget-header">Payout</div>
    <div class="widget-content">
      <div class="address-wrapper">
        <v-text-field class="bitcoin-address-input" placeholder="Enter Bitcoin Payout Address" />
      </div>
      <div class="slider-section">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <span class="delay-label" v-bind="attrs" v-on="on">Payout Delay:</span>
          </template>
          <span class="text-caption">
            Time after which the mixed<br />
            bitcoinsshould be payed out.<br />
            This greatly improves the<br />
            effectiveness of the mixer
          </span>
        </v-tooltip>
        <div class="slider-wrapper">
          <v-slider
            v-model="slider"
            class="align-center"
            :max="48"
            :min="2"
            :step="1"
            hide-details
          >
            <template v-slot:append>
              <div class="amount-wrapper">
                <v-text-field
                v-model="slider"
                class="mt-0 mr-2 pt-0x hours-input"
                hide-details
                single-line
                min="2"
                max="48"
                type="number"
                style="width: 40px; text-align: center;"
              />
              <span class="hours-label">hours</span>
              </div>
            </template>
          </v-slider>
        </div>
      </div>
      <div class="actions-wrapper">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <button v-bind="attrs" v-on="on">
              <v-icon color="#01579b" dense>mdi-wrench</v-icon>
            </button>
          </template>
          <span class="text-caption">
            Configure advanced settings
          </span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <button v-bind="attrs" v-on="on">
              <v-icon color="#01579b" dense>mdi-wallet-giftcard</v-icon>
            </button>
          </template>
          <span class="text-caption">
            Enter coupon code
          </span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <button v-bind="attrs" v-on="on">
              <v-icon color="#01579b" dense>mdi-plus</v-icon>
            </button>
          </template>
          <span class="text-caption">
            Add further payout address
          </span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.payout-widget {
  border: 1px solid #03a9f4;
  border-radius: 4px;
  .widget-header {
    border-radius: 4px 4px 0 0;
    color: white;
    background-color: #03a9f4;
    font-weight: bold;
    padding: 0 3px;
  }
  .widget-content {
    position: relative;
    padding: 1.5rem 1.9rem;
    border-radius: 0 0 4px 4px;
    .bitcoin-address-input input {
      font-size: 1.2rem;
      font-weight: bold;
      border: #dddddd !important;
      &::placeholder {
        color: var(--color-primary);
        font-weight: 400;
      }
    }
    .slider-section {
      display: flex;
      .delay-label {
        color: var(--color-primary);
        font-size: 20px;
        transform: translateY(10px);
      }
      .slider-wrapper {
        flex: 1;
      }
      .amount-wrapper {
        color: var(--color-primary);
        font-size: 18px;
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .hours-input {
          transform: translateY(-5px);
          input {
            text-align: center;
          }
        }
      }
    }
    .actions-wrapper {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(50%);
      button {
        color: var(--color-primary);
        background-color: #e1f5fe;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        transform: translateY(50%);
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MixerWidget",
  data: () => ({
    slider: 12,
  }),
});
</script>
