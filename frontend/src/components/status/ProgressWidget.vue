<template>
  <div class="progress-widget-wrapper">
    <h3 class="title">Status of Mix</h3>
    <div class="progress-widget">
      <progress-bar :value="29" />
      <steps-wrapper>
        <step completed :left="7.5">
          <h1>Mix created</h1>
          <p>On {{ result.created_min }} GMT</p>
        </step>
        <step ongoing :left="29">
          <h1>Waiting for payin...</h1>
          <p style="min-width: 180px">Minimum amount is 0.00200000 BTC</p>
        </step>
        <!-- <step pending :left="99">
          <h1>Payout 1</h1>
          <p style="min-width: 120px">On 27 Aug, at 7:05 GMT</p>
        </step> -->
        <step v-for="(payout, index) in payouts" :key="payout.key" :left="99 - 15 * index" pending>
          <h1>Payout {{ payout.key }}</h1>
          <p style="min-width: 120px">On {{ payout.time }} GMT</p>
        </step>
      </steps-wrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .progress-widget-wrapper {
    margin-bottom: 140px;
    margin-right: 50px;
    .title {
      color: var(--color-primary);
      font-size: 34px !important;
      font-weight: 400;
      letter-spacing: 0 !important;
      line-height: 40px;
      margin-bottom: 10px;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import {mapState} from "vuex";

  // Components
  import Bar from "./Bar.vue";
  import StepsWrapper from "./StepsWrapper.vue";
  import Step from "./Step.vue";
  import {Result} from "@/store/types";

  interface Data {
    payouts: [];
  }

  export default Vue.extend<Data, any, any, any>({
    name: "ProgressWidget",
    components: {
      "progress-bar": Bar,
      "steps-wrapper": StepsWrapper,
      step: Step
    },
    data: () => ({
      payouts: []
    }),
    created() {
      const result = this.result as Result;
      const payouts = [{key: 1, ...result.payout_1}];
      result?.payout_2 && payouts.push({key: 2, ...result.payout_2});
      result?.payout_3 && payouts.push({key: 3, ...result.payout_3});

      this.payouts = payouts.reverse();
    },
    computed: mapState(["result"])
  });
</script>
