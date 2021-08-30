<template>
  <page class="review-page">
    <div class="padding-wrapper">
      <div class="review-container">
        <h1 class="entry-title">FoxMixer Reviews</h1>
        <p class="entry-description">
          We're continually updating and improving our service. Next to security enhancements, the
          main source of innovation is community feedback. This has always been the be the main
          factor to determine where the further development path will go. It enables the maintenance
          of the quality you are used to - state of the art bitcoin mixing in perfection.
        </p>
        <p class="entry-description">
          Here is a collection of reviews from users of FoxMixer. Leave your own review below to
          help other users and to show how FoxMixer can be improved further.
        </p>
        <div class="divider"></div>
        <div class="slider-wrapper">
          <reviews-carousel />
        </div>
        <div class="divider"></div>
        <center>
          <button class="start-btn">Go Mixing</button>
        </center>
      </div>
    </div>
  </page>
</template>

<style lang="scss">
  .padding-wrapper {
    padding: 0 40px;
  }
  .review-container {
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
    .divider {
      background-color: #e1f5fe;
      height: 2px;
      width: 100%;
      margin: 40px 0;
    }
    .slider-wrapper {
      padding: 0 50px;
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
      margin: 80px auto 40px;
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
  import ReviewsCarousel from "../components/carousel/ReviewsCarousel.vue";

  export default Vue.extend({
    name: "FAQ",
    components: {
      page: Page,
      "reviews-carousel": ReviewsCarousel
    },
    data: () => ({
      btcOpened: true,
      coinbaseOpened: false
    })
  });
</script>
