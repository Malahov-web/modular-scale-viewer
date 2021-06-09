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

      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field settings__item-field--w--double">
            <label class="settings__item-label">Color</label>
            <!-- <input
              type="text"
              class="field-text"
              __v-model="color"
              v-bind="color"
              __v-on:keyup="changeStyles"
            /> -->

            <div
              class="field-text"
              v-text="colorHex"
              :class="{ active: isColorpickerVisible }"
              v-on="{ click: toggleColorpicker, keyup: setSettings }"
            ></div>

            <!-- <input
              type="text"
              class="field-text"
              __v-model="color"
              v-bind="color"
              __v-on:keyup="changeStyles"
            /> -->

            <colorpicker
              class="as"
              v-model="color"
              v-show="isColorpickerVisible"
            ></colorpicker>
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

    <!-- Fonts static-->
    <div class="row">
      <!-- <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Font-family</label>
            <select name="" class="select" v-model="fontFamily">
              >
              <option value="Roboto" _disabled="">Roboto</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Noto Sans JP">Noto Sans JP</option>
              <option value="Lato">Lato</option>
              <option value="Montserrat">Montserrat</option>
            </select>
          </div>
        </div>
      </div> -->

      <!-- Fonts from Store -->
      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Font-family</label>
            <select name="" class="select" v-model="fontFamily">
              <option
                v-for="item in fonts"
                :value="item.family"
                :key="item.family"
              >
                {{ item.family }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- <div class="settings__item-outer mv_12 ds_2">
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
      </div> -->

      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item-field">
          <label class="settings__item-label">Font-weight</label>
          <select
            name=""
            class="select"
            v-model="fontWeight"
            v-on:change="setSettings"
          >
            <option
              v-for="weight in fontWeightsArr"
              :value="weight"
              :key="weight"
            >
              {{ weight }}
            </option>
          </select>
        </div>
      </div>

      <div class="settings__item-outer mv_12 ds_2">
        <BaseSelectWithSearch class="asd" :items="fonts"></BaseSelectWithSearch>
      </div>
    </div>
  </div>
</template>

<script>
import { Photoshop } from "vue-color";
import BaseSelectWithSearch from "@/components/BaseSelectWithSearch.vue";

export default {
  name: "Settings",

  components: {
    colorpicker: Photoshop,
    BaseSelectWithSearch,
  },

  data() {
    return {
      fb: 16,
      ratio: 1.14,
      //   var colors = '#194d33'
      color: "#353437",
      fontWeightsArr: ["400", "300", "500", "600", "700"],
      fontWeight: "400",
      fontFamily: "Roboto",

      isColorpickerVisible: 0,

      googleWebFontsDeveloperAPI: "AIzaSyCpLnb8YrKmUVA26D8VGCE0vNBwLb5UpmY",
    };
  },

  created() {
    this.$store.dispatch("fetchFonts");
    // this.$store.dispatch("fetchNews");
  },

  computed: {
    // fb_initial() {
    //   return this.$store.state.fb;
    // },

    colorHex() {
      if ("string" === typeof this.color) {
        return this.color;
      }
      return this.color.hex;
    },

    fonts() {
      // all fonts
      //   return this.$store.state.fonts;
      //   return this.$store.getters.getInitialFonts(); // - getter - Это НЕ метод, это св-во
      return this.$store.getters.getInitialFonts;
    },
  },

  methods: {
    setSettings() {
      //   this.$store.dispatch("addNewsItem", this.item)
      this.$store.dispatch("setSettings", {
        fb: this.fb,
        ratio: this.ratio,
        colorHex: this.colorHex,
        fontWeight: this.fontWeight,
      });
      console.log("Settings - setSettings()");
    },

    toggleColorpicker() {
      this.isColorpickerVisible = !this.isColorpickerVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.vc-photoshop {
  position: absolute;
}
</style>
