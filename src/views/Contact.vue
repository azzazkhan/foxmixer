<template>
  <page class="contact-page">
    <div class="padding-wrapper">
      <div class="contact-container">
        <h1 class="entry-title">
          Contact us
          <v-icon color="#01579B">mdi-email</v-icon>
        </h1>
        <p class="entry-description">
          If you want to contact us, send us an email to contact(at)foxmixer.com.<br />
          We will reach back to you as soon as possible.
        </p>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
.padding-wrapper {
  padding: 0 40px;
}
.contact-container {
  max-width: 1000px;
  margin: 0 auto;
  .entry-title {
    font-size: 56px;
    color: var(--color-primary);
    margin-bottom: 10px;
  }
  .entry-description {
    color: black;
    font-size: 18px;
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
    line-height: 24px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";

export default Vue.extend({
  name: "Contact",
  components: {
    page: Page,
  },
});
</script>
