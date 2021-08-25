<template>
  <footer>
    <div class="site-info-wrapper">
      <div class="copyrights">&copy; 2021 FoxMixer</div>
      <ul class="navigation">
        <li><router-link to="/api">API</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/reviews">Reviews</router-link></li>
        <li><router-link to="/invest">Investing</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div class="description-wrapper">
      <span class="tagline">FoxMixer - The High Quality Bitcoin Mixer</span>
      <span class="url">https://www.foxmixer.com/</span>
      <span class="token">
        foxmixer4dw2zluv7gy4pgqrpp2ab6p323s5clcyt7i5csbpk2pzezid.onion
      </span>
      <span class="old-site">foxmixer6mrsuxrl.onion</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #e1f5fe;
  width: 100%;
  padding: 15px 30px;
  @media (min-width: 880px) {
    padding: 20px 40px;
  }
  .site-info-wrapper {
    display: flex;
    .copyrights {
      color: #000000;
      font-size: 13px;
      flex-grow: 1;
      flex-shrink: 0;
      padding-right: 20px;
      margin-bottom: 20px;
      @media (min-width: 880px) {
        font-size: 16px;
      }
    }
    .navigation {
      display: flex;
      flex-wrap: wrap;
      margin: -3px 0 0;
      li {
        a {
          font-size: 13px;
          text-decoration: none;
          @media (min-width: 578px) {
            font-size: 14px;
          }
          @media (min-width: 880px) {
            font-size: 17px;
          }
        }
        &::after {
          content: "/";
          line-height: 1px !important;
          position: relative;
          color: var(--color-primary);
          top: 2px;
          font-size: 18px;
          display: inline-block;
          margin: 0 4px;
          @media (min-width: 880px) {
            margin: 0 6px;
          }
        }
        &:last-of-type::after {
          display: none;
        }
      }
    }
  }
  .description-wrapper {
    font-size: 11px;
    margin-top: 10px;
    @media (min-width: 578px) {
      font-size: 13px;
      margin-top: 5px;
    }
    @media (min-width: 880px) {
      font-size: 16px;
      line-height: 1.35em;
    }
    * {
      color: black;
      display: block;
      max-width: 100%;
    }
    .tagline {
      color: var(--color-primary) !important;
      font-weight: bold;
    }
    .token {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .old-site {
      color: gray;
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