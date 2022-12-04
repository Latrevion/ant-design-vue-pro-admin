import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { Button, Layout, Icon, Drawer, Radio, Menu ,Form,Input} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./Directives/auth.js";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Input);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
