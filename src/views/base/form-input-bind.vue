<template>
  <div class="fib">
    <div class="fib-input">
      <p>input</p>
      <input v-model="inputValue" type="text" /> : {{ inputValue }}
    </div>
    <div class="fib-textarea">
      <p>textarea</p>
      <textarea v-model="textareaValue" /> : {{ textareaValue }}
    </div>
    <div class="fib-checkbox">
      <p>checkbox</p>
      <input type="checkbox" id="jack" value="Jack" v-model="checkboxValue" />
      <label for="jack"> Jack </label>
      <input type="checkbox" id="john" value="John" v-model="checkboxValue" />
      <label for="john"> John </label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkboxValue" />
      <label for="mike"> Mike </label>
      : {{ checkboxValue }}
    </div>
    <div class="fib-radio">
      <p>radio</p>
      <input type="radio" id="one" value="One" v-model="radioValue" />
      <label for="one"> One </label>
      <input type="radio" id="two" value="Two" v-model="radioValue" />
      <label for="two"> Two </label>
      : {{ radioValue }}
    </div>
    <div class="fib-selected">
      <p>selected</p>
      <select v-model="selectedValue">
        <option
          v-for="option in options"
          :key="option.value"
          value="option.value"
          >{{ option.value }}</option
        >
      </select>
      : {{ selectedValue }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      textareaValue: "",
      checkboxValue: [],
      radioValue: "",
      selectedValue: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
