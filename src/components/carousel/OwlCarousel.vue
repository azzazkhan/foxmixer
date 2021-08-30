<template>
  <div class="owl-carousel" :id="id">
    <slot />
  </div>
</template>
<script>
  require("owl.carousel/src/js/owl.carousel");

  export default {
    name: "OwlCarousel",
    data: () => ({
      id: null
    }),
    created() {
      this.id = "owl_slider_" + Math.floor(Date.now() / 1000);
    },
    mounted() {
      $(`#${this.id}`).owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true
      });
    }
  };
</script>
