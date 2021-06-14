import Vue from "vue";
import Vuex from "vuex";
import Services from "@/services/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Default settings
    fb: 16,
    ratio: 1.14,
    color: "#000000",
    fontWeight: "400",
    fontFamily: "Roboto",
    // fonts is dinamic updating
    fonts: {},
    // TODO: Scale presets move to Scale comp ?
    fontWeightsArr: ["300", "400", "500", "600", "700"], // only ASC in request to GoogleFonts
    fontSizeNames: ["base", "h6", "h5", "h4", "h3", "h2", "h1"],
  },

  modules: {},

  mutations: {
    SET_SETTINGS(state, { fb, ratio, colorHex, fontWeight, fontFamily }) {
      state.fb = fb;
      state.ratio = ratio;
      (state.color = colorHex),
        (state.fontWeight = fontWeight),
        (state.fontFamily = fontFamily);
    },

    SET_FONTS(state, data) {
      state.fonts = data.items;
    },

    UPDATE_FONT_SIZE_NAMES(state, newFontSizeNames) {
      state.fontSizeNames = newFontSizeNames;
    },
  },

  actions: {
    setSettings({ commit }, { fb, ratio, colorHex, fontWeight, fontFamily }) {
      commit("SET_SETTINGS", { fb, ratio, colorHex, fontWeight, fontFamily });
    },

    fetchFonts({ commit }) {
      Services.getFonts()
        .then((response) => {
          commit("SET_FONTS", response.data);
          console.log("Fonts from GoogleFonts has been fetched:", response);
        })
        .catch((error) => {
          console.log("services.js: There was an error: " + error.message);
        });
    },

    updateFontNames({ commit, state }, { item_index, nameUI }) {
      let fontSizeNames = state.fontSizeNames;
      // V Не Умеет отслеживать реактивно массивы
      // Использовать Vue.set
      Vue.set(fontSizeNames, item_index, nameUI);
      commit("UPDATE_FONT_SIZE_NAMES", fontSizeNames);
    },
  },

  getters: {
    getInitialFonts: (state) => {
      const quantity = 10;
      let fonts = [];

      for (let index = 0; index < quantity; index++) {
        fonts.push(state.fonts[index]);
      }

      return fonts;
    },

    getSearchResults: (state) => (inputText) => {
      let fonts = state.fonts;

      // v.4
      let result = fonts.filter(
        // item => item.family == inputText
        (item) => item.family.toLowerCase().includes(inputText.toLowerCase())
      );

      // Cut array if results are more than 10
      let resultFixed = result.slice(0, 10);
      return resultFixed;
    },

    getSettings: (state) => {
      return {
        fb: state.fb,
        ratio: state.ratio,
        color: state.color,
        fontWeight: state.fontWeight,
        fontFamily: state.fontFamily,
      };
    },

    getFontSizeNames: (state) => {
      return state.fontSizeNames;
    },
    getFontWeightsArr: (state) => {
      return state.fontWeightsArr;
    },
  },
});
