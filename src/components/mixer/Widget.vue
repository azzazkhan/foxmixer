<template>
  <center>
    <div class="mixer-widget-wrapper">
      <div class="mixer-widget">
        <div class="header">Payout</div>
        <div class="content-wrapper">
          <!-- Bitcoin payout address field -->
          <div v-if="false" class="input-wrapper address-wrapper">
            <div class="field-wrapper">
              <v-text-field
                type="text"
                v-model="btcAddress"
                class="input-field"
                placeholder="Enter Bitcoin Payout Address"
              />
            </div>
            <div class="error-wrapper">
              Address not valid
            </div>
          </div>
          <!--
            Absolute Bitcoin amount field
            Only visible if selected payout method is (amount)
          -->
          <div v-if="false" class="input-wrapper absolute-amount-wrapper">
            <div class="field-wrapper">
                <v-text-field
                type="text"
                v-model="absoluteAmount"
                class="input-field"
                placeholder="Payout Amount"
              />
            </div>
            <div class="label-wrapper">
              <span class="ml-3 label">BTC</span>
            </div>
            <div
              v-if="absoluteAmountError || true"
              class="error-wrapper"
            >
              Amount must be non-negative
            </div>
          </div>
          <!-- Payment delay slider -->
          <div class="slider-wrapper payout-delay-wrapper">
            <div class="label-wrapper">
              <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                  <span
                    class="mr-2 label"
                    v-bind="attrs"
                    v-on="on"
                  >
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
              <v-slider
                v-model="payoutDelay"
                :max="48"
                :min="2"
                :step="1"
                hide-details
              />
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
          <div class="slider-wrapper relative-amount-wrapper">
            <div class="label-wrapper">
              <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                  <span
                    class="mr-2 label"
                    v-bind="attrs"
                    v-on="on"
                  >
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
              <v-slider
                v-model="relativeAmount"
                :max="100"
                :min="0"
                :step="1"
                hide-details
              />
            </div>
            <div class="tight-field-wrapper">
              <v-text-field
                type="number"
                v-model="payoutDelay"
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
          <div class="alert-wrapper delay-alert-wrapper">
            <v-alert
              color="#E1F5FE"
              dense
            >
              <div class="alert-contents">
                <div class="icon-wrapper">
                  <v-icon color="#01579B">mdi-alert</v-icon>
                </div>
                <div class="text-wrapper">
                  For large mixes, a higher payout delay is recommended
                </div>
              </div>
            </v-alert>
          </div>
        </div>
      </div>
    </div>
  </center>
</template>

<style lang="scss">
.mixer-widget-wrapper {
  padding-bottom: 30px;
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
            padding: 0 0 7px;
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
          bottom: 5px;
        }
      }
    }
  }
}
</style>