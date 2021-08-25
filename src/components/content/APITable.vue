<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Parameter</th>
        <th>Range</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>(required)</td>
        <td>
          <span class="highlight">payoutAddress1</span>
        </td>
        <td></td>
        <td>The bitcoin payout address number 1</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <span class="highlight">payoutDelay1</span>
        </td>
        <td>2 - 48</td>
        <td>The payout delay for payout address 1, in hours</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <span class="highlight">payoutPercentage1</span>
        </td>
        <td>0 - 100</td>
        <td>The payout percentage for payout address 1, in integers</td>
      </tr>
      <tr>
        <td>(optional)</td>
        <td>
          <span class="highlight">payoutAddress2</span>
        </td>
        <td></td>
        <td>The bitcoin payout address number 2</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <span class="highlight">payoutDelay2</span>
        </td>
        <td>2 - 48</td>
        <td>The payout delay for payout address 2, in hours</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <span class="highlight">payoutPercentage2</span>
        </td>
        <td>0 - 100</td>
        <td>The payout percentage for payout address 2, in integers</td>
      </tr>
      <tr>
        <td>(optional)</td>
        <td>
          <span class="highlight">payoutAddress3</span>
        </td>
        <td></td>
        <td>The bitcoin payout address number 3</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <span class="highlight">payoutDelay3</span>
        </td>
        <td>2 - 48</td>
        <td>The payout delay for payout address 3, in hours</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <span class="highlight">payoutPercentage3</span>
        </td>
        <td>0 - 100</td>
        <td>The payout percentage for payout address 3, in integers</td>
      </tr>
      <tr>
        <td>(recommended)</td>
        <td>
          <span class="highlight">mixcode</span>
        </td>
        <td></td>
        <td>The mixcode that is used for this mix. This should be the same for all requests to prevent receiving the same coins from an earlier mix again. You could use "RvPv4" for example.</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  margin-top: 15px;
  text-align: left;
  border-collapse: collapse;
  tr th {
    font-weight: bold;
    color: var(--color-primary) !important;
  }
  tr th,
  td {
    color: #000000;
    font-size: 18px;
    padding: 5px 30px 5px 5px;
    border: 1px solid #03a9f4;
    &:first-of-type {
      border: none !important;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "APITable",
});
</script>