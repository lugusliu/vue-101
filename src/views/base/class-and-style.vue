<template>
  <div class="cas">
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      class 绑定到一个对象 { active: isActive, 'text-danger': hasError }
      <button class="btn" @click="changeActiveToFalse">
        isActive = false
      </button>
    </div>
    <div class="static" :class="classObject">
      class 绑定到一个 computed 计算属性，依赖于 isActive
    </div>
    <div class="static" :class="[info, underline]">
      class 绑定到一个数组上
    </div>
    <div class="static">
      在一个自定义组件上使用 class property 时，这些 class
      将被添加到该组件的跟元素上面，这个元素上已经存在的 class 不会被覆盖
    </div>
    <br />
    <br />
    <div class="static" :style="{ color: activeColor, fontWeight: '600' }">
      style 绑定到一个对象上 { color: activeColor, fontWeight: '600' }
    </div>
    <div class="static" :style="[baseStyles, overridingStyles]">
      style 绑定到一个数组上 [baseStyles, overridingStyles]
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      info: "info",
      underline: "underline",
      activeColor: "#52c41a",
      baseStyles: {
        color: "#fa541c"
      },
      overridingStyles: {
        fontWeight: "300"
      }
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
  .btn {
    vertical-align: 4px;
  }
  .static {
    font-size: 24px;
    line-height: 1.5;
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
  .underline {
    text-decoration: underline;
  }
}
</style>
