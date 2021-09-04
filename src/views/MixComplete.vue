<template>
  <page class="mix-complete-page">
    <mix-validator />
    <div class="completion-wrapper">
      <div class="content-holder">
        <h3>Your mix has been generated</h3>
        <table class="content-aligner">
          <tbody>
            <tr>
              <td>
                <img src="../assets/images/icons/input_24.png" alt="Image not available" />
              </td>
              <td>
                <h4>1. Send your bitcoins to the following address</h4>
                <div class="bitcoin-address-wrapper">
                  <div class="address-box">
                    <div class="header">Bitcoin address</div>
                    <span class="btc-address">
                      <a :href="`bitcoin:${bitcoinAddress}`">
                        {{ bitcoinAddress }}
                      </a>
                    </span>
                    <button class="view-toggler">
                      <v-icon color="#01579b" dense>mdi-gradient</v-icon>
                    </button>
                  </div>
                  <div class="copy-address-btn">Copy to clipboard</div>
                </div>
                <div class="transaction-btc-amount">
                  <p>Send at least 0.00200000 BTC to this address.</p>
                </div>
                <p>
                  The payin should be initiated within 48 hours. The mixed bitcoins will get
                  credited back to your selected addresses after the given delay and 6
                  confirmations.<br />
                  Hint: Our current mixing volume is around 200 BTC.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="divider"></div>
        <table class="content-aligner">
          <tbody>
            <tr>
              <td>
                <img src="../assets/images/icons/lock_24.png" alt="Image not available" />
              </td>
              <td>
                <h4>2. For your security: Letter of Guarantee</h4>
                <p>
                  Download the following "Letter of Guarantee" and keep it until you receive your
                  bitcoins. In case of contacting our support, this letter is a reference for us.
                </p>
                <div class="download-letterbox">
                  <div class="header">Letter of Guarantee</div>
                  <div class="content">
                    <a href="/LetterOfGuarantee.txt" download>
                      <img src="../assets/images/icons/download_24.png" alt="Image not available" />
                      <br />
                      <p style="color: #03a9f4">Download now</p>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="divider"></div>
        <table class="content-aligner">
          <tbody>
            <tr>
              <td>
                <img src="../assets/images/icons/check_24.png" alt="Image not available" />
              </td>
              <td>
                <h4>3. You are done</h4>
                <router-link :to="'/mix/' + $route.params.mixCode" class="continue-btn"
                  >Continue To Status >></router-link
                >
                <p>
                  For your own privacy, this page and all information about your mix will be deleted
                  automatically after 7 days. However, you can report issues even after this time.
                </p>
                <div class="divider"></div>
                <p>You can also check the payout amount you will receive:</p>
                <div class="btc-amount-wrapper">
                  <v-text-field v-model="btcAmount" type="text" label="BTC payin amount" />
                  <div class="error-message" v-if="btcAmountError">Amount must be non-negative</div>
                </div>
                <v-banner
                  class="btc-amount-table-collapse"
                  v-model="amountTableVisible"
                  transition="slide-y-transition"
                >
                  <table class="btc-amount-table">
                    <thead>
                      <tr>
                        <th>Address</th>
                        <th>Payout amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="widget in widgets" :key="widget.number">
                        <td>{{ widget.address }}</td>
                        <td>
                          {{ parseFloat(parseFloat(btcAmount).toFixed(8)) / totalWidgets }} BTC
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </v-banner>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
  .completion-wrapper {
    padding: 0 40px 40px;
    .content-holder {
      margin: 0 15%;
      h3 {
        color: var(--color-primary);
        margin-bottom: 10px;
        font-size: 34px;
        line-height: 40px;
      }
      table.content-aligner {
        margin: 0;
        margin-left: -100px;
        padding: 0;
        border-collapse: collapse;
        tr td {
          &:first-of-type {
            width: 100px;
            vertical-align: top;
          }
          h4 {
            color: var(--color-primary);
            font-size: 30px;
            font-weight: 400;
            line-height: 32px;
            margin: 30px 0 15px;
          }
          p {
            color: black;
            font-size: 18px;
          }
          .bitcoin-address-wrapper {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            margin-top: 10px;
            margin-bottom: 8px;
            .address-box {
              position: relative;
              background-color: #e1f5fe;
              font-size: 18px;
              font-weight: bold;
              letter-spacing: 0.4px;
              line-height: 18.4px;
              flex-grow: 2;
              max-width: 500px;
              margin: 6px 10px 6px 0;
              padding: 32px 14px 16px;
              border: 2px solid #03a9f4;
              border-radius: 2px;
              .header {
                position: absolute;
                color: white;
                background-color: #03a9f4;
                font-size: 16px;
                text-align: left;
                top: 0;
                left: 0;
                width: 100%;
                padding-left: 2px;
              }
              .btc-address {
                a {
                  color: #333333;
                  display: block;
                  width: 100%;
                  white-space: nowrap;
                  text-decoration: none;
                }
              }
              .view-toggler {
                position: absolute;
                right: -6px;
                bottom: -6px;
                width: 36px;
                height: 36px;
                border-radius: 50%;
              }
            }
            .copy-address-btn {
              color: white;
              background-color: #03a9f4;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              min-width: 70px;
              margin: 6px 0;
              padding: 7px 12px !important;
              border-radius: 2px;
              font-size: 15px;
              letter-spacing: 0.5px;
              font-weight: 300;
              text-transform: uppercase;
              line-height: 36px;
              cursor: pointer;
              &:hover {
                background-color: #29b6f6;
              }
            }
          }
          .transaction-btc-amount {
            margin-bottom: 10px;
          }
          .download-letterbox {
            position: relative;
            background-color: #e1f5fe;
            max-width: 300px;
            font-size: 16px;
            text-align: center;
            margin: 6px 10px 6px 0;
            padding: 42px 10px 0px;
            border: 2px solid #03a9f4;
            border-radius: 2px;
            .header {
              position: absolute;
              color: white;
              background-color: #03a9f4;
              font-size: 16px;
              font-weight: bold;
              text-align: left;
              top: 0;
              left: 0;
              width: 100%;
              padding-left: 2px;
            }
            a {
              color: #03a9f4 !important;
              font-size: 20px;
              font-weight: bold;
              text-decoration: none;
            }
          }
          .continue-btn {
            background-color: #03a9f4;
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;
            line-height: 36px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-width: 90px;
            margin: 7px 0 20px 0;
            padding: 7px 20px;
            transition: opacity 0.2s ease;
            border-radius: 2px;
            &:hover {
              opacity: 0.9;
            }
          }
          .btc-amount-wrapper {
            position: relative;
            width: 300px;
            padding: 20px 0;
            .error-message {
              position: absolute;
              color: #de3226;
              bottom: 18px;
              left: 0;
            }
            label {
              color: var(--color-primary) !important;
              font-size: 18px;
            }
            input {
              color: black;
              font-size: 18px;
              font-weight: bold;
            }
          }
          .btc-amount-table-collapse {
            .v-banner__wrapper {
              padding: 0 !important;
              border: 0 !important;
            }
            table.btc-amount-table {
              text-align: left;
              border-collapse: collapse;
              white-space: nowrap;
              thead th,
              tbody,
              td {
                border: 1px solid #03a9f4;
                padding: 5px 30px 5px 5px;
              }
              thead th {
                color: var(--color-primary);
                font-weight: bold;
              }
            }
          }
        }
      }
      .divider {
        background-color: #e1f5fe;
        height: 2px;
        width: 100%;
        margin: 40px 0;
      }
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import {mapGetters, mapState} from "vuex";

  // Components
  import Page from "../components/Page.vue";
  import Validator from "../components/MixValidator.vue";

  export default Vue.extend({
    name: "MixComplete",
    components: {
      page: Page,
      "mix-validator": Validator
    },
    data: () => ({
      btcAmount: "",
      btcAmountError: false,
      amountTableVisible: false
    }),
    watch: {
      btcAmount(amount) {
        if (amount && /^[1-9]\d*(\.\d+)?$/.test(amount) && parseFloat(amount) > 0) {
          this.btcAmountError = false;
          this.amountTableVisible = true;
          return;
        }
        this.btcAmountError = true;
        this.amountTableVisible = false;
      }
    },
    computed: {
      ...mapGetters(["bitcoinAddress", "totalWidgets", "totalAmount"]),
      ...mapState(["widgets"])
    }
  });
</script>
