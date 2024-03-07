import { defineStore } from 'pinia'
import { getAllRecords } from '../api'

type RecordType = {
  orderId: {
    value: string
  }
}

export const useRecordStore = defineStore('record', () => {
  const getTodayDate = (): string => {
    return new Date().toISOString().slice(0, 10).replace(/-/g, '')
  }

  const sortRecord = <T extends RecordType>(records: T[]) => {
    return records.sort((a, b) => {
      const orderIdA = a.orderId.value!.split('-')[2]
      const orderIdB = b.orderId.value!.split('-')[2]
      // 使用 localeCompare() 方法進行字串比較
      return orderIdA.localeCompare(orderIdB)
    })
  }

  const getLastOrderId = async (): Promise<number> => {
    try {
      const records = (await getAllRecords({
        fields: ['orderId'],
        condition: `orderId like "order-${getTodayDate()}"`,
        orderBy: '',
      })) as unknown as RecordType[]

      if (!records) {
        return 0
      }

      const sortedRecords = sortRecord(records)
      const lastOrder = sortedRecords[sortedRecords.length - 1]
      const lastOrderId = lastOrder.orderId.value.split('-')[2]

      return parseInt(lastOrderId, 10)
    } catch (e) {
      console.error(e)
      return 0
    }
  }

  return { getTodayDate, getLastOrderId }
})
