<template>
  <div class="image-section">
    <h1 class="section-title" v-if="title" v-text="title"></h1>
    <div
      :class="{
        'sections-wrapper': true,
        'animate-this': scrollReached,
        'fade-this-in': fadeIn
      }"
      :id="ref_id"
    >
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
    @media (min-width: 770px) {
      .content-side {
        flex-grow: 1;
        margin-right: 60px !important;
      }
      .figure-side {
        flex-shrink: 0;
        width: 35%;
        margin-right: 40px;
      }
    }
    .content-side,
    .figure-side {
      opacity: 0;
      transition: all 0.75s ease;
    }
    .content-side {
      margin: 0 40px 40px 0;
      transform: translateY(30px);
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
      transform: translateX(10px, -10px) scale(1.05);
      text-align: center;
      img {
        max-width: 100%;
      }
    }

    &.fade-this-in {
      .content-side,
      .figure-side {
        opacity: 1 !important;
        transform: translate(0, 0) scale(1);
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
  data: () => ({
    ref_id: `figure_wrapper_${Math.floor(Math.random() * 999999)}_${Math.floor(
      Math.random() * 999999
    )}`,
    scrollReached: false,
    fadeIn: false,
  }),
  // Add scroll event listener to add animation classes
  mounted() {
    const scrollElement = document.querySelector(".page") as HTMLElement | null;
    // Break the functionality if no scroller is defined
    if (!scrollElement) return false;
    // Put the task at the end of queue
    setTimeout(() => {
      scrollElement.addEventListener("scroll", this.handleScroll);
    }, 0);
  },
  // Remove the event listener the the componenet is unmounted
  destroyed() {
    // Put the task queue in the end
    setTimeout(() => {
      document
        .querySelector(".page")
        ?.removeEventListener("scroll", this.handleScroll);
    }, 0);
  },
  methods: {
    handleScroll() {
      const elem = document.getElementById(this.ref_id) as HTMLElement;
      if (elem.getBoundingClientRect().top <= 340) {
        this.scrollReached = true;
        this.fadeIn = true;
      } else {
        this.fadeIn = false;
      }
    },
  },
});
</script>