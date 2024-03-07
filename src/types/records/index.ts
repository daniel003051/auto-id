// type RecordWrapper<T> = {
//   app: string
// } & T

export type GetRecordsParam = {
  fields: string[]
  condition?: string
  orderBy?: string
}

export type AddRecordsParam = {
  record: {
    商品名稱: {
      value: string
    }
    商品價格: {
      value: string
    }
  }
}

// export type GetRecordsParam = RecordWrapper<{
//   fields: string[]
//   totalCount: boolean
// }>

export type record = {
  商品名稱: {
    value: string
  }
  商品價格: {
    value: string
  }
  orderId: {
    value: string
  }
}
