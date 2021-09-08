<template></template>

<script lang="ts">
  import Vue from "vue";
  import {mapState, mapMutations} from "vuex";
  import {Result} from "../store/types";
  import {fetchMix} from "@/helpers/mix";

  export default Vue.extend({
    name: "MixValidator",
    props: {
      overlay: Boolean
    },
    created() {
      const result = this.result as Result;
      if (!result.loaded) {
        this.overlay && this.setLoader({loading: true, text: "Your mix is loading..."});
        setTimeout(() => {
          fetchMix(this.$route.params.mixCode as string)
            .then((res: Result) => {
              this.setResult({
                ...res,
                loaded: true
              });
            })
            .catch((err) => {
              this.$emit("error");
            })
            .finally(() => {
              this.overlay && this.setLoader({loading: false, text: ""});
            });
        }, /* Math.floor(Math.random() * 7000) */ 10);
      }
    },
    computed: mapState(["result"]),
    methods: {
      ...mapMutations(["setResult", "setLoader"])
    }
  });
</script>
