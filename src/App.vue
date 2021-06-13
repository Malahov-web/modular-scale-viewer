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
          <!-- <settings
          :fb="fb"
          :ratio="ratio"
          :styles="styles"
          @change-settings="updateSettings"
        >
        </settings> -->
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
// import HelloWorld from "./components/HelloWorld.vue";
import Settings from "./components/Settings.vue";
import Scale from "./components/Scale.vue";
import DocumentStyles from "./components/DocumentStyles.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Settings,
    Scale,
    DocumentStyles,
  },
};
</script>

<style lang="scss">
@import "assets/src/scss/style";

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

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
