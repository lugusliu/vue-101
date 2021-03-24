<template>
  <div class="pcd">
    <h4 :style="{ color: theme1.color }">D 节点</h4>
  </div>
</template>

<script>
export default {
  inject: {
    theme1: {
      from: "theme",
      default: () => ({})
    }
  }
};
</script>
