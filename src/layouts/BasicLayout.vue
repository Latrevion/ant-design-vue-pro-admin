<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        v-model="collapsed"
        collapsible
        width="256px"
      >
        <div class="logo">Luke Antd Vue Admin</div>
        <SideMenuVue :theme="navTheme"></SideMenuVue>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <HeaderVue></HeaderVue>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <FooterVue></FooterVue>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
import HeaderVue from "./Header.vue";
import SideMenuVue from "./SideMenu.vue";
import FooterVue from "./Footer.vue";
import SettingDrawer from "../components/SettingDrawer";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    },
  },
  components: {
    HeaderVue,
    FooterVue,
    SideMenuVue,
    SettingDrawer,
  },
};
</script>

<style lang="less" scoped>
.trigger {
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
}
.trigger:hover {
  color: #1890ff;
  background: #eee;
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}

.nav-theme-dark {
  /deep/ .logo {
    color: #fff;
  }
}
</style>
