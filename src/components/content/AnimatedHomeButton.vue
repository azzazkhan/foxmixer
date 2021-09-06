<template>
  <div :class="{'animated-button-wrapper': true, animate: visible}">
    <center>
      <img src="../../assets/images/arrow.svg" class="left" alt="Image not available" />
      <button @click="$router.push('/mixer')">Start Mixing</button>
      <img src="../../assets/images/arrow.svg" class="right" alt="Image not available" />
    </center>
    <router-link to="/why" class="more-text">Learn more...</router-link>
  </div>
</template>

<style lang="scss" scoped>
  .animated-button-wrapper {
    opacity: 0;
    text-align: left;
    max-width: 690px;
    margin: 50px 6%;
    border-radius: 2px;
    transition: opacity 1000ms ease;
    &.animate {
      opacity: 1;
    }
    button {
      color: white;
      background-color: #03a9f4;
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 0;
      line-height: 36px;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      min-width: 90px;
      padding: 0 30px;
      margin: 30px 0;
      border: 0;
      border-radius: 2px;
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
        background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        background-color: #29b6f6;
      }
    }
    img {
      margin-bottom: -15px;
      height: 50px;
      &.left {
        margin-right: 30px;
        transform: rotate(180deg);
        animation: animateLeftArrow 3000ms ease-in-out 0ms infinite forwards normal;
      }
      &.right {
        margin-left: 30px;
        animation: animateRightArrow 3000ms ease-in-out 0ms infinite forwards normal;
      }
      @media screen and (max-width: 720px) {
        display: none !important;
      }
    }
    .more-text {
      font-weight: 300;
      color: #03a9f4;
      display: block;
      text-decoration: none;
      text-align: center;
    }
  }
  @keyframes animateLeftArrow {
    0% {
      margin-right: 30px;
    }
    50% {
      margin-right: 50px;
    }
    100% {
      margin-right: 30px;
    }
  }
  @keyframes animateRightArrow {
    0% {
      margin-left: 30px;
    }
    50% {
      margin-left: 50px;
    }
    100% {
      margin-left: 30px;
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "AnimatedHomeButton",
    data: () => ({
      visible: false
    }),
    mounted() {
      setTimeout(() => {
        this.visible = true;
      }, 3000);
    }
  });
</script>
