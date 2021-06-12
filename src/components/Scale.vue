<template>
  <div class="scale" __style="display:none;">
    <!-- <div class="scale__item">
      <div class="scale__item-name-outer">
        <div class="scale__item-name">
          <input type="text" class="field-text" />
        </div>
      </div>
      <div class="scale__item-value-outer">
        <div class="scale__item-value">16</div>
      </div>
      <div class="scale__item-line-height-outer">
        <div class="scale__item-line-height" style="font-size: 16px"></div>
      </div>
      <div class="scale__item-text-outer" style="font-size: 16px">
        <div
          class="text"
          style="color: rgb(53, 52, 55); font-weight: 400; font-family: Roboto"
        >
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной ...
        </div>
      </div>
    </div> -->

    <div class="scale__item" v-for="(font, index) in fonts" :key="font[id]">
      <div class="scale__item-name-outer">
        <div class="scale__item-name">
          <input
            class="field-text"
            type="text"
            __v-model="font_size_names_local_settings[index]"
            v-model="font_size_names[index]"
          />
        </div>
      </div>
      <div class="scale__item-value-outer">
        <div class="scale__item-value">{{ font["font_size"] }}</div>
      </div>
      <div class="scale__item-line-height-outer">
        <div
          class="scale__item-line-height"
          v-bind:style="{ fontSize: font['font_size'] + 'px' }"
        ></div>
      </div>
      <div
        class="scale__item-text-outer"
        v-bind:style="{ fontSize: font['font_size'] + 'px' }"
      >
        <div
          class="text"
          _v-bind:style="{ fontSize: font['font_size'] }"
          v-bind:style="styles"
        >
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scale",

  data() {
    return {
      //   key: value,
    };
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
};
</script>

<style lang="scss" scoped></style>
