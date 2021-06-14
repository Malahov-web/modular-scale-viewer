<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link :href="fontsURL" rel="stylesheet" />
  </div>
</template>

<script>
export default {
  name: "documentStyles",

  computed: {
    // DEV HINT:
    // Template:
    // @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

    // <link rel="preconnect" href="https://fonts.gstatic.com">
    // <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap" rel="stylesheet">

    settings() {
      return this.$store.getters.getSettings;
    },
    styles() {
      return {
        color: this.settings.color,
        fontWeight: this.settings.fontWeight,
        fontFamily: this.settings.fontFamily,
      };
    },
    fontWeightsArr() {
      return this.$store.getters.getFontWeightsArr;
    },
    fontWeightsString() {
      return this.fontWeightsArr.join(";");
    },
    fontFamilyString() {
      let fontFamilyString = this.styles.fontFamily;
      return fontFamilyString.replace(" ", "+");
    },

    fontsURL() {
      return (
        "https://fonts.googleapis.com/css2?family=" +
        this.fontFamilyString +
        ":wght@" +
        this.fontWeightsString +
        "&display=swap"
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
