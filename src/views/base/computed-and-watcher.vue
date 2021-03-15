<template>
  <div class="caw">
    <p>
      {{
        msg
          .split("")
          .reverse()
          .join("")
      }}
    </p>
    <p>
      计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值
    </p>
    <p>第一次调用计算属性：{{ reverseMsgByComputed }}</p>
    <p>第二次调用计算属性：{{ reverseMsgByComputed }}</p>
    <p>第一次调用方法：{{ reverseMsgByMethod() }}</p>
    <p>第二次调用方法：{{ reverseMsgByMethod() }}</p>
    <p>fullName: {{ fullName }}</p>
    <p>firstName: {{ firstName }}</p>
    <p>lastName: {{ lastName }}</p>
    <div>
      <input placeholder="please ask a question" v-model="question" />
      <p>your input is: {{ question }}</p>
    </div>
  </div>
</template>

<script>
let timer = null;
export default {
  data() {
    return {
      msg: "Hello Vue",
      firstName: "Lugus",
      lastName: "Liu",
      question: ""
    };
  },
  computed: {
    reverseMsgByComputed() {
      console.log("execute computed reverse");
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  watch: {
    question(newValue, oldValue) {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    }
  },
  mounted() {
    timer = setTimeout(() => {
      this.fullName = "Harry Potter";
    }, 5000);
  },
  beforeDestroy() {
    if (timer) {
      timer = null;
    }
  },
  methods: {
    reverseMsgByMethod() {
      console.log("execute methods reverse");
      return this.msg
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
