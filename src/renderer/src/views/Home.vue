<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '../components/Loading.vue'

const router = useRouter()

let loading = ref(true)

const handleClick = (): void => {
  router.push({ name: 'about' })
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
    window.app.changeThemeColor('#4a7fed')
  }, 1000)
})
</script>

<template>
  <Loading v-if="loading"></Loading>
  <template v-else>
    <div class="header">
      <div class="banner">
        <div class="banner__title">Electron</div>
        <div class="banner__desc">桌面小程序</div>
      </div>
    </div>
    <div class="body">
      <a
        class="tag"
        target="_blank"
        href="https://github.com/alex8088/quick-start/tree/master/packages/create-electron"
      >
        <span>📁 创建</span>
        <p>create-electron</p>
      </a>
      <a class="tag" target="_blank" href="https://github.com/alex8088/electron-vite">
        <span>🚀 构建</span>
        <p>electron-vite</p>
      </a>
      <a class="tag" target="_blank" href="https://github.com/alex8088/electron-toolkit">
        <span>💡 开发</span>
        <p>electron-toolkit</p>
      </a>
      <a class="tag" target="_blank" href="https://www.electron.build">
        <span>📦 打包</span>
        <p>electron-builder</p>
      </a>
    </div>
    <div class="footer" @click="handleClick">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path
          d="M320 64l-256 0 0 256 256 0 0-256zM384 0l0 0 0 384-384 0 0-384 384 0zM128 128l128 0 0 128-128 0zM960 64l-256 0 0 256 256 0 0-256zM1024 0l0 0 0 384-384 0 0-384 384 0zM768 128l128 0 0 128-128 0zM320 704l-256 0 0 256 256 0 0-256zM384 640l0 0 0 384-384 0 0-384 384 0zM128 768l128 0 0 128-128 0zM448 0l64 0 0 64-64 0zM512 64l64 0 0 64-64 0zM448 128l64 0 0 64-64 0zM512 192l64 0 0 64-64 0zM448 256l64 0 0 64-64 0zM512 320l64 0 0 64-64 0zM448 384l64 0 0 64-64 0zM448 512l64 0 0 64-64 0zM512 576l64 0 0 64-64 0zM448 640l64 0 0 64-64 0zM512 704l64 0 0 64-64 0zM448 768l64 0 0 64-64 0zM512 832l64 0 0 64-64 0zM448 896l64 0 0 64-64 0zM512 960l64 0 0 64-64 0zM960 512l64 0 0 64-64 0zM64 512l64 0 0 64-64 0zM128 448l64 0 0 64-64 0zM0 448l64 0 0 64-64 0zM256 448l64 0 0 64-64 0zM320 512l64 0 0 64-64 0zM384 448l64 0 0 64-64 0zM576 512l64 0 0 64-64 0zM640 448l64 0 0 64-64 0zM704 512l64 0 0 64-64 0zM768 448l64 0 0 64-64 0zM832 512l64 0 0 64-64 0zM896 448l64 0 0 64-64 0zM960 640l64 0 0 64-64 0zM576 640l64 0 0 64-64 0zM640 576l64 0 0 64-64 0zM704 640l64 0 0 64-64 0zM832 640l64 0 0 64-64 0zM896 576l64 0 0 64-64 0zM960 768l64 0 0 64-64 0zM576 768l64 0 0 64-64 0zM640 704l64 0 0 64-64 0zM768 704l64 0 0 64-64 0zM832 768l64 0 0 64-64 0zM896 704l64 0 0 64-64 0zM960 896l64 0 0 64-64 0zM640 832l64 0 0 64-64 0zM704 896l64 0 0 64-64 0zM768 832l64 0 0 64-64 0zM832 896l64 0 0 64-64 0zM640 960l64 0 0 64-64 0zM768 960l64 0 0 64-64 0zM896 960l64 0 0 64-64 0z"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  </template>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
}

body {
  background: #f5f6f7;
  font-size: 16px;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  line-height: 1.6;
}

a {
  outline: none;
  text-decoration: none;
}

.header {
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 140%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4a7fed;
  border-radius: 0 0 50% 50%;
  z-index: -1;
  overflow: hidden;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 112px;
  color: rgba(255, 255, 255, 0.9);
  animation: a 1.3s both;
}

.banner__title {
  font-size: 38px;
}

.banner__desc {
  font-size: 18px;
}

.body {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 15px;
  margin: 20px 30px;
  /* animation: a 1.3s both; */
}

.tag {
  height: 120px;
  width: 140px;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333;
  cursor: pointer;
}

.tag:hover {
  transition: transform 0.4s;
  transform: translateY(-6px);
}

.tag span {
  margin-bottom: 12px;
  font-weight: 600;
}

.tag p {
  font-size: 14px;
}

.footer {
  position: absolute;
  top: 10px;
  right: 14px;
  cursor: pointer;
}

@keyframes a {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
