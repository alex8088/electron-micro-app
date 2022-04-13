<script setup lang="ts">
import TitleBar from './components/TitleBar.vue'
</script>

<template>
  <TitleBar></TitleBar>
  <div class="view"></div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --theme-color: #fff;
  --tb-opr-color: #9b9b9b;
  --tb-opr-border-color: #eee;
  --tb-opr-hover-color: #333;
  --tb-opr-bg-color: transparent;
}

html,
body {
  height: 100%;
}

body {
  font-family: 'PingFang SC", "Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  user-select: none;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.view {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
