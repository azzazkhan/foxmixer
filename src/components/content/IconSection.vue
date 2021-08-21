<template>
  <div class="single-icon-wrapper">
    <div class="icon-wrapper">
      <img
        v-if="icon"
        :src="require(`../../assets/images/icon_${icon}.png`)"
        alt="Image not available"
      />
    </div>
    <div class="title-wrapper">
      <slot name="title" />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
    <div class="divider"></div>
  </div>
</template>

<style lang="scss" scoped>
.single-icon-wrapper {
  margin: 0 20px;
  &.wide {
    @media (min-width: 428px) {
      grid-column: span 2 / span 2;
      margin: 0;
    }
    @media (min-width: 880px) {
      grid-column: span 1 / span 1;
    }
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 130px;
      @media (min-width: 880px) {
        height: 160px;
      }
    }
  }
  .title-wrapper > * {
    color: var(--color-primary);
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    display: block;
    height: 70px;
    margin: 25px 0 5px;
    @media (min-width: 880px) {
      margin: 35px 0 5px;
      font-size: 30px;
    }
  }
  .content-wrapper {
    p {
      color: #000000;
      font-size: 14px;
      line-height: 19px;
      text-align: justify;
      margin: 0 10px 30px;
      @media (min-width: 428px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media (min-width: 880px) {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
  .divider {
    height: 2px;
    background-color: #e1f5fe;
    width: 100%;
    margin: 30px 10px 40px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IconSection",
  props: {
    icon: String,
  },
  data: () => ({}),
});
</script>