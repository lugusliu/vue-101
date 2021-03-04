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
  </div>
</template>

<script>
export default {
  data() {
    return {
      vif: true,
      vshow: true
    };
  },
  methods: {
    changeVifToFalse() {
      this.vif = !this.vif;
    },
    changeVshowToFalse() {
      this.vshow = !this.vshow;
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
  .v-if-true {
    background-color: #bae637;
  }
  .v-if-false {
    background-color: #ff7875;
  }
  .v-show-true {
    background-color: #b37feb;
  }
}
</style>
