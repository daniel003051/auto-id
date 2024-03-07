<script setup lang="ts">
import { useRecordStore } from '../store/record'

const { getLastOrderId, getTodayDate } = useRecordStore()

kintone.events.on('app.record.detail.process.proceed', async (event: ProcessEvent) => {
  if (event.action.value !== '完成') return

  const today = getTodayDate()
  const lastOrderId = await getLastOrderId()
  event.record.orderId.value = `order-${today}-${lastOrderId + 1}`
  return event
})
</script>

<template>
  <div class="box">
    <h1 class="box__title">detail</h1>
    <button @click="getLastOrderId">get all records</button>
  </div>
</template>

<style lang="scss" scoped></style>
