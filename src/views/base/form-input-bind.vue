<template>
  <div class="fib">
    <div class="intro">
      v-model 会忽略所有表单元素的 value、checked、selected attribute
      的初始值而总是将 Vue 实例的数据作为数据来源<br />
      v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件<br />
      text 和 textarea 使用 value property 和 input 事件<br />
      checkbox 和 radio 使用 checked property 和 change 事件<br />
      select 字段将 value 作为 prop 并将 change 作为事件
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fib {
  .intro {
    line-height: 1.5;
    color: #8c8c8c;
  }
}
</style>
