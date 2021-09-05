<template>
  <Page>
    <div style="padding: 40px; color: #000000;">
      An error occurred: The requested URL could not be found
    </div>
  </Page>
</template>

<script lang="ts">
  import Vue from "vue";
  import Page from "../components/Page.vue";

  export default Vue.extend({
    name: "ErrorPage",
    components: {Page}
  });
</script>
