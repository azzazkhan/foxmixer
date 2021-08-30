<template>
  <div :class="{'intro-section': true, animate}">
    <div class="text-wrapper">
      <h1 class="intro-title">
        <span :class="{welcome: true, visible: animateFirst}">Welcome</span>
        &nbsp;
        <span :class="{to: true, visible: animateSecond}">to</span>
        &nbsp;
        <span :class="{foxmixer: true, visible: animateThird}">FoxMixer</span>
      </h1>
      <h3 :class="{'intro-description': true, animate: animatedDescription}">
        The High Quality Bitcoin Mixer
      </h3>
    </div>
    <div class="logo-wrapper">
      <img src="../../assets/images/logo-big.svg" alt="FoxMixer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .intro-section {
    color: var(--color-primary);
    display: flex;
    width: 80%;
    margin-bottom: 10px;
    .text-wrapper {
      text-align: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      .intro-title {
        font-size: 56px;
        line-height: 1.3em;
        letter-spacing: -1px;
        margin-bottom: 30px;
        margin-top: -10px;
        .to {
          margin-right: -15px;
          margin-left: -15px;
          padding: 0 !important;
        }
      }
      .intro-description {
        position: relative;
        font-size: 34px;
        line-height: 1.2em;
      }
    }
    .logo-wrapper {
      display: none;
      img {
        height: 134px;
        width: 134px;
        border-radius: 4px;
      }
    }
    @media (min-width: 1100px) {
      padding-left: 10px;
      width: auto;
      display: inline-flex;
      margin-left: 50px;
      .text-wrapper {
        text-align: left;
        justify-content: flex-start;
      }
      .logo-wrapper {
        display: block;
        position: relative;
        left: 50px;
      }
    }
    &.animate {
      .text-wrapper {
        span {
          visibility: hidden;
          &.visible {
            visibility: visible;
          }
        }
        .intro-description {
          top: 20px;
          transition: all 1s ease;
          &::before {
            content: "";
            position: absolute;
            background-color: white !important;
            top: 0px;
            left: 0;
            display: block;
            height: 100%;
            width: 100%;
            transition: all 1s ease;
          }
          &.animate {
            top: 0;
            &::before {
              top: 100% !important;
            }
          }
        }
      }
      .logo-wrapper {
        animation-name: animateIntroLogo;
        animation-duration: 2000ms;
        animation-timing-function: ease;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }
  @keyframes animateIntroLogo {
    0% {
      opacity: 0;
      filter: blur(5px);
      transform: scale(1.6);
    }
    20% {
      opacity: 100%;
    }
    100% {
      filter: blur(0);
      transform: scale(1);
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "Intro",
    props: {
      animate: Boolean
    },
    data: () => ({
      animateFirst: false,
      animateSecond: false,
      animateThird: false,
      animatedDescription: false
    }),
    mounted() {
      setTimeout(() => {
        this.animateFirst = true;
      }, 1000);
      setTimeout(() => {
        this.animateSecond = true;
      }, 1500);
      setTimeout(() => {
        this.animateThird = true;
      }, 2000);
      setTimeout(() => {
        this.animatedDescription = true;
      }, 2500);
    }
  });
</script>
