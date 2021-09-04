<template></template>

<script lang="ts">
  import Vue from "vue";
  import {Result} from "@/store/types";
  import {mapState, mapMutations} from "Vuex";
  import axios from "axios";
  import {API_URL} from "@/config";

  export default Vue.extend({
    name: "ResultsValidator",
    props: {
      // mix: {
      //   type: String,
      //   required: true
      // }
    },
    created() {
      const result = this.result as Result;
      if (!result.address || !result.code || !result.mix || !result.payout_1) {
        this.setLoader(true, "Loading your mix....");
        this.fetchMix();
      }
    },
    computed: mapState(["result"]),
    methods: {
      fetchMix() {
        // const mix = this.$route.params.mixCode as string;
        // axios
        //   .get(API_URL + "/" + mix)
        //   .then((res) => {
        //     console.log(res.data);
        //   })
        //   .catch((err) => {
        //     console.error("An error occurred while fetching mix data!", err);
        //   })
        //   .finally(() => {
        //     this.setLoader(false, "");
        //   });
      },
      ...mapMutations(["setLoader"])
    }
  });
</script>
