<template>
  <page class="page-home">
    <v3-banner />
    <mixer />
    <texts-collection />
    <figures-collection />
    <icons-section />
  </page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";
import Banner from "../components/header/Banner.vue";
import Mixer from "../components/mixer/index.vue";
import TextsCollection from "../components/content/HomeTextsCollection.vue";
import IconsSection from "../components/content/HomeIconsSection.vue";
import FiguresCollection from "../components/content/FiguresCollection.vue";

export default Vue.extend({
  name: "Home",
  components: {
    page: Page,
    "v3-banner": Banner,
    mixer: Mixer,
    "texts-collection": TextsCollection,
    "icons-section": IconsSection,
    "figures-collection": FiguresCollection,
  },
});
</script>
