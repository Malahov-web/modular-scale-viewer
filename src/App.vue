<template>
  <div>
    <section class="section section-settings">
      <div class="container">
        <div class="row">
          <div class="mv_12">
            <h2>Settings</h2>
          </div>
        </div>

        <div class="row">
          <Settings class="asd"> </Settings>
        </div>
      </div>
    </section>

    <section class="section section-viewer">
      <div class="container">
        <div class="row">
          <div class="mv_12">
            <h2>Viewer</h2>
          </div>
        </div>

        <div class="row">
          <div class="mv_12">
            <Scale class="asd"></Scale>
          </div>
        </div>
      </div>
    </section>

    <DocumentStyles class="asd"></DocumentStyles>
  </div>
</template>

<script>
import Settings from "./components/Settings.vue";
import Scale from "./components/Scale.vue";
import DocumentStyles from "./components/DocumentStyles.vue";

export default {
  name: "App",
  components: {
    Settings,
    Scale,
    DocumentStyles,
  },
};
</script>

<style lang="scss">
// Import styles from base (old) project assets
@import "assets/src/scss/style";

// Mmm.. div looks like input
div.field-text {
  @extend input;
  @extend input.field-text;

  cursor: pointer;

  &:hover {
    border-color: $accent;
  }
  &.active {
    border-color: $accent;
  }
}
</style>
