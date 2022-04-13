<template>
  <div class="loading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="50" cy="23" r="13" fill="#4a7fed">
        <animate
          attributeName="cy"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
          keyTimes="0;0.5;1"
          values="23;77;23"
        ></animate>
      </circle>
    </svg>
  </div>
</template>

<style>
.loading {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40%;
}
</style>
