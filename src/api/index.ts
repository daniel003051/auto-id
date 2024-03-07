import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import type { GetRecordsParam, AddRecordsParam } from '../types/index'

const APP_ID = '40'
const client = new KintoneRestAPIClient({
  auth: { apiToken: 'am8ZbCcN6t54aPHkxBuyPOKGbekEZbPmfqeGHB0x' },
})

const paramWapper = <T>(params: T) => ({ app: APP_ID, ...params })

// 新增
export const addRecord = (params: AddRecordsParam) => client.record.addRecord(paramWapper(params))
// 取得
export const getAllRecords = (params: GetRecordsParam) => client.record.getAllRecords(paramWapper(params))
