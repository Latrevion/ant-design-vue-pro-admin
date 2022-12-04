<template>
  <div>
    <ChartVue :options="options" style="height: 400px"></ChartVue>
  </div>
</template>

<script>
import ChartVue from "@/components/Chart.vue";
import axios from "axios";
import request from "@/utils/request";

export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    ChartVue,
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
    // }, 3000);
    }, 113000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getChartData() {
      request({
        // url: "/api/dashboard/chart",
        url: "https://mock.apifox.cn/m1/2030614-0-default/chart/json",
        method: "get",
        params: { ID: 12345 },
      }).then((response) => {
        this.options = {
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
              data: response,
            },
          ],
        };
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
