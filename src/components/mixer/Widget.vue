<template>
  <center>
    <div class="widget">
      <div class="header" v-text="title" />
      <div class="content">
        <div class="btc-address-wrapper">
          <v-text-field v-model="btcAddress" class="input-field" placeholder="Enter Bitcoin Payout Address" />
          <span v-show="btcAddressError" class="error-message">Address not valid</span>
        </div>
        <div class="btc-amount-wrapper" v-if="payoutType === 'amount'">
          <v-text-field type="text" v-model="btcAmount" class="input-field" placeholder="Payout Amount" />
          <span class="label">BTC</span>
          <span v-show="btcAmountError" class="error-message">Amount must be non-negative</span>
        </div>
        <div class="slider-section delay-hours">
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
              v-model="btcPayoutDelayHours"
              class="align-center"
              :max="48"
              :min="2"
              :step="1"
              hide-details
            >
              <template v-slot:append>
                <div class="amount-wrapper">
                  <v-text-field
                  v-model="btcPayoutDelayHours"
                  class="mt-0 mr-2 pt-0x hours-input"
                  hide-details
                  single-line
                  min="2"
                  max="48"
                  type="number"
                  readonly
                  style="width: 40px; text-align: center;"
                />
                <span class="hours-label">hours</span>
                </div>
              </template>
            </v-slider>
          </div>
        </div>
        <div class="slider-section payout-amount" v-if="payoutType === 'percentage'">
          <v-tooltip top>
            <template v-slot:activator="{on, attrs}">
              <span class="delay-label" v-bind="attrs" v-on="on">Payout Amount:</span>
            </template>
            <span class="text-caption">
              Controls the distribution of<br />
              payouts among the payout<br />
              address
            </span>
          </v-tooltip>
          <div class="slider-wrapper">
            <v-slider
              v-model="btcPayoutAmountPercent"
              class="align-center"
              :min="btcPayoutAmountPercentMin"
              :max="btcPayoutAmountPercentMax"
              :step="1"
              hide-details
            >
              <template v-slot:append>
                <div class="amount-wrapper">
                  <v-text-field
                  v-model="btcPayoutAmountPercent"
                  class="mt-0 mr-2 pt-0x hours-input"
                  hide-details
                  single-line
                  min="2"
                  max="48"
                  type="number"
                  readonly
                  style="width: 40px; text-align: center;"
                />
                <span class="hours-label">%</span>
                </div>
              </template>
            </v-slider>
          </div>
        </div>
      </div>
      <div class="actions-wrapper middle" v-if="settingsPopupTrigger && couponPopupTrigger">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <button v-bind="attrs" v-on="on" @click="settingsPopupTrigger">
              <v-icon color="#01579b" dense>mdi-wrench</v-icon>
            </button>
          </template>
          <span class="text-caption">
            Configure advanced settings
          </span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <button v-bind="attrs" v-on="on" @click="couponPopupTrigger">
              <v-icon color="#01579b" dense>mdi-wallet-giftcard</v-icon>
            </button>
          </template>
          <span class="text-caption">
            Enter coupon code
          </span>
        </v-tooltip>
      </div>
      <div class="actions-wrapper top" v-if="removeWidgetTrigger">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <button v-bind="attrs" v-on="on">
              <v-icon color="#01579b" dense>mdi-minus</v-icon>
            </button>
          </template>
          <span class="text-caption">
            Remove<br />Payout<br />Address
          </span>
        </v-tooltip>
      </div>
      <div class="actions-wrapper bottom" v-if="addWidgetTrigger">
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
  </center>
</template>

<style lang="scss">
.widget {
  position: relative;
  left: -7px;
  width: 78%;
  border: 1px solid #03a9f4;
  border-radius: 4px;
  @media (min-width: 880px) {
    width: 700px;
    margin-top: -15px;
  }
  .header {
    color: white;
    background-color: #03a9f4;
    font-weight: bold;
    padding: 0 3px;
    line-height: 1.4em;
    text-align: left;
    border-radius: 4px 4px 0 0;
  }
  .content {
    color: var(--color-primary);
    font-size: 18px;
    padding: 0.5rem 2rem;
    .btc-address-wrapper,
    .btc-amount-wrapper {
      position: relative;
      input {
        font-size: 1.2rem;
        font-weight: bold;
        border: #dddddd !important;
        &::placeholder {
          color: var(--color-primary);
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
    .btc-amount-wrapper {
      margin-top: -20px;
      display: flex;
      align-items: center;
      .label {
        position: relative;
        margin-left: 5px;
        top: -4px;
      }
    }
    .slider-section {
      display: flex;
      margin-top: -10px;
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
  }
  .actions-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    transform: translateX(50%);
    button {
      background-color: #e1f5fe;
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
    &.bottom {
      bottom: 0;
      button {
        transform: translateY(50%);
      }
    }
    &.top {
      top: 0;
      button {
        transform: translateY(-50%);
      }
    }
    &.middle {
      bottom: 17.5px;
    }
  }
}
</style>

<script lang="ts">
import Vue, { PropType } from "vue";
declare type PayoutType = "amount" | "percentage";
export default Vue.extend({
  name: "Widget",
  props: {
    title: {
      type: String,
      default: "Payout",
    },
    payoutType: {
      type: String as PropType<PayoutType>,
    },
    payoutAmountPercentMin: {
      type: Number,
      default: 1,
    },
    payoutAmountPercentMax: {
      type: Number,
      default: 100,
    },
    settingsPopupTrigger: Function,
    couponPopupTrigger: Function,
    addWidgetTrigger: Function,
    removeWidgetTrigger: Function,
  },
  data: () => ({
    btcAddress: "",
    btcAddressError: false,
    btcAmount: "",
    btcPayoutType: "amount",
    btcAmountError: false,
    btcPayoutDelayHours: 12,
    btcPayoutAmountPercent: 100,
    btcPayoutAmountPercentMin: 1,
    btcPayoutAmountPercentMax: 100,
  }),
  watch: {
    btcAddress(address) {
      const btcRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
      this.btcAddressError = address && !btcRegex.test(address);
    },
    btcAmount(amount) {
      this.btcAmountError = amount && !/[1-9]+/.test(amount);
    },
    payoutAmountPercentMin(value) {
      this.btcPayoutAmountPercentMin = value;
    },
    payoutAmountPercentMax(value) {
      this.btcPayoutAmountPercentMax = value;
    },
    payoutType(type) {
      this.btcPayoutType = /amount|percentage/i.test(type)
        ? type
        : this.btcPayoutType;
    },
  },
});
</script>
