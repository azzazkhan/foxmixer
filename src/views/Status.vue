<template>
  <page class="status-page">
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="progress-widget-wrapper">
          <h3 class="title">Status of Mix</h3>
          <div class="progress-widget">
            <div class="progress-bar-wrapper">
              <div class="progress-bar"></div>
            </div>
            <div class="steps-wrapper">
              <div class="step created completed">
                <div class="arrow-wrapper">
                  <svg width="25" height="12.5">
                    <polygon points="0,0 25,0 12.5,10" />
                  </svg>
                </div>
                <div class="text-wrapper">
                  <div class="title">Mix Created</div>
                  <p class="datetime">On 26 Aug, at 19:05 GMT</p>
                </div>
              </div>
              <div class="step payin in-progress">
                <div class="loader"></div>
                <div class="arrow"></div>
                <div class="text-wrapper">
                  <div class="title">Mix Created</div>
                  <p class="datetime">On 26 Aug, at 19:05 GMT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<style lang="scss" scoped>
.page-content-wrapper {
  padding: 40px;
  h3.title {
    color: var(--color-primary);
    font-size: 34px !important;
    font-weight: 400;
    letter-spacing: 0 !important;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .progress-widget {
    .progress-bar-wrapper {
      background: #e1f5fe;
      width: 100%;
      height: 16px;
      border-radius: 10px;
      .progress-bar {
        background-color: var(--color-primary);
        height: 100%;
        width: 30%;
        border-radius: 10px;
        transition: width 1s ease-out;
      }
    }
    .steps-wrapper {
      position: relative;
      .step {
        position: absolute;
        text-align: center;
        bottom: 4.5px;
        transform: translate(-50%, 100%);
        .arrow-wrapper {
          position: relative;
          svg {
            position: absolute;
            top: 4px;
            left: 50%;
            transform: translateX(-50%) scale(1.2);
            * {
              fill: var(--color-primary);
            }
          }
        }
        .text-wrapper {
          max-width: 180px;
          color: #000000;
          margin-top: 20px;
          .title {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            font-weight: bold;
          }
          .datetime {
            font-size: 17px;
            max-width: 120px;
            margin: -4px auto 0;
          }
        }
        &.created {
          left: 10%;
        }
        &.payin {
          display: none;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Page from "../components/Page.vue";

export default Vue.extend({
  name: "Status",
  components: {
    page: Page,
  },
});
</script>