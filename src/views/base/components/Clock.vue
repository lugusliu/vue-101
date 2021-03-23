<template>
  <div class="clock">
    {{ log("render") }}
    {{ now }}
    <button @click="start = !start">{{ start ? "停止" : "开始" }}</button>
    <ClockChild />
  </div>
</template>

<script>
import { formatTime } from "@/utils";
import ClockChild from "./ClockChild";

export default {
  components: {
    ClockChild
  },
  data() {
    console.log("data");
    this.log = window.console.log;
    return {
      now: formatTime(),
      start: false,
      clockInterval: null
    };
  },
  watch: {
    start() {
      this.startClock();
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    this.startClock();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(this.clockInterval);
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    startClock() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = formatTime();
        }, 500);
      }
    }
  }
};
</script>
