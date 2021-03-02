<template>
  <div class="cas">
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      class 绑定到一个对象上
      <button @click="changeActiveToFalse">change isActive to false</button>
    </div>
    <div class="static" :class="classObject">
      class 绑定到一个 computed 计算属性上
    </div>
    <div class="static" :class="arrayClass">
      class 绑定到一个数组上
    </div>
    <br />
    <div class="static" :style="{ color: activeColor, fontWeight: '600' }">
      style 绑定到一个对象上
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      arrayClass: "info",
      activeColor: "#52c41a"
    };
  },
  computed: {
    classObject() {
      return {
        "text-danger": this.isActive
      };
    }
  },
  methods: {
    changeActiveToFalse() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.cas {
  .static {
    font-size: 24px;
  }
  .active {
    color: #1890ff;
  }
  .text-danger {
    color: #f5222d;
  }
  .info {
    color: #bfbfbf;
  }
}
</style>
