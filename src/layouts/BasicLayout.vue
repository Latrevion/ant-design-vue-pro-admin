<template>
  <div>
    <HeaderVue></HeaderVue>
    <SideMenuVue></SideMenuVue>
    <router-view></router-view>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from "./Header.vue";
import SideMenuVue from "./SideMenu.vue";
import FooterVue from "./Footer.vue";
export default {
  components: {
    HeaderVue,
    FooterVue,
    SideMenuVue,
  },
};
</script>

<style lang="less" scoped></style>
