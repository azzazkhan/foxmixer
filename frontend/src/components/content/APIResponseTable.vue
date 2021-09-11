<template>
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span class="highlight">payinAddress</span>
        </td>
        <td>The newly generated bitcoin payin address for this mix</td>
      </tr>
      <tr>
        <td>
          <span class="highlight">payinAmountMin</span>
        </td>
        <td>The minimum payin amount</td>
      </tr>
      <tr>
        <td>
          <span class="highlight">payinAmountMax</span>
        </td>
        <td>The maximum amount that can be mixed at once</td>
      </tr>
      <tr>
        <td>
          <span class="highlight">mixId</span>
        </td>
        <td>A unique mix id that can be used to access details of the mix, such as the Letter of Guarantee</td>
      </tr>
      <tr>
        <td>
          <span class="highlight">error</span>
        </td>
        <td>An error description, if an error occured</td>
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
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "APIResponseTable",
});
</script>