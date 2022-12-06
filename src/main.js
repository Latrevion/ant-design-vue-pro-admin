import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { Button, Layout, Icon, Drawer, Radio, Menu ,Form,Input,Select} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./Directives/auth.js";
import store from "./store/index.js";

Vue.config.productionTip = false;
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
Vue.use(Select);
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3812603_az4u7yc3u5v.js',
});
Vue.component('IconFont', IconFont); 

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
