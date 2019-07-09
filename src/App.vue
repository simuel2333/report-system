<template>
  <div id="app">
    <header class="Header">研报系统</header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.Header {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-color: #24292e;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 14px;
  line-height: 30px;
  padding: 16px;
  z-index: 32;
}
</style>

