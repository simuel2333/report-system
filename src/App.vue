<template>
  <div id="app">
    <header class="Header">
      研报系统(分析师)
      <div class="head-portrait">
        <el-dropdown>
          <span class="el-icon-user-solid">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <router-view />
    <footer class="footer">@西安交通大学</footer>
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
  line-height: 2;
  padding: 16px;
  z-index: 32;
}
.head-portrait {
  margin-left: auto;
}
.footer {
  text-align: center;
}
</style>

