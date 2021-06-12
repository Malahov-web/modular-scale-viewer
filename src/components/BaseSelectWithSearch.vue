<template>
  <div class="asd">
    <label class="settings__item-label">Font-family</label>

    <div class="select">
      <!-- <div class="select__title">Начните печатать..</div> -->

      <div class="select__title" @click="toggleList">
        <span v-if="!isListOpen"> {{ activeValue }} </span>
        <span v-show="isListOpen">
          <input type="text" id="too" v-model="inputText" @input="onInput" />
        </span>
      </div>

      <div class="select__lists-container">
        <ul
          class="select__list select__list--search--results"
          v-show="searchResult.length"
        >
          <li class="select__list-item select__list-item--title">
            <em>Search results:</em>
          </li>
          <li
            class="select__list-item"
            v-for="(item, index) in searchResult"
            :key="item.family"
            @click="setSearchedActiveOption(item, index)"
          >
            {{ item.family }}
          </li>

          <!-- <hr /> -->
        </ul>

        <!-- Last Searched Options-->
        <ul
          class="select__list select__list--search--results"
          v-if="previousSearchResult.length && isListOpen"
        >
          <li class="select__list-item select__list-item--title">
            <em>Yout Last Searched:</em>
          </li>
          <li
            class="select__list-item"
            v-for="(item, index) in previousSearchResult"
            :key="item.family"
            @click="setPreviousSearchedActiveOption(item, index)"
          >
            {{ item.family }}
          </li>

          <!-- <hr /> -->
        </ul>

        <!-- Default potions-->
        <ul class="select__list" v-show="true == isListOpen">
          <li class="select__list-item select__list-item--title">
            <em>Most popular:</em>
          </li>
          <li
            class="select__list-item"
            v-for="(item, index) in selectOptions"
            :key="item.family"
            @click="setSelectActiveOption(item, index)"
          >
            {{ item.family }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelectWithSearch",

  props: {
    items: {
      type: [Array],
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      selectOptions: this.items,
      //   activeValue: "Начальное значение",
      activeOption: 0,
      //   state: 0,
      isListOpen: false,

      inputText: "",

      searchResult: [],
      previousSearchResult: [],

      // v.2
      activeValue: "Выберите из списка",
    };
  },

  computed: {
    // activeValue() {
    //   // v.2
    //   //   o.hasOwnProperty('prop');
    //   if (this.searchResult[this.activeOption].hasOwnProperty("family")) {
    //     return this.searchResult[this.activeOption].family;
    //   }
    //   if (this.selectOptions[this.activeOption].hasOwnProperty("family")) {
    //     return this.selectOptions[this.activeOption].family;
    //   } else {
    //     return "Выберите из списка";
    //   }
    //   // v.1 with static options only
    //   //   return (
    //   //     this.selectOptions[this.activeOption].family || "Выберите из списка"
    //   //   );
    // },
  },

  methods: {
    toggleList(event) {
      //   this.isListOpen = !this.isListOpen;
      this.isListOpen = true;

      console.log(event.target);
      //   let inputEl = closest('event.target') querySelector('')
      //   let inputEl = event.target.closest(".select"); // +
      let inputEl = event.target.closest(".select").querySelector("#too"); // too
      //   inputEl.focus();
      inputEl.focus();
      console.log(inputEl);
    },

    // changeSelectState() {
    //   this.state = !this.state;
    // },

    setSelectActiveOption(option, index) {
      // 1. Set active state
      //   this.activeOption = option.value;
      this.activeOption = index;
      console.log("Click on option");
      console.log(option);
      //v.2
      this.activeValue = this.selectOptions[index].family;

      // 2. Close Select
      this.isListOpen = false;

      // 3. Transferred data up
      //   this.$emit("change-sort", this.activeOption);
      //   this.$emit("change-sort", index);
      this.giveValue();

      // 4. Reset search results
      this.resetSearchResults();
      this.resetSearchField();
    },

    setSearchedActiveOption(option, index) {
      // 1. Set active state
      this.activeOption = index;
      console.log("Click on option");
      console.log(option);
      //v.2
      this.activeValue = this.searchResult[index].family;

      // 2. Close Select
      this.isListOpen = false;

      // 3. Transferred data up
      //   this.$emit("change-sort", this.activeOption);
      //   this.$emit("change-sort", index);
      this.giveValue();

      // 4. Reset search results
      this.resetSearchResults();
      this.resetSearchField();

      // 5. Add to previous Search Result
      //   this.previousSearchResult.push(option);
      this.previousSearchResult.unshift(option);
      if (this.previousSearchResult.length > 10) {
        this.previousSearchResult.pop();
      }
    },

    setPreviousSearchedActiveOption(option, index) {
      // 1. Set active state
      this.activeOption = index;
      console.log("Click on option");
      console.log(option);
      //v.2
      //   this.activeValue = this.searchResult[index].family;
      this.activeValue = this.previousSearchResult[index].family;

      // 2. Close Select
      this.isListOpen = false;

      // 3. Transferred data up
      //   this.$emit("change-sort", this.activeOption);
      //   this.$emit("change-sort", index);
      this.giveValue();

      // 4. Reset search results
      this.resetSearchResults();
      this.resetSearchField();
    },

    onInput() {
      console.log("inputText:");
      console.log(this.inputText);
      let inputText = this.inputText;

      //   function sayHi() {
      //     alert("Привет");
      //   }
      //   setTimeout(sayHi, 1000);

      //   let searchResult = this.getSearchResults(inputText);
      //   let searchResult = setTimeout(this.getSearchResults(inputText), 2000); // -
      let searchResult = this.searchResult;
      setTimeout(
        () => (this.searchResult = this.getSearchResults(inputText)),
        1000
      );
      this.searchResult = searchResult;
    },

    getSearchResults(inputText) {
      return this.$store.getters.getSearchResults(inputText);
    },

    resetSearchResults() {
      this.searchResult = [];
      //   this.searchResult.length = 0;
    },
    resetSearchField() {
      this.inputText = "";
    },

    giveValue() {
      this.$emit("change-family", this.activeValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
}
.select__lists-container {
  position: absolute;
  margin-left: -1px;
  margin-right: -1px;
  background-color: #fff;
  width: calc(100% + 1px + 1px);
  z-index: 100;
  border-left: 1px solid #2491dd;
  border-right: 1px solid #2491dd;
}

.select__list {
  border-bottom: 1px solid #d6d5d7;

  &:last-child {
    border-bottom: 1px solid #2491dd;
  }

  &--search--results &-item--title {
    font-style: italic;
    color: #9b999e;
  }
}
.select__list-item--title {
  font-style: italic;
  color: #9b999e;
}
</style>
