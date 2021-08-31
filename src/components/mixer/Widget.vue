<template>
  <center>
    <div class="mixer-widget-wrapper">
      <div class="mixer-widget">
        <div class="header">Payout</div>
        <div class="content-wrapper">
          <!-- Bitcoin payout address field -->
          <div class="input-wrapper address-wrapper">
            <div class="field-wrapper">
              <v-text-field
                type="text"
                v-model="address"
                class="input-field"
                placeholder="Enter Bitcoin Payout Address"
              />
            </div>
            <div v-if="addressError" class="error-wrapper" style="bottom: -14px">
              Address not valid
            </div>
          </div>
          <!--
            Absolute Bitcoin amount field
            Only visible if selected payout method is (amount)
          -->
          <div v-if="payoutMethod === 'amount'" class="input-wrapper">
            <div class="field-wrapper">
              <v-text-field
                type="text"
                v-model="absoluteAmount"
                class="input-field"
                placeholder="Payout Amount"
              />
            </div>
            <div class="label-wrapper">
              <span class="ml-3 label" style="position: relative; top: 10px;">
                BTC
              </span>
            </div>
            <div v-if="absoluteAmountError === 'nan'" class="error-wrapper">
              Amount must be non-negative
            </div>
            <div v-if="absoluteAmountError === 'small'" class="error-wrapper">
              Please enter at least 0.00001000 BTC
            </div>
          </div>
          <!-- Payment delay slider -->
          <div class="mt-2 slider-wrapper">
            <div class="label-wrapper">
              <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                  <span class="mr-2 label" v-bind="attrs" v-on="on">
                    Payout Delay:
                  </span>
                </template>
                <span class="custom-tooltip">
                  Time after which the mixed<br />
                  bitcoinsshould be payed out.<br />
                  This greatly improves the<br />
                  effectiveness of the mixer
                </span>
              </v-tooltip>
            </div>
            <div class="field-wrapper">
              <v-slider v-model="payoutDelay" :max="48" :min="2" :step="1" hide-details />
            </div>
            <div class="tight-field-wrapper">
              <v-text-field
                type="number"
                v-model="payoutDelay"
                hide-details
                single-line
                min="2"
                max="48"
                readonly
              />
            </div>
            <div class="label-wrapper">
              <span class="label">hours</span>
            </div>
          </div>
          <!--
            Relative payment percentage
            Only visible if selected payout method is (percentage)
              + there are more than 1 widgets!
          -->
          <div v-if="payoutMethod === 'percentage' && totalWidgets > 1" class="slider-wrapper">
            <div class="label-wrapper">
              <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                  <span class="mr-2 label" v-bind="attrs" v-on="on">
                    Payout Amount:
                  </span>
                </template>
                <span class="custom-tooltip">
                  Controls the distribution of<br />
                  payouts among the payout<br />
                  address
                </span>
              </v-tooltip>
            </div>
            <div class="field-wrapper">
              <v-slider v-model="relativeAmount" :max="100" :min="0" :step="1" hide-details />
            </div>
            <div class="tight-field-wrapper">
              <v-text-field
                type="number"
                v-model="relativeAmount"
                hide-details
                single-line
                min="0"
                max="100"
                readonly
              />
            </div>
            <div class="label-wrapper">
              <span class="label">%</span>
            </div>
          </div>
          <!--
            Alert for small payout delays notice
            Only visible when payout delay is smaller than 8
          -->
          <div v-if="delayWarning" class="alert-wrapper delay-alert-wrapper">
            <v-alert color="#E1F5FE" dense>
              <div class="icon-wrapper">
                <v-icon color="#01579B">mdi-alert</v-icon>
              </div>
              <div class="text-wrapper">
                For large mixes, a higher payout delay is recommended
              </div>
            </v-alert>
          </div>
        </div>
        <div class="actions-wrapper">
          <!-- Only show on last widget (except the first one) -->
          <action-button
            icon="mdi-minus"
            v-if="isLast && !isFirst"
            style="
              top: 0;
              transform: translate(50%, -50%);
            "
            :click="removeWidget"
          >
            Remove payout address
          </action-button>
          <!-- Coupon code (only show on first widget) -->
          <action-button
            icon="mdi-wrench"
            v-if="number === 1"
            style="
              bottom: 53px;
              transform: translateX(50%);
            "
            :click="
              () => {
                toggleSettingsPopup(true);
              }
            "
          >
            Configure advanced settings
          </action-button>
          <!-- Coupon code (only show on first widget) -->
          <action-button
            icon="mdi-wallet-giftcard"
            v-if="number === 1"
            style="
              bottom: 18px;
              transform: translateX(50%);
            "
            :click="
              () => {
                toggleCouponPopup(true);
              }
            "
          >
            Enter coupon code
          </action-button>
          <!-- Add new widget (if this is the last widget and smaller than 3) -->
          <action-button
            icon="mdi-plus"
            style="
              bottom: 0;
              transform: translate(50%, 50%);
            "
            v-if="isLast"
            :click="addWidget"
          >
            Add further payout address
          </action-button>
        </div>
      </div>
    </div>
  </center>
</template>

<style lang="scss">
  .mixer-widget-wrapper {
    padding-bottom: 50px;
    margin: -20px -20px 0 0;
    .mixer-widget {
      position: relative;
      margin: 20px 20px 0 0;
      padding: 20px 30px 10px;
      border: 1px solid #03a9f4;
      border-radius: 4px;
      .header {
        position: absolute;
        color: white;
        background-color: #03a9f4;
        font-size: 17px;
        font-weight: bold;
        line-height: 20px;
        text-align: left;
        top: 0;
        left: 0;
        width: 100%;
        padding-left: 3px;
      }
      .content-wrapper {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        .input-wrapper,
        .slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          .field-wrapper {
            flex: 1;
            .v-input.input-field {
              margin: 0;
              padding: 0;
              .v-input__slot {
                &::before {
                  border-color: rgba(0, 0, 0, 0.12);
                }
                &::after {
                  background-color: #03a9f4;
                  border-color: #03a9f4;
                }
                input {
                  font-size: 18px;
                  font-weight: bold;
                  &::placeholder {
                    color: var(--color-primary);
                    font-weight: 400;
                  }
                }
              }
              .v-text-field__details {
                display: none;
              }
            }
          }
          .tight-field-wrapper {
            margin: 0 2px 0 8px;
            .v-input {
              margin: 0;
              padding: 0;
              .v-input__slot {
                &::before {
                  border-color: rgba(0, 0, 0, 0.12);
                }
              }
              &,
              input {
                font-size: 18px;
                text-align: center;
                width: 35px;
              }
            }
          }
          &.slider-wrapper {
            margin-bottom: 20px;
            .label-wrapper .label {
              margin-bottom: 0;
            }
            .v-slider {
              // Limit the thumb expansion when slider is being slid
              &.v-slider--active .v-slider__thumb::before {
                transform: scale(0.85) !important;
              }
              // Empty area where slider is not been slide yet (non selected area)
              .v-slider__track-container .v-slider__track-background {
                background-color: #e1f5fe !important;
                border-color: #e1f5fe !important;
              }
              // Slider area which has been slide over (selected area)
              .v-slider__track-fill {
                background-color: #3f51b5 !important;
                border-collapse: #3f51b5 !important;
              }
              // The slider thumb (dot)
              .v-slider__thumb-container {
                // Do not scale/exapand on hover
                &:hover {
                  .v-slider__thumb::before {
                    transform: scale(0);
                  }
                }
                // Custom colors
                .v-slider__thumb {
                  &,
                  &::before {
                    opacity: 1 !important;
                    background-color: var(--color-primary) !important;
                    border-color: var(--color-primary) !important;
                  }
                }
              }
            }
          }
          .label-wrapper {
            display: flex;
            .label {
              color: var(--color-primary);
              font-size: 19px;
              margin-bottom: 30px;
            }
          }
          .error-wrapper {
            position: absolute;
            color: #de3226;
            bottom: -5px;
          }
        }
        .alert-wrapper .v-alert {
          margin: 0 0 10px;
          border-radius: 4px;
          .v-alert__content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 3px 0;
            .icon-wrapper {
              position: relative;
              bottom: 2px;
              margin-right: 7px;
            }
            .text-wrapper {
              color: var(--color-primary);
            }
          }
        }
      }
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import {mapState, mapGetters, mapMutations} from "vuex";
  import ActionButton from "./ActionButton.vue";

  export default Vue.extend({
    name: "MixerWidget",
    components: {
      "action-button": ActionButton
    },
    props: {
      number: {
        type: Number,
        required: true
      }
    },
    data: () => ({
      addressError: false,
      absoluteAmountError: "", // small | nan
      delayWarning: false
    }),
    computed: {
      address: {
        get() {
          // Number will be one greater than the index
          return this.$store.state.widgets[this.number - 1].address;
        },
        set(address: string) {
          if (address) {
            if (!/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address)) {
              return (this.addressError = true);
            }
            this.$store.commit("setWidgetAddress", {
              index: this.number - 1,
              address
            });
          }
          this.addressError = false;
        }
      },
      absoluteAmount: {
        get() {
          // Number will be one greater than the index
          return this.$store.state.widgets[this.number - 1].amount;
        },
        set(amount: string) {
          if (amount) {
            if (!/^\d\d*(\.\d+)?$/.test(amount)) {
              return (this.absoluteAmountError = "nan");
            } else if (parseFloat(amount) < 0.00001) {
              return (this.absoluteAmountError = "small");
            }
            // this.$store.state.widgets[this.number - 1].amount = amount;
            this.$store.commit("setWidgetAmount", {
              index: this.number - 1,
              amount
            });
          }
          this.absoluteAmountError = "";
        }
      },
      payoutDelay: {
        get() {
          // Number will be one greater than the index
          return this.$store.state.widgets[this.number - 1].delay;
        },
        set(delay: string) {
          if (parseInt(delay) <= 7) this.delayWarning = true;
          else this.delayWarning = false;
          this.$store.commit("setWidgetDelay", {
            index: this.number - 1,
            delay
          });
        }
      },
      relativeAmount: {
        get() {
          // Number will be one greater than the index
          return this.$store.state.widgets[this.number - 1].percentage;
        },
        set(percentage: string) {
          this.$store.commit("setWidgetPercentage", {
            index: this.number - 1,
            percentage
          });
        }
      },
      ...mapGetters(["totalWidgets"]),
      ...mapState(["payoutMethod"]),
      isLast() {
        return this.totalWidgets === this.number;
      },
      isFirst() {
        return this.number === 1;
      }
    },
    methods: mapMutations(["addWidget", "removeWidget", "toggleSettingsPopup", "toggleCouponPopup"])
  });
</script>
