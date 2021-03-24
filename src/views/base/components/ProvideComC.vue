<template>
  <div class="pcc">
    <h4 :style="{ color: theme.color }">C 节点</h4>
  </div>
</template>

<script>
export default {
  inject: {
    theme: {
      default: () => ({})
    }
  }
};
</script>
