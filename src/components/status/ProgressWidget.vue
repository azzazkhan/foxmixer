<template>
  <div class="progress-widget-wrapper">
    <h3 class="title">Status of Mix</h3>
    <div class="progress-widget">
      <progress-bar :value="29" />
      <steps-wrapper>
        <step completed :left="7.5">
          <h1>Mix created</h1>
          <p style="">On 26 Aug, at 19:05 GMT</p>
        </step>
        <step ongoing :left="29">
          <h1>Waiting for payin...</h1>
          <p style="min-width: 180px">Minimum amount is 0.00200000 BTC</p>
        </step>
        <step pending :left="99">
          <h1>Payout 1</h1>
          <p style="min-width: 120px">On 27 Aug, at 7:05 GMT</p>
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
import Bar from "./Bar.vue";
import StepsWrapper from "./StepsWrapper.vue";
import Step from "./Step.vue";

export default Vue.extend({
  name: "ProgressWidget",
  components: {
    "progress-bar": Bar,
    "steps-wrapper": StepsWrapper,
    step: Step,
  },
});
</script>