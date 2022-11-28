import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { Button } from "ant-design-vue";
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Vuex);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
