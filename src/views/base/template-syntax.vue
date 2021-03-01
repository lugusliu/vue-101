<template>
  <div class="ts">
    <p>hello {{ msg }}</p>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <button :disabled="undefined">Button</button>
    <p>模版中只能绑定单个表达式</p>
    <p>
      模版表达式都被放在沙盒中，只能访问全局变量的一个白名单:
    </p>
    <p>
      Infinity<br />
      undefined<br />
      NaN<br />
      isFinite<br />
      isNaN<br />
      parseFloat<br />
      parseInt<br />
      decodeURI<br />
      decodeURIComponent<br />
      encodeURI<br />
      encodeURIComponent<br />
      Math<br />
      Number<br />
      Date<br />
      Array<br />
      Object<br />
      Boolean<br />
      String<br />
      RegExp<br />
      Map<br />
      Set<br />
      JSON<br />
      Intl<br />
      require
    </p>
    <p>指令的值是预期的单个 Javascript 表达式（v-for 除外）</p>
    <p>当表达式的值改变时，将其产生的连带影响，响应式的作用于 DOM</p>
    <p>一些指令能够接收一个“参数”，在指令名称之后以冒号表示</p>
    <p>
      修饰符（modifier）是以半角句号 .
      指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue",
      rawHtml: "<span style='color: red'>This should be red.</span>"
    };
  }
};
</script>
