<template>
  <div class="scale" __style="display:none;">
    <!-- -->

    <ScaleItem
      class="asd"
      v-for="(item, index) in fonts"
      :key="item[id]"
      :item="item"
      :item_index="index"
      :styles="styles"
      @change-name="updateFontNames"
    ></ScaleItem>
  </div>
</template>

<script>
import ScaleItem from "@/components/ScaleItem.vue";

export default {
  name: "Scale",
  components: {
    ScaleItem,
  },

  computed: {
    settings() {
      return this.$store.getters.getSettings;
    },

    fb() {
      return this.settings.fb;
    },
    ratio() {
      return this.settings.ratio;
    },
    styles() {
      return {
        color: this.settings.color,
        fontWeight: this.settings.fontWeight,
        fontFamily: this.settings.fontFamily,
      };
    },

    font_size_names() {
      return this.$store.getters.getFontSizeNames;
    },

    fonts() {
      let fontsArr = [];

      // Вычислить шкалу шрифтов

      // 0-й элемент 'base'
      fontsArr.push({});
      fontsArr[0]["name"] = this.font_size_names[0];
      fontsArr[0]["font_size"] = this.fb;
      fontsArr[0]["id"] = 12345 + 0;

      // все последующие
      for (let i = 1; i < this.font_size_names.length; i++) {
        // Добавить name
        fontsArr.push({});
        fontsArr[i]["name"] = this.font_size_names[i];

        // Добавить font_size
        fontsArr[i]["font_size"] = this.ratio * fontsArr[i - 1]["font_size"];
        fontsArr[i]["font_size"] = fontsArr[i]["font_size"].toFixed(4);
        fontsArr[i]["id"] = 12345 + i;
      }

      return fontsArr;
    },
  },

  methods: {
    updateFontNames(item_index, nameUI) {
      this.$store.dispatch("updateFontNames", {
        item_index,
        nameUI,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
