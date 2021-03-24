<template>
  <div id="app">
    <div class="nav">
      <router-link class="link" to="/">主页</router-link>
      <router-link class="link" to="/template-syntax">模版语法</router-link>
      <router-link class="link" to="/computed-and-watcher"
        >计算语法和侦听器</router-link
      >
      <router-link class="link" to="/class-and-style">类与内联样式</router-link>
      <router-link class="link" to="/condition-and-list-render"
        >条件与列表渲染</router-link
      >
      <router-link class="link" to="/event-handle">事件处理</router-link>
      <router-link class="link" to="/form-input-bind">表单输入绑定</router-link>
      <router-link class="link" to="/lifecycle">生命周期</router-link>
      <router-link class="link" to="/slots">插槽</router-link>
      <router-link class="link" to="/directive">指令</router-link>
      <router-link class="link" to="/provide-and-inject"
        >provide 和 inject</router-link
      >
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
}
.nav {
  box-sizing: border-box;
  height: 100vh;
  flex-basis: 250px;
  padding: 24px;
  font-size: 20px;
  line-height: 2;
  background-color: #f7f7f7;
}
.nav {
  .link {
    display: block;
    color: #79808a;
    text-decoration: none;
    &:hover {
      color: #181818;
    }
  }
  .router-link-exact-active {
    color: #181818;
  }
}
.main {
  padding: 24px;
}
</style>
