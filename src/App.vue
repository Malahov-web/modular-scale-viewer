<template>
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
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Settings from "./components/Settings.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Settings,
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
</style>
