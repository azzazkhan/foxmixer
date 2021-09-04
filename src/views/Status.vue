<template>
  <page class="status-page">
    <mix-validator @error="handleError" overlay />
    <div v-if="error" style="padding: 0 40px; color: #000000;">
      An error occurred. The selected mix does not exist. Maybe it expired or the link is wrong.
    </div>
    <div v-if="!error && result.loaded" class="page-content-wrapper">
      <div class="page-content">
        <progress-widget />
        <section class="mix-details">
          <h4>Mix details</h4>
          <table>
            <tbody>
              <tr>
                <tooltip-cell label="Payin address">
                  The address to send your<br />
                  bitcoins to
                </tooltip-cell>
                <td style="font-weight: bold">3KPz8DAhrzkZHUwquEJaAVTX1oZfXjJn6a</td>
              </tr>
              <tr>
                <tooltip-cell label="Mixcode">
                  The mixcode to use for<br />
                  creating further mixes
                </tooltip-cell>
                <td>9dsAd</td>
              </tr>
              <tr>
                <tooltip-cell label="Creation date">
                  The date when this mix was<br />
                  created
                </tooltip-cell>
                <td>Thu, 30 Aug 2021 19:05:18 GMT</td>
              </tr>
              <tr>
                <tooltip-cell label="Valid until">
                  The date when this mix will be<br />
                  deleted automatically
                </tooltip-cell>
                <td>Thu, 02 Sep 2021 19:05:18 GMT</td>
              </tr>
              <tr>
                <tooltip-cell label="Amount of bitcoins received">
                  The amount of bitcoins<br />
                  already received
                </tooltip-cell>
                <td>0.00000000 BTC</td>
              </tr>
              <tr>
                <tooltip-cell label="Amount of bitcoins confirmed">
                  The amount of bitcoins that<br />
                  already have at least 6<br />
                  confirmations
                </tooltip-cell>
                <td>0.00000000 BTC</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </page>
</template>

<style lang="scss" scoped>
  .page-content-wrapper {
    padding: 40px;
    section.mix-details {
      max-width: 600px;
      h4 {
        color: var(--color-primary);
        font-size: 30px;
        line-height: 32px;
        font-weight: 400;
        margin: 30px 0 15px;
      }
      table {
        width: 100%;
        margin-bottom: 20px;
        border-collapse: collapse;
        tr td {
          color: black;
          padding: 7.5px 10px;
          border: 1px solid #03a9f4;
          &:nth-of-type(2) {
            background-color: #e1f5fe;
          }
        }
      }
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import {mapState} from "vuex";

  // Components
  import Page from "../components/Page.vue";
  import ProgressWidget from "../components/status/ProgressWidget.vue";
  import TooltipCell from "../components/status/TooltipCell.vue";
  import Validator from "../components/MixValidator.vue";

  export default Vue.extend({
    name: "Status",
    components: {
      page: Page,
      "progress-widget": ProgressWidget,
      "tooltip-cell": TooltipCell,
      "mix-validator": Validator
    },
    data: () => ({
      error: false
    }),
    computed: mapState(["result"])
  });
</script>
