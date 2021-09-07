<template>
  <page class="mix-complete-page">
    <mix-validator @error="handleError" />
    <div v-if="error" style="padding: 0 40px; color: #000000;">
      An error occurred: The selected mix does not exist. Maybe it expired or the link is wrong.
    </div>
    <div v-else class="completion-wrapper">
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
                  <div
                    :class="{
                      'address-box': true,
                      'qr-box': addressType === 'image'
                    }"
                  >
                    <div class="header">
                      {{ addressType === "string" ? "Bitcoin address" : "QR code" }}
                    </div>
                    <span class="btc-address" v-if="addressType === 'string'">
                      <a :href="result.loaded ? `bitcoin:${bitcoinAddress}` : '#'">
                        <v-tooltip bottom v-if="result.loaded">
                          <template v-slot:activator="{on, attrs}">
                            <span v-bind="attrs" v-on="on">{{ bitcoinAddress }}</span>
                          </template>
                          <small class="custom-tooltip">
                            Send the bitcoins that should<br />
                            be mixed to this address
                          </small>
                        </v-tooltip>
                        <span v-if="!result.loaded">Loading....</span>
                      </a>
                    </span>
                    <div class="qr-wrapper" v-if="addressType === 'image'">
                      <img
                        v-show="result.loaded"
                        src="../assets/images/qr.png?v=2"
                        class="qr-image"
                        alt="BTC Wallet QR"
                      />
                      <div class="placeholder" v-if="!result.loaded">Loading....</div>
                    </div>
                    <button class="view-toggler" @click.prevent="toggleAddress">
                      <v-tooltip bottom v-if="addressType === 'string'">
                        <template v-slot:activator="{on, attrs}">
                          <span v-bind="attrs" v-on="on">
                            <v-icon color="#01579b" dense>
                              mdi-gradient
                            </v-icon>
                          </span>
                        </template>
                        <small class="custom-tooltip">
                          Show QR code
                        </small>
                      </v-tooltip>
                      <v-tooltip bottom v-if="addressType === 'image'">
                        <template v-slot:activator="{on, attrs}">
                          <span v-bind="attrs" v-on="on">
                            <v-icon color="#01579b" dense>
                              mdi-text-subject
                            </v-icon>
                          </span>
                        </template>
                        <small class="custom-tooltip">
                          Show bitcoin address
                        </small>
                      </v-tooltip>
                    </button>
                  </div>
                  <div class="copy-address-btn" v-if="addressType === 'string'">
                    Copy to clipboard
                  </div>
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
                    <a v-if="result.loaded" :href="getLogURL($route.params.mixCode)" download>
                      <img src="../assets/images/icons/download_24.png" alt="Image not available" />
                      <br />
                      <p style="color: #03a9f4">Download now</p>
                    </a>
                    <span v-else style="display: block;margin-bottom: 20px;">Loading...</span>
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
                      <tr v-for="payout in resultantPayouts" :key="payout.timestamp">
                        <td>{{ payout.address }}</td>
                        <td>
                          {{
                            parseFloat(parseFloat(btcAmount).toFixed(8)) / resultantPayouts.length
                          }}
                          BTC
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

<style src="../assets/styles/pages/mix_complete.scss" lang="scss" scoped></style>

<style lang="scss">
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
</style>

<script lang="ts">
  import Vue from "vue";
  import {mapGetters, mapState, mapMutations} from "vuex";
  import {getLogURL} from "@/config";

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
      amountTableVisible: false,
      error: false,
      addressType: "string" // "string" || "image"
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
      ...mapGetters(["bitcoinAddress", "resultantPayouts", "totalAmount"]),
      ...mapState(["widgets", "result"])
    },
    methods: {
      ...mapMutations(["setLoader"]),
      handleError() {
        console.log("Error occurred");
        this.error = true;
      },
      getLogURL,
      toggleAddress() {
        if (this.addressType === "string") this.addressType = "image";
        else this.addressType = "string";
      }
    }
  });
</script>
