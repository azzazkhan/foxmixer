<template>
  <page class="tutorial-page">
    <div class="padding-wrapper">
      <div class="tutorial-container">
        <h1 class="entry-title">Tutorial</h1>
        <p class="entry-description">
          This is a detailed tutorial on how to mix your bitcoins with FoxMixer.
        </p>
        <div
          :class="{
            'collapse-wrapper': true,
            opened: btcOpened
          }"
        >
          <div class="header" @click="btcOpened = !btcOpened">
            How to mix bitcoins using a Bitcoin Core wallet
          </div>
          <v-banner class="content" v-model="btcOpened" transition="slide-y-transition">
            <!-- Step 1 -->
            <h4>1. Create a receive address</h4>
            <p>In your bitcoin wallet, create a new receive address by requesting a payment.</p>
            <img src="../assets/images/tutorial/btc_figure_1.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 2 -->
            <h4>2. Copy the generated address</h4>
            <p>Copy the newly generated receive address to the clipboard.</p>
            <img src="../assets/images/tutorial/btc_figure_2.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 3 -->
            <h4>3. Generate a mix at FoxMixer</h4>
            <p>
              Go to FoxMixer and paste the address. You can also set the delay, after which the
              mixed bitcoins should be payed back to you.
            </p>
            <img src="../assets/images/tutorial/btc_figure_3.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 4 -->
            <h4>4. Copy the mix address</h4>
            <p>Copy the address of the newly generated mix to the clipboard.</p>
            <img src="../assets/images/tutorial/btc_figure_4.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 5 -->
            <h4>5. Past the address to your wallet</h4>
            <p>
              Past the mix address to your bitcoin wallet and set the amount of bitcoins that you
              want to mix.
            </p>
            <img src="../assets/images/tutorial/btc_figure_5.png" alt="Image not available" />
            <p>
              Make sure the miner fee is sufficient for a fast confirmation on the blockchain. Send
              at least the minimum amount required by FoxMixer.
            </p>
            <img src="../assets/images/tutorial/btc_figure_5_1.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 6 -->
            <h4>6. Download Letter of Gurantee</h4>
            <p>
              At FoxMixer, download the Letter of Guarantee to get additional security for your mix.
            </p>
            <img src="../assets/images/tutorial/btc_figure_6.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 7 -->
            <h4>7. You are done</h4>
            <p>
              Now, the bitcoins are being mixed and payed back to you after the delay time. You can
              check the current status of the mix at any time.
            </p>
            <img src="../assets/images/tutorial/btc_figure_7.png" alt="Image not available" />
            <p>
              The status page of the mix is constantly updating, showing the detailed progress of
              your mix.
            </p>
            <img src="../assets/images/tutorial/btc_figure_7_2.png" alt="Image not available" />
            <p>
              You may want to bookmark this page for a quick way to check the current status of your
              mix at any time
            </p>
            <img src="../assets/images/tutorial/btc_figure_7_3.png" alt="Image not available" />
            <p>You will see the mixed coins as an incoming transaction to your wallet.</p>
            <img src="../assets/images/tutorial/btc_figure_7_4.png" alt="Image not available" />
            <p>That's how easy it is. Just one click away.</p>
            <br />
            <p>
              <router-link to="/mixer" class="start-btn">Start Now</router-link>
            </p>
          </v-banner>
        </div>
        <div
          :class="{
            'collapse-wrapper': true,
            opened: coinbaseOpened
          }"
        >
          <div class="header" @click="coinbaseOpened = !coinbaseOpened">
            How to mix bitcoins using a Coinbase wallet
          </div>
          <v-banner class="content" v-model="coinbaseOpened" transition="slide-y-transition">
            <!-- Step 1 -->
            <h4>1. Create a receive address</h4>
            <p>
              In your bitcoin wallet, create a new receive address and copy it to the clipboard.
              Alternatively, you can also use the address of the service, that you want to send
              bitcoins to.
            </p>
            <img src="../assets/images/tutorial/coinbase_figure_1.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 2 -->
            <h4>2. Generate a mix at FoxMixer</h4>
            <p>
              Paste the address to FoxMixer. You can also set the delay, after which the bitcoins
              will be payed back to you. Click on "Start Mixing".
            </p>
            <img src="../assets/images/tutorial/coinbase_figure_2.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 3 -->
            <h4>3. Copy the mix address</h4>
            <p>Copy the address of the newly generated mix to the clipboard.</p>
            <img src="../assets/images/tutorial/coinbase_figure_3.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 4 -->
            <h4>4. Send the bitcoins</h4>
            <p>
              Send the amount of bitcoins you want to mix to the bitcoin address in the clipboard.
              Make sure to send at least the minimum amount required by FoxMixer.
            </p>
            <img src="../assets/images/tutorial/coinbase_figure_4.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 5 -->
            <h4>5. Download Letter of Guarantee</h4>
            <p>
              At FoxMixer, download the Letter of Guarantee to get additional security for your mix.
            </p>
            <img src="../assets/images/tutorial/coinbase_figure_5.png" alt="Image not available" />
            <div class="step-divider"></div>
            <!-- Step 6 -->
            <h4>6. You are done</h4>
            <p>
              Now, the bitcoins are being mixed and payed back to you after the delay time. You can
              check the current status of the mix at any time.
            </p>
            <img src="../assets/images/tutorial/coinbase_figure_6.png" alt="Image not available" />
            <p>The status of the mix is shown after clicking on the link.</p>
            <img
              src="../assets/images/tutorial/coinbase_figure_6_2.png"
              alt="Image not available"
            />
          </v-banner>
        </div>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
  .padding-wrapper {
    padding: 0 40px;
  }
  .tutorial-container {
    max-width: 1000px;
    margin: 0 auto;
    .entry-title {
      font-size: 56px;
      color: var(--color-primary);
      margin-bottom: 10px;
    }
    .entry-description {
      color: black;
      font-size: 18px;
    }
    .collapse-wrapper {
      margin: 30px 0;
      &.opened .header::after {
        transform: rotate(-90deg);
      }
      .header {
        position: relative;
        color: white;
        background: var(--color-primary);
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 1.2em;
        cursor: pointer;
        padding: 10px;
        &::after {
          content: ">";
          color: white;
          font-size: 36px;
          display: block;
          position: absolute;
          top: 10px;
          right: 15px;
          transform: rotate(-270deg);
          transition: transform 0.75s ease;
        }
      }
      .content {
        .v-banner__wrapper {
          padding: 0 !important;
          border: 0 !important;
        }
        h4 {
          color: var(--color-primary);
          font-size: 30px;
          margin: 30px 0 15px;
          line-height: 32px;
        }
        p {
          color: black;
          font-size: 18px;
          line-height: 24px;
        }
        img {
          max-width: 100%;
          margin: 20px 0;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
        }
        .step-divider {
          background-color: #e1f5fe;
          height: 2px;
          width: 100%;
          margin: 40px 0;
        }
        .start-btn {
          background-color: #03a9f4;
          color: white;
          font-size: 30px;
          font-weight: 400;
          text-decoration: none;
          text-transform: uppercase;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          height: 70px;
          min-width: 90px;
          margin: 0 auto 20px;
          padding: 0 30px;
          transition: opacity 0.2s ease;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Page from "../components/Page.vue";
  export default Vue.extend({
    name: "FAQ",
    components: {
      page: Page
    },
    data: () => ({
      btcOpened: true,
      coinbaseOpened: false
    })
  });
</script>
