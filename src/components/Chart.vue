<template>
  <div ref="chartDom" style="height: 400px" id="main"></div>
</template>

<script>
import * as echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import debounce from "lodash/debounce";
export default {
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  watch: {
    // options: {
    //   handler(val) {
    //    this.chart.setOption(val)
    //   },
    //   deep: true,
    // },
    options(val) {
      this.chart.setOption(val);
    },
  },
  mounted() {
    //监听窗口大小变化，触发resize事件
    addListener(this.$refs.chartDom, this.resize);
    this.renderChart();
  },
  beforeDestroy() {
    //移除监听事件
    removeListener(this.$refs.chartDom, this.resize);
    //销毁chart实例
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      this.chart.resize();
      console.log("resize");
    },
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      this.chart.setOption(this.options);
    },
  },
};
</script>

<style lang="less" scoped></style>
