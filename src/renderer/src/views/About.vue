<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  window.app.changeThemeColor('')
})
</script>

<template>
  <div class="about">
    <img class="qrcode" src="../assets/qrcode_for_gh.jpg" />
    <p>关注“前端随笔杂谈”</p>
    <p class="link">
      <a target="_blank" href="https://github.com/alex8088">
        <img class="link-item" src="../assets/github.png" />
      </a>
      <a target="_blank" href="https://twitter.com/alexwei114">
        <img class="link-item" src="../assets/twitter.png" />
      </a>
    </p>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
}

.qrcode {
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
}

.link {
  margin-top: 40px;
}

.link-item {
  margin: 0 8px;
}
</style>
