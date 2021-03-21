<template>
  <div class="card">
    <span class="red"><slot name="red" :color="color"></slot></span>
    <span class="grey"><slot :color="color"></slot></span>
    <span class="blue"><slot name="blue" :color="color"></slot></span>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      color: "From child "
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 20px 50px;
  border: 10px solid #b5f5ec;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 500;
  background-color: #e6fffb;
}
.card + .card {
  margin-top: 20px;
}
.grey {
  color: #595959;
}
.red {
  color: #f5222d;
}
.blue {
  color: #1890ff;
}
</style>
