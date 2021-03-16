<template>
  <div class="child-component">{{ log("child render") }}子组件</div>
</template>

<script>
export default {
  data() {
    this.log = window.console.log;
    console.log("child data");
    return {};
  },
  beforeCreate() {
    console.log("child beforeCreate");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child beforeUpdate");
  },
  updated() {
    console.log("child updated");
  },
  beforeDestroy() {
    console.log("child beforeDestroy");
  },
  destroyed() {
    console.log("child destroyed");
  }
};
</script>
