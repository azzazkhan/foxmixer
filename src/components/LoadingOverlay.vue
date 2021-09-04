<template>
  <div :class="{'loading-overlay': true, visible: loader.loading}">
    <div class="content-wrapper">
      <div class="logo-wrapper">
        <img src="../assets/images/logo-big.svg" alt="FoxMixer Logo" />
      </div>
      <div class="loader-wrapper">
        <v-progress-circular :size="50" color="#01579B" indeterminate />
      </div>
      <div class="text-wrapper" v-text="loader.text || 'Loading...'"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Loader} from "@/store/types";

  export default Vue.extend({
    name: "LoadingOverlay",
    computed: {
      loader: {
        get() {
          const loader = this.$store.state.loader as Loader;
          if (loader.loading) this.disableScrolling();
          else this.enableScrolling();

          return loader;
        }
      }
    },
    mounted() {
      const {loading} = this.loader as Loader;
      if (loading) this.disableScrolling();
      else this.enableScrolling();
    },
    methods: {
      disableScrolling() {
        const scrollElement = document.querySelector(".page") as HTMLElement | null;
        if (!scrollElement) return false;
        scrollElement.style.overflow = "hidden";
      },
      enableScrolling() {
        const scrollElement = document.querySelector(".page") as HTMLElement | null;
        if (!scrollElement) return false;
        scrollElement.style.overflow = "auto";
      }
    }
  });
</script>

<style src="../assets/styles/components/loader.scss" lang="scss" scoped></style>
