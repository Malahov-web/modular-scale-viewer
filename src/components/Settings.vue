<template>
  <div class="mv_12 settings">
    <!-- <form class="row" v-on:change="setSettings"> -->
    <form class="row">
      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Input normal Label</label>
            <input
              type="text"
              class="field-text"
              v-model.number="fb"
              v-on:keyup="setSettings"
            />
            <!-- <input
              type="text"
              class="field-text"
              v-model.number="fb_local_settings"
              v-on:keyup="changeFB"
            /> -->
          </div>
        </div>
      </div>

      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Ratio</label>
            <input
              type="text"
              class="field-text"
              v-model.number="ratio"
              v-on:keyup="setSettings"
            />
          </div>
        </div>
      </div>

      <!-- <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Ratio</label>
            <input
              type="text"
              class="field-text"
              v-model.number="ratio_local_settings"
              v-on:keyup="changeRatio"
            />
          </div>
        </div>
      </div> -->
    </form>

    <!-- <div class="row">
      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Font-family</label>
            <select name="" class="select" v-model="styles.fontFamily">
              >
              <option value="Roboto" _disabled="">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Noto Sans JP">Noto Sans JP</option>
              <option value="Lato">Lato</option>
              <option value="Montserrat">Montserrat</option>
            </select>
          </div>
        </div>
      </div>

      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field settings__item-field--w--double">
            <label class="settings__item-label">Color</label>
            <input
              type="text"
              class="field-text"
              v-model="styles.color"
              v-on:keyup="changeStyles"
            />
          </div>
        </div>
      </div>

      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item-field">
          <label class="settings__item-label">Font-weight</label>
          <select name="" class="select" v-model="styles.fontWeight">
            <option value="400" _disabled="">400</option>
            <option value="300">300</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
          </select>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Settings",

  data() {
    return {
      fb: 16,
      ratio: 1.14,
    };
  },

  computed: {
    // fb_initial() {
    //   return this.$store.state.fb;
    // },
  },

  methods: {
    setSettings() {
      //   this.$store.dispatch("addNewsItem", this.item)
      this.$store.dispatch("setSettings", {
        fb: this.fb,
        ratio: this.ratio,
      });
      console.log("Settings - setSettings()");
    },
  },
};
</script>

<style lang="scss" scoped></style>
