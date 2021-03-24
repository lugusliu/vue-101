<template>
  <div class="pai">
    <h2>父节点</h2>
    <button @click="changeColor">改变 color</button>
    <ProvideComA />
    <ProvideComB />
  </div>
</template>

<script>
import ProvideComA from "@/views/base/components/ProvideComA";
import ProvideComB from "@/views/base/components/ProvideComB";
export default {
  components: {
    ProvideComA,
    ProvideComB
  },
  provide() {
    return {
      theme: {
        color: this.color
      }
    };
  },
  data() {
    return {
      color: "blue"
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
