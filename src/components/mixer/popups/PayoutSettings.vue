<template>
  <v-dialog v-model="opened" max-width="50%">
    <v-card>
      <v-card-text class="pt-2">
        <h2 class="popup-header">Advance payout settings</h2>
        <v-radio-group v-model="payoutMethod">
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
          @click="toggleSettingsPopup(false)"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
.popup-header {
  color: var(--color-primary);
  position: relative;
  top: 10px;
  margin-top: 10px;
}
</style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "PayoutSettings",
  computed: {
    ...mapState({
      opened: "payoutSettingsPopupOpened",
      payoutMethod: "payoutMethod",
    }),
    payoutMethod: {
      get() {
        return this.$store.state.payoutMethod;
      },
      set(method: "percentage" | "amount") {
        this.$store.commit("setPayoutMethod", method);
      },
    },
  },
  methods: mapMutations(["setPayoutMethod", "toggleSettingsPopup"]),
});
</script>