<template>
  <div class="mv_12 settings">
    <form class="row">
      <!-- Font base -->
      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field">
            <label class="settings__item-label">Font base</label>
            <input
              type="text"
              class="field-text"
              v-model.number="fb"
              v-on:keyup="setSettings"
            />
          </div>
        </div>
      </div>

      <!-- Ratio -->
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

      <!-- Color -->
      <div class="settings__item-outer mv_12 ds_2">
        <div class="settings__item">
          <div class="settings__item-field settings__item-field--w--double">
            <label class="settings__item-label">Color</label>

            <div
              class="field-text"
              v-text="colorHex"
              :class="{ active: isColorpickerVisible }"
              v-on="{ click: toggleColorpicker, keyup: setSettings }"
            ></div>

            <colorpicker
              class="as"
              v-model="color"
              v-show="isColorpickerVisible"
              @input="changeColor"
            ></colorpicker>
          </div>
        </div>
      </div>
    </form>

    <div class="row">
      <!-- TODO: fix error - if remove this, BaseSelectWithSearch dont' render) Fonts from Store -->
      <div class="settings__item-outer mv_12 ds_2" style="display: none">
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

      <!-- Font weight -->
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

      <!-- Font family from API -->
      <div class="settings__item-outer mv_12 ds_2">
        <BaseSelectWithSearch
          :items="fonts"
          :initial_item_active="fontFamily"
          __change-family="[changeFamily, setSettings]"
          @change-family="changeFamily"
        >
        </BaseSelectWithSearch>
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
      color: "#353437",
      fontWeight: "400",
      fontFamily: "Roboto",

      isColorpickerVisible: 0,

      googleWebFontsDeveloperAPI: "AIzaSyCpLnb8YrKmUVA26D8VGCE0vNBwLb5UpmY",
    };
  },

  created() {
    this.$store.dispatch("fetchFonts");
    // this.setSettings(); // TEST DEV
  },

  computed: {
    colorHex() {
      if ("string" === typeof this.color) {
        return this.color;
      }
      return this.color.hex;
    },

    fonts() {
      return this.$store.getters.getInitialFonts;
    },

    fontWeightsArr() {
      return this.$store.getters.getFontWeightsArr;
    },
  },

  methods: {
    setSettings() {
      this.$store.dispatch("setSettings", {
        fb: this.fb,
        ratio: this.ratio,
        colorHex: this.colorHex,
        fontWeight: this.fontWeight,
        fontFamily: this.fontFamily,
      });
      console.log("Settings - setSettings()");
    },

    toggleColorpicker() {
      this.isColorpickerVisible = !this.isColorpickerVisible;
    },

    changeFamily(fontFamily) {
      this.fontFamily = fontFamily;

      this.setSettings();
    },

    changeColor() {
      this.setSettings();
    },

    // TODO: bind hotkey to close select
    // onHotKey(event) {
    //   console.log("Событие keyup");
    //   console.log(event);
    // },
  },
};
</script>

<style lang="scss" scoped>
.vc-photoshop {
  position: absolute;
  z-index: 300;
}
</style>
