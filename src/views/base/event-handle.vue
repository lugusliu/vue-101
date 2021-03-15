<template>
  <div class="eh">
    <div class="eh-x">
      普通事件处理方法 @click = "handleNormal"<br />
      <button @click="handleNormal">点击</button>
    </div>
    <div class="eh-x">
      内联处理器中的方法 @click = "handleInline('event', $event)"<br />
      <button @click="handleInline('event', $event)">点击</button>
    </div>
    <div class="eh-x">
      <div @click="clickParent" class="parent-x">
        <div @click.self="clickParentWidthSelf" class="parent">
          <button @click="clickChild">冒泡测试</button>
          <button @click.stop="clickChild">冒泡测试 - 带有 .stop 修饰符</button>
        </div>
      </div>
    </div>
    <div class="eh-x">
      按键修饰符 .enter <br />
      <input v-on:keyup.enter="submit" />
    </div>
    <div class="eh-x">
      提交事件重载页面
      <form @submit="submit">
        <input type="text" />
      </form>
    </div>
    <div class="eh-x">
      提交事件不再重载页面 .prevent
      <form @submit.prevent="submit">
        <input type="text" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleNormal(e) {
      console.log("event", e);
    },
    handleInline(str, e) {
      console.log(str, e);
    },
    clickChild() {
      alert("child clicked");
    },
    clickParentWidthSelf() {
      alert("parent clicked width .self");
    },
    clickParent() {
      alert("parent's parent clicked");
    },
    submit() {
      alert("submit trigger");
    }
  }
};
</script>

<style lang="scss" scoped>
.eh {
  .eh-x + .eh-x {
    margin-top: 20px;
  }
  .parent-x {
    border: 10px solid #a0d911;
    border-radius: 8px;
  }
  .parent {
    padding: 20px 50px;
    background-color: #fcffe6;
    cursor: pointer;
  }
}
</style>
