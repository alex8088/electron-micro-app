<script setup lang="ts">
import { ref } from 'vue'
import useIpcRendererOn from '../hooks/useIpcRendererOn'

const canGoback = ref(true)

const handleClick = (action: string): void => {
  window.electron.ipcRenderer.send('win:invoke', action)
}

const handleClick2 = (): void => {
  window.electron.ipcRenderer.send('micro-app:go-back')
}

useIpcRendererOn('app:can-go-back', (_, arg: boolean) => {
  canGoback.value = arg
})
</script>

<template>
  <div class="title-bar">
    <div class="nav">
      <div
        class="go-back"
        :class="{ hide: !canGoback }"
        title="Go back"
        @click="handleClick2"
      ></div>
    </div>
    <div id="title" class="title"></div>
    <div class="opr">
      <div class="opr-area">
        <a id="min" class="btn btn-min" title="Minimize" @click="handleClick('min')">
          <span></span>
        </a>
        <a id="close" class="btn btn-close" title="Maximize" @click="handleClick('close')">
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.title-bar {
  display: flex;
  -webkit-app-region: drag;
  height: 45px;
  z-index: 1001;
  width: 100%;
  background-color: var(--theme-color);
}

.nav {
  width: 75px;
  padding: 13px 0 12px 12px;
}

.nav .go-back {
  -webkit-app-region: no-drag;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.nav .go-back::after {
  content: ' ';
  position: absolute;
  height: 10px;
  width: 10px;
  border-color: var(--tb-opr-color);
  border-style: solid;
  border-width: 2px 2px 0 0;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(180deg);
  margin-top: 4px;
  margin-left: 4px;
}

.nav div:hover::after {
  border-color: var(--tb-opr-hover-color);
}

.hide {
  display: none;
}

.title {
  flex: 1;
  text-align: center;
  line-height: 45px;
  padding: 0 10px;
  word-break: break-all;
  overflow: hidden;
}

.opr {
  padding-right: 12px;
  -webkit-app-region: no-drag;
}

.opr-area {
  border-radius: 14px;
  border: 1px solid var(--tb-opr-border-color);
  height: 26px;
  margin: 9px 0;
  display: flex;
  align-items: center;
  padding: 0 2px;
  background-color: var(--tb-opr-bg-color);
}

.btn {
  position: relative;
  width: 36px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn:not(:first-child)::before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid #ccc;
  color: #ccc;
  transform-origin: 0 0;
  transform: scaleX(0.5);
}

.btn span {
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  position: relative;
}

.btn-min span:before {
  content: '';
  position: relative;
  display: flex;
  border-top: 2px solid var(--tb-opr-color);
  top: 7px;
  margin-right: 3px;
}

.btn-min:hover span:before {
  border-top-color: var(--tb-opr-hover-color);
}

.btn-close span:before,
.btn-close span:after {
  content: '';
  position: absolute;
}

.btn-close span:before {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--tb-opr-color);
}

.btn-close span:after {
  top: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--tb-opr-color);
}

.btn-close:hover span:before {
  border-color: var(--tb-opr-hover-color);
}

.btn-close:hover span:after {
  background-color: var(--tb-opr-hover-color);
}
</style>
