<template>
  <div class="image-section">
    <h1 class="section-title" v-if="title" v-text="title"></h1>
    <div class="sections-wrapper">
      <div class="content-side">
        <slot />
      </div>
      <div class="figure-side">
        <img
          v-if="image"
          :src="require(`../../assets/images/figure_${image}.png`)"
          class="figure-image"
          alt="Image not available"
        />
        <div v-else class="figure-wrapper">
          <slot name="figure" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-section {
  position: relative;
  padding: 30px 0 0;
  h1 {
    color: var(--color-primary);
  }
  .section-title {
    font-size: 35px;
    margin-bottom: 40px;
    @media (min-width: 770px) {
      font-size: 45px;
    }
  }
  .sections-wrapper {
    display: flex;
    flex-direction: column;
    @media (min-width: 770px) {
      flex-direction: row;
    }
    .content-side {
      margin: 0 40px 40px 0;
      h1 {
        font-size: 28px;
        line-height: 1.2em;
        margin-bottom: 20px;
        @media (min-width: 770px) {
          font-size: 34px;
        }
      }
      p {
        color: #000000;
        font-size: 15px;
        text-align: justify;
        line-height: 1.4em;
        @media (min-width: 770px) {
          font-size: 18px;
          margin-left: 40px;
        }
        @media (min-width: 880px) {
          margin-left: 40px;
        }
      }
    }
    .figure-side {
      text-align: center;
      @media (min-width: 770px) {
        flex-grow: 1;
        min-width: 40%;
      }
      img {
        max-width: 100%;
      }
    }
  }
  &::after {
    content: "";
    background: #e1f5fe;
    height: 2px;
    width: 100%;
    display: block;
    margin: 60px 0 20px;
    @media (min-width: 770px) {
      margin: 60px 0 40px;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FigureSection",
  props: {
    image: String,
    title: String,
  },
});
</script>