<template>
  <page class="api-page">
    <div class="padding-wrapper">
      <div class="api-container">
        <h1 class="entry-title">Developer API</h1>
        <h4>Simple API access for developers</h4>
        <p class="entry-description">
          Automate the entire process of bitcoin mixing using the provided API.<br />
          To use the API, initiate a standard HTTP GET request to
          <span class="highlight">https://www.foxmixer.com/api/createMix</span>
          <br />
          Append the following parameters for creating a new mix, all names are case-sensitive:
          <api-table />
        </p>
        <h4>Example</h4>
        <p>
          To create a mix using the example payout address '1234567890' with a payout delay of 12 hours, a request would look like this:<br />
          <span class="highlight">https://www.foxmixer.com/api/createMix?payoutAddress1=1234567890&payoutDelay1=12&payoutPercentage1=100&mixcode=arH79</span>
        </p>
        <h4>Response</h4>
        <p>
          The response will contain the following parameters:
          <response-table />
        </p>
        <h4>Letter of Guarantee</h4>
        <p>
          You can download the Letter of Guarantee after creating a mix.<br />
          For an example mix id of 'ABCDEF', the download address is:<br />
          <span class="highlight">https://www.foxmixer.com/mix/ABCDEF/LetterOfGuarantee.txt</span>
        </p>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
.padding-wrapper {
  padding: 0 40px;
}
.api-container {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
  .entry-title {
    font-size: 56px;
    color: var(--color-primary);
    margin-bottom: 10px;
  }
  .entry-description {
    color: black;
    font-size: 18px;
  }
  .highlight {
    padding: 2px 7px;
    color: #29b6f6;
    font-family: "Courier New";
    font-weight: bold;
    background-color: #e1f5fe;
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
    line-height: 26px;
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
</style>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";
import APITable from "../components/content/APITable.vue";
import ResponseTable from "../components/content/APIResponseTable.vue";

export default Vue.extend({
  name: "FAQ",
  components: {
    page: Page,
    "api-table": APITable,
    "response-table": ResponseTable,
  },
  data: () => ({
    btcOpened: true,
    coinbaseOpened: false,
  }),
});
</script>