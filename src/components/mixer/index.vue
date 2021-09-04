<template>
  <center>
    <div class="mixer-section">
      <payout-settings-popup />
      <coupon-code-popup />
      <!-- Only animate the header on homepage -->
      <intro-section :animate="!showWidget" />
      <!-- Show the mixer widget only on mixing page -->
      <div class="mixer-area" v-if="showWidget">
        <template v-if="!loading">
          <div class="mixer-section">
            <center>
              <div class="widgets-wrapper">
                <mixer-widget
                  v-for="(widget, index) in widgets"
                  :key="widget.number"
                  :number="index + 1"
                />
              </div>
            </center>
          </div>
          <mixer-code />
          <center>
            <button @click.prevent="mix" class="btn-mix">Start Mixing</button>
          </center>
        </template>
        <!-- Display the loader if loading  -->
        <div class="widget-loader" v-else>
          <v-progress-circular :size="50" color="#3F54B5" indeterminate />
        </div>
      </div>
      <animated-home-button v-else />
    </div>
    <template>
      <v-snackbar
        color="#FF4081"
        v-model="snackbar.opened"
        top
        right
        content-class="text--white text-subtitle-1"
        dark
        :elevation="0"
        width="100px"
      >
        <div class="d-flex justify-space-between white--text">
          <v-icon color="white" size="35">mdi-shield-alert-outline</v-icon>
          <span style="display: block; padding: 0 20px 0 10px">{{ snackbar.message }}</span>
        </div>
      </v-snackbar>
    </template>
  </center>
</template>

<style src="../../assets/styles/components/mixer.scss" lang="scss"></style>

<script lang="ts">
  import Vue from "vue";
  import axios from "axios";
  import {mapState, mapMutations, mapGetters} from "vuex";
  import {API_URL} from "../../config";
  import validator from "../../helpers/validations/mix";
  // Components
  import SettingsPopup from "./popups/PayoutSettings.vue";
  import CouponPopup from "./popups/Coupon.vue";
  import IntroSection from "./Intro.vue";
  import MixerWidget from "./Widget.vue";
  import MixerCode from "./Code.vue";
  import AnimatedBtn from "../content/AnimatedHomeButton.vue";
  import {Result} from "@/store/types";

  interface Widget {
    address: string;
    delay: number;
    amount: number;
    percentage: number;
  }

  export default Vue.extend({
    name: "MixerSection",
    components: {
      "payout-settings-popup": SettingsPopup,
      "coupon-code-popup": CouponPopup,
      "intro-section": IntroSection,
      "mixer-widget": MixerWidget,
      "mixer-code": MixerCode,
      "animated-home-button": AnimatedBtn
    },
    props: {
      showWidget: Boolean
    },
    data: () => ({
      loading: true,
      snackbar: {
        opened: false,
        message: ""
      }
    }),
    mounted() {
      // Simulate widget loading
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    computed: {
      ...mapState(["payoutMethod", "widgets"]),
      ...mapGetters(["totalWidgets", "totalPercentage", "totalAmount"])
    },
    methods: {
      mix() {
        if (!validator(this.displayError, this.payoutMethod, this.widgets)) return;
        const widgets = this.widgets.map((widget: Widget) => {
          const {address, delay, amount, percentage} = widget;
          const data: {[key: string]: string | number} = {address, delay};
          if (this.payoutMethod === "percentage") {
            if (this.widgets.length === 1) data["percentage"] = 100;
            else data["percentage"] = percentage;
          } else data["amount"] = amount;
          return data;
        });
        this.setLoader({loading: true, text: "Your mix is being generated..."});
        // Validation passed
        axios
          .post(API_URL, {method: this.payoutMethod, payouts: widgets}, {responseType: "json"})
          .then((res) => {
            const data = res.data as Result;
            this.setResult({...data, loaded: true});
            this.setLoader({loading: false, text: ""});
            this.$router.push(`/mix/${data.mix}/complete`);
          })
          .catch((err) => {
            this.setLoader({loading: false, text: ""});
            this.displayError("An error occurred!");
            console.error(err);
          });
      },
      displayError(message: string) {
        this.snackbar.opened = true;
        this.snackbar.message = message;
      },
      ...mapMutations(["setResult", "setLoader"])
    }
  });
</script>
