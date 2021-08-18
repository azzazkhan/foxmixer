<template>
  <div class="mixer-code">
    <span class="code-label">Mixcode:</span>
    <div class="code-input-wrapper">
      <v-text-field class="mix-code-input" placeholder="Enter mixcode of prior mix" />
    </div>
    <div class="info-icon-wrapper">
      <v-tooltip top>
        <template v-slot:activator="{on, attrs}">
          <button v-bind="attrs" v-on="on">
            <v-icon color="#01579b" dense>mdi-help-circle</v-icon>
          </button>
        </template>
        <span class="text-caption">
          Leave this field blank, if this<br />
          is your first mix. This mixcode<br />
          protects from receiving the<br />
          the same coins from a previous<br />
          mix again. You can find the<br />
          mixcode in your previous<br />
          Letter of Guarntee.
        </span>
      </v-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
.mixer-code {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;
  .code-label {
    font-size: 18px;
    color: var(--color-primary);
  }
  .code-input-wrapper {
    margin: 0 15px;
    width: 240px;
    input {
      font-size: 18px;
      color: black;
      font-weight: bold;
      &::placeholder {
        color: var(--color-primary);
        font-weight: 400;
      }
    }
  }
  .info-icon-wrapper {
    transform: translateY(-5px);
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MixerCode",
  data: () => ({}),
});
</script>
