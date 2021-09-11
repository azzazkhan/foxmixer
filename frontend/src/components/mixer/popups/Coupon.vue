<template>
  <v-dialog v-model="opened" max-width="50%">
    <v-card>
      <v-card-text class="pt-2">
        <h2 class="popup-header">Coupon Code</h2>
        <div class="coupon-code-wrapper">
          <v-text-field
            type="text"
            v-model="couponCode"
            class="input-field"
            placeholder="Enter Coupon Code here"
          />
          <span v-show="couponError" class="error-message">
            The given coupon code is not valid
          </span>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="ml-auto" text @click="toggleCouponPopup(false)">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
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
  import {mapState, mapMutations} from "vuex";

  export default Vue.extend({
    name: "CouponPopup",
    data: () => ({
      couponError: false,
      couponCode: ""
    }),
    computed: mapState({
      opened: "couponCodePopupOpened"
    }),
    methods: mapMutations(["toggleCouponPopup"])
  });
</script>
