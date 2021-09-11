<template>
  <td>
    <v-tooltip top>
      <template v-slot:activator="{on, attrs}">
        <span class="delay-label" v-bind="attrs" v-on="on" v-text="label"></span>
      </template>
      <span class="mix-status-table-tooltip-content">
        <slot />
      </span>
    </v-tooltip>
  </td>
</template>

<style>
.mix-status-table-tooltip-content {
  font-size: 12px !important;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TooltipCell",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>