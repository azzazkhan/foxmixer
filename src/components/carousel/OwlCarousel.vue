<template>
  <div style="position: relative">
    <div class="owl-carousel" :id="id">
      <slot />
    </div>
    <div class="slider-controls">
      <span class="previous" @click.prevent="prevSlide"></span>
      <span class="next" @click.prevent="nextSlide"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .slider-controls {
    position: absolute;
    top: 0;
    left: -50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% + 100px);
    height: 100%;
    span {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
      background-size: 27px 44px;
      background-size: 27px 44px;
      background-repeat: no-repeat;
      cursor: pointer;
      width: 27px;
      height: 44px;
      &.previous {
        transform: rotate(180deg);
      }
    }
  }
</style>

<script>
  require("owl.carousel/src/js/owl.carousel");

  export default {
    name: "OwlCarousel",
    data: () => ({
      id: null,
      el: document.body
    }),
    created() {
      this.id = "owl_slider_" + Math.floor(Date.now() / 1000);
    },
    mounted() {
      const el = $(`#${this.id}`).owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        margin: 30
      });
      this.el = el;
      setInterval(this.nextSlide, 3000);
    },
    destroyed() {
      clearInterval(this.nextSlide);
    },
    methods: {
      nextSlide() {
        this.el.trigger("next.owl.carousel", [300]);
      },
      prevSlide() {
        this.el.trigger("prev.owl.carousel", [300]);
      }
    }
  };
</script>
