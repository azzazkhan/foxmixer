<template>
  <button class="action">
    <v-tooltip top>
      <template v-slot:activator="{on, attrs}">
        <button
          v-bind="attrs"
          v-on="on"
          @click.prevent="click"
        >
          <v-icon
            color="#01579B"
            dense
            v-html="icon"
          ></v-icon>
        </button>
      </template>
      <span class="mixer-widget-action-tooltip-content">
        <slot />
      </span>
    </v-tooltip>
  </button>
</template>

<style>
.mixer-widget-action-tooltip-content {
  font-size: 12px !important;
}
</style>

<style lang="scss" scoped>
button.action {
  position: absolute;
  background-color: #e1f5fe;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transform: translateX(50%);
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MixerWidgetActionButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    click: Function,
  },
});
</script>