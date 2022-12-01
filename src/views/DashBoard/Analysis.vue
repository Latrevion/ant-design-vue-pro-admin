<template>
  <div>
    <ChartVue :options="options" style="height: 400px"></ChartVue>
  </div>
</template>

<script>
import ChartVue from "@/components/Chart.vue";
import random from "lodash/random";
export default {
  data() {
    return {
      options: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  components: {
    ChartVue,
  },
  mounted() {
    this.interval = setInterval(() => {
      this.options.series[0].data = this.options.series[0].data.map((item) => {
        return (item = random(100));
      });
      this.options = { ...this.options };
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="less" scoped></style>
