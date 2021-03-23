<template>
  <div class="directive">
    <button @click="show = !show">
      {{ show ? "卸载" : "挂载" }}自定义指令元素
    </button>
    <div class="container">
      <button v-if="show" v-test="num" @click="num++">按钮-</button>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    test: {
      bind(el, binding, vnode, oldVnode) {
        console.log("bind");
        console.log("bind", el);
        console.log("bind", binding);
        console.log("bind", vnode);
        console.log("bind", oldVnode);
      },
      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        console.log("inserted");
      },
      update() {
        console.log("update");
      },
      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        console.log("componentUpdated");
      },
      unbind() {
        console.log("unbind");
      }
    }
  },
  data() {
    return {
      show: false,
      num: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 20px 0;
}
</style>
