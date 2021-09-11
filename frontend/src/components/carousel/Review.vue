<template>
  <Slide>
    <div class="content">
      <slot />
    </div>
    <div class="meta-wrapper">
      <div class="stars-wrapper">
        <template v-if="rating === 4">
          <span class="full">★★★★</span>
          <span class="empty">★</span>
        </template>
        <template v-if="rating === 5">
          <span class="full">★★★★★</span>
        </template>
      </div>
      <div class="name-wrapper" v-text="name"></div>
    </div>
  </Slide>
</template>

<style lang="scss" scoped>
  .content {
    color: black;
    text-align: justify;
    font-size: 18px;
  }
  .meta-wrapper {
    color: black;
    font-size: 20px;
    text-align: right;
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    .stars-wrapper {
      font-size: 20px;
      .full {
        color: #e7711b;
      }
      .empty {
        color: #cccccc;
      }
    }
    .name-wrapper {
      font-weight: 400;
      font-size: 17px;
      font-style: italic;
      margin: 5px 0 0 10px;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Slide from "./OwlSlide.vue";

  export default Vue.extend({
    name: "Review",
    components: {
      Slide
    },
    props: {
      name: String,
      rating: Number
    }
  });
</script>
