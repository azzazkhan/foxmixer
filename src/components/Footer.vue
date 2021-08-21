<template>
  <footer>
    <div class="site-info-wrapper">
      <div class="copyrights">&copy; 2021 FoxMixer</div>
      <ul class="navigation">
        <li><a href="/">API</a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">Reviews</a></li>
        <li><a href="/">Investing</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #e1f5fe;
  width: 100%;
  padding: 20px 40px;
  .site-info-wrapper {
    display: flex;
    .copyrights {
      color: #000000;
      font-size: 16px;
      flex-grow: 1;
      flex-shrink: 0;
      padding-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
});
</script>