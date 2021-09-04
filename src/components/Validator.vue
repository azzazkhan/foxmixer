<template></template>

<script lang="ts">
  import Vue from "vue";
  import {Result} from "@/store/types";
  import {mapState, mapMutations} from "Vuex";
  import axios from "axios";
  import {API_URL} from "@/config";

  export default Vue.extend({
    name: "ResultsValidator",
    created() {
      const result = this.result as Result;
      if (!result.address || !result.code || !result.mix || !result.payout_1) {
        this.setLoader({loading: true, text: "Loading your mix...."});
        // this.fetchMix();
      }
    },
    computed: mapState(["result"]),
    methods: {
      ...mapMutations(["setLoader"])
    }
  });
</script>
