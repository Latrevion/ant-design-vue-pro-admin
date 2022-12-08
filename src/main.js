import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import enUS from "./locale/enUS";
import zhCN from './locale/zhCN';

import VueI18n from 'vue-i18n'
const queryString = require('query-string');


import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  ConfigProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
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
Vue.use(ConfigProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(VueI18n)


const i18n = new VueI18n({
  //字符串转对象
  locale:queryString.parse(location.search).locale || 'zhCN',
  messages:{
    enUS:{message: enUS},
    zhCN:{message: zhCN}
  }
})
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3812603_az4u7yc3u5v.js",
});
Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
