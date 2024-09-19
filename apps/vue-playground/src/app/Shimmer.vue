
<script setup lang="ts">

import '@rosy-design-system';
</script>

<template>
<div class="container">
  <h1>Example 1</h1>
  <div class="flex-row">
    <rosy-shimmer-loader shape="rounded-full" style="--width:30px;--height: 30px;"></rosy-shimmer-loader>
    <rosy-shimmer-loader shape="rounded-md" style="--height: 30px;"></rosy-shimmer-loader>
  </div>
    <rosy-shimmer-loader shape="rounded-md" style="display:block; margin-top:1rem; --width: 342px; height: 100px;"></rosy-shimmer-loader>
</div>
<div>
  <h1>Example 2</h1>
  <rosy-shimmer-loader shape="rounded-md" style="--width: 500px; --height: 20px; display: block;"></rosy-shimmer-loader>
  <rosy-shimmer-loader shape="rounded-md" style="--width: 400px; --height: 20px;display: block; margin-top: 10px;"></rosy-shimmer-loader>
  <rosy-shimmer-loader shape="rounded-md" style="--width: 300px; --height: 20px;display: block; margin-top: 10px;"></rosy-shimmer-loader>
  <rosy-shimmer-loader shape="rounded-md" style="--width: 200px; --height: 20px; display: block; margin-top: 10px;"></rosy-shimmer-loader>
</div>
</template>

<style>
.gray {
  background-color: #e2e2e2;
}

.flex-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.short-row {
  height: 30px;
  flex: 1;
  border-radius: 8px;
}

.body-box {
  margin-top: 12px;
  width: 342px;
  height: 100px;
  border-radius: 8px;
}

.container {
  display: inline-block;
}
</style>
