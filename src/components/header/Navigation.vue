<template>
  <nav class="navigation-links-wrapper">
    <ul class="navigation">
      <router-link to="/mixer">Start</router-link>
      <router-link to="/tutorial">Tutorial</router-link>
      <router-link to="/reviews" class="hidden-till-medium">Reviews</router-link>
      <router-link to="/faq" class="hidden-till-medium">FAQ</router-link>
      <div class="nav-dropdown-wrapper">
        <v-menu bottom left>
          <template v-slot:activator="{on, attrs}">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon dense>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <a href="#" class="navigation-dropdown-link">
              <div class="icon-wrapper">
                <v-icon color="#000000">mdi-help-circle</v-icon>
              </div>
              <div class="label-wrapper">FAQ</div>
            </a>
            <a href="#" class="navigation-dropdown-link">
              <div class="icon-wrapper">
                <v-icon color="#000000">mdi-star</v-icon>
              </div>
              <div class="label-wrapper">Reviews</div>
            </a>
            <!-- <a href="#" class="navigation-dropdown-link">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#000000">mdi-help-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>FAQ</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </a>
            <a href="#" class="navigation-dropdown-link">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#000000">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Reviews</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </a> -->
          </v-list>
        </v-menu>
      </div>
    </ul>
  </nav>
</template>

<style lang="scss">
  .navigation-dropdown-link {
    color: black !important;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    margin: 0 15px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.075);
    }
    .label-wrapper {
      text-transform: uppercase;
      flex: 1;
      font-size: 17px;
      margin-left: 12px;
    }
  }
  .navigation-links-wrapper {
    &,
    .navigation {
      position: relative;
      display: flex;
      justify-content: flex-end;
      padding-right: 30px;
      & > a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        &:not(:first-of-type) {
          margin-left: 32px;
        }
        &:last-of-type {
          margin-right: 8px;
        }
        &.hidden-till-medium {
          display: none;
        }
      }
      .nav-dropdown-wrapper {
        position: absolute;
        right: -40px;
        top: 50%;
        transform: translateY(-50%);
      }
      @media (min-width: 720px) {
        .nav-dropdown-wrapper {
          display: none !important;
        }
        padding: 0 !important;
        & > a.hidden-till-medium {
          display: block;
        }
      }
    }
  }
</style>

<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    name: "Navigaion"
  });
</script>
