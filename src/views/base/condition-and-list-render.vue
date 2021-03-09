<template>
  <div class="calr">
    <div class="vif">
      <span class="static v-if-true" v-if="vif">vif is true</span>
      <span class="static v-if-false" v-else>vif is false</span>
      <button @click="changeVifToFalse">let vif = {{ !vif }}</button>
    </div>
    <div class="vshow">
      <span class="static v-show-true" v-show="vshow">vshow is true</span>
      <button @click="changeVshowToFalse">let vshow = {{ !vshow }}</button>
    </div>
    <div class="vfor">
      <span
        class="color-block"
        v-for="{ name, color, num } in colors"
        :key="color"
        :style="{ background: color }"
        :title="name"
        >{{ num }}</span
      >
      <button
        v-for="(bool, key) in actions"
        :key="key"
        :disabled="!bool"
        @click="handleAllAction(key)"
      >
        {{ key }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vif: true,
      vshow: true,
      colors: [
        {
          name: "volcano",
          color: "#ff9c6e",
          num: 2
        },
        {
          name: "lime",
          color: "#d3f261",
          num: 6
        },
        {
          name: "sunset_orange",
          color: "#ffc069",
          num: 3
        },
        {
          name: "polar_green",
          color: "#95de64",
          num: 7
        },
        {
          name: "sunrise_yellow",
          color: "#fff566",
          num: 5
        },
        {
          name: "calendula_gold",
          color: "#ffd666",
          num: 4
        },
        {
          name: "cyan",
          color: "#5cdbd3",
          num: 8
        }
      ],
      actions: {
        push: true,
        pop: false,
        shift: false,
        unshift: true,
        splice: true,
        sort: true,
        reverse: true,
        reset: false
      }
    };
  },
  methods: {
    changeVifToFalse() {
      this.vif = !this.vif;
    },
    changeVshowToFalse() {
      this.vshow = !this.vshow;
    },
    handleAllAction(key) {
      if (key !== "reset") {
        this.actions.reset = true;
      }
      this[key]();
    },
    push() {
      this.actions.push = false;
      this.actions.pop = true;
      this.colors.push({
        name: "daybreak_blue",
        color: "#69c0ff",
        num: 9
      });
    },
    pop() {
      this.actions.pop = false;
      this.actions.push = true;
      this.colors.pop();
    },
    unshift() {
      this.actions.unshift = false;
      this.actions.shift = true;
      this.colors.unshift({
        name: "dust_red",
        color: "#ff7875",
        num: 1
      });
    },
    shift() {
      this.actions.shift = false;
      this.actions.unshift = true;
      this.colors.shift();
    },
    splice() {
      this.actions.splice = false;
      this.colors.splice(2, 1);
    },
    sort() {
      this.actions.sort = false;
      this.colors.sort((a, b) => a.num - b.num);
    },
    reverse() {
      this.colors.reverse();
    },
    reset() {
      this.actions.reset = false;
      this.colors = [
        {
          name: "volcano",
          color: "#ff9c6e",
          num: 2
        },
        {
          name: "lime",
          color: "#d3f261",
          num: 6
        },
        {
          name: "sunset_orange",
          color: "#ffc069",
          num: 3
        },
        {
          name: "polar_green",
          color: "#95de64",
          num: 7
        },
        {
          name: "sunrise_yellow",
          color: "#fff566",
          num: 5
        },
        {
          name: "calendula_gold",
          color: "#ffd666",
          num: 4
        },
        {
          name: "cyan",
          color: "#5cdbd3",
          num: 8
        }
      ];
      this.actions = {
        push: true,
        pop: false,
        shift: false,
        unshift: true,
        splice: true,
        sort: true,
        reverse: true,
        reset: false
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.calr {
  .static {
    margin-right: 1em;
  }
  .vif {
    margin-bottom: 20px;
  }
  .vshow {
    margin-bottom: 20px;
  }
  .v-if-true {
    background-color: #bae637;
  }
  .v-if-false {
    background-color: #ff7875;
  }
  .v-show-true {
    background-color: #b37feb;
  }
  .vfor {
    .color-block {
      display: inline-block;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      line-height: 2em;
      width: 2em;
      margin-right: 0.5em;
    }
    button + button {
      margin-left: 1em;
    }
  }
}
</style>
