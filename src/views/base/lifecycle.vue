<template>
  <div class="lc">
    <div class="lc-x">
      <button @click="destroyClock = !destroyClock">
        {{ destroyClock ? "销毁时钟" : "挂载时钟" }}
      </button>
      <Clock v-if="destroyClock" />
    </div>
  </div>
</template>

<script>
import Clock from "./components/Clock";
export default {
  components: {
    Clock
  },
  data() {
    return {
      destroyClock: false
    };
  }
};
</script>
