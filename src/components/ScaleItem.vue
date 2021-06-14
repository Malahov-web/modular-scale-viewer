<template>
  <div class="scale__item">
    <div class="scale__item-name-outer">
      <div class="scale__item-name">
        <input
          type="text"
          class="field-text"
          v-model="nameUI"
          @change="changeName"
        />
      </div>
    </div>
    <div class="scale__item-value-outer">
      <div class="scale__item-value">{{ item["font_size"] }}</div>
    </div>
    <div class="scale__item-line-height-outer">
      <div
        class="scale__item-line-height"
        :style="{ fontSize: item['font_size'] + 'px' }"
      ></div>
    </div>
    <div
      class="scale__item-text-outer"
      :style="{ fontSize: item['font_size'] + 'px' }"
    >
      <div class="text" :style="styles">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной ...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScaleItem",

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    styles: {
      type: Object,
    },
    item_index: {
      type: Number,
    },
  },

  data() {
    return {
      nameUI: this.item.name,
    };
  },

  methods: {
    changeName() {
      this.$emit("change-name", this.item_index, this.nameUI);
      console.log("event - changeName");
    },
  },
};
</script>

<style lang="scss" scoped></style>
