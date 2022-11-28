<template>
  <div id="app">
    <a-button>按钮</a-button>
    <nav>
      <router-link to="/dashboard/analysis">dashboard</router-link> |
      <router-link to="/form">form</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less"></style>
