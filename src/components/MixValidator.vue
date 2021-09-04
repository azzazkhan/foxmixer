<template></template>

<script lang="ts">
  import Vue from "vue";
  import {mapState, mapMutations} from "vuex";
  import {Result} from "../store/types";

  export default Vue.extend({
    name: "MixValidator",
    created() {
      const result = this.result as Result;
      if (!result.address || !result.code || !result.mix || !result.payout_1) {
        console.log("Mix data not loaded!");
      }
    },
    computed: mapState(["result"]),
    methods: {
      ...mapMutations(["setResult", "setLoader"])
    }
  });
</script>
