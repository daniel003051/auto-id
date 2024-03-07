<script setup lang="ts">
kintone.events.on('app.record.detail.process.proceed', (event: ProcessEvent) => {
  //   const { action } = event
  console.log(event)
})
</script>
<template>
  <div class="">
    <h1>App Page</h1>
  </div>
</template>
<style scoped></style>
