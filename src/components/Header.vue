<template>
  <header>
    <div class="logo-wrapper">
      <img src="../assets/images/logo.svg" class="logo" alt="FoxMixer" />
      <span class="text-wrapper">FoxMixer</span>
    </div>
    <nav>
        <ul class="navigation">
          <li class="menu-item">
            <span>Start</span>
          </li>
          <li class="menu-item">
            <span>Tutorial</span>
          </li>
          <li class="menu-item">
            <span>Reviews</span>
          </li>
          <li class="menu-item">
            <span>FAQ</span>
          </li>
        </ul>
      </nav>
  </header>
</template>

<style lang="scss">
header {
  position: absolute;
  color: white;
  background-color: var(--color-primary);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  width: 100%;
  padding: 0 30px;
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      flex-shrink: 0;
      height: 32px;
      width: 32px;
      margin-right: 22px;
    }
    .text-wrapper {
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
  nav {
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .navigation {
      display: flex;
      li {
        display: inline-flex;
        & > a,
        & > span {
          color: white;
          font-size: 1.05rem;
          text-transform: uppercase;
        }
      }
      li + li {
        margin-left: 35px;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data: () => ({}),
});
</script>
