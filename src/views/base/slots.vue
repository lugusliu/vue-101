<template>
  <div class="slots">
    <Card>
      <template> 插槽 </template>
    </Card>
    <Card>
      <template v-slot:red> 使用红色文字插槽 v-slot:red </template>
      <template v-slot:blue> 使用蓝色文字插槽 v-slot:blue </template>
    </Card>
    <Card>
      <template #blue> 使用蓝色文字插槽缩写写法 #blue </template>
    </Card>
    <Card>
      <template v-slot="{ color }">
        {{ color }}使用默认插槽作用域插槽的解构写法 v-slot="{ color }"
      </template>
    </Card>
    <Card>
      <template v-slot:blue="{ color }">
        {{ color }}使用蓝色文字作用域插槽的解构写法 v-slot:blue="{ color }"
      </template>
    </Card>
    <Card>
      <template #red="{ color }">
        {{ color }}使用红色文字作用域插槽的解构缩写写法 #red="{ color }"
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "@/views/base/components/Card";

export default {
  components: {
    Card
  }
};
</script>
