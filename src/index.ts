import { createApp } from 'vue'
// import App from './App.vue'
import { createPinia } from 'pinia'
import route from './route/index'

import DetailShow from './views/DetailShow.vue'

const pinia = createPinia()

kintone.events.on(['app.record.index.show'], (event: KintoneEvent) => {
  const { type } = event
  const element = route[type as keyof typeof route].element as HTMLElement
  const { page } = route[type as keyof typeof route]
  const app = createApp(page)
  app.mount(element)
  return event
})

kintone.events.on('app.record.detail.show', (event: KintoneEvent) => {
  const element: HTMLElement = kintone.app.record.getHeaderMenuSpaceElement()!
  const app = createApp(DetailShow)
  app.use(pinia)
  app.mount(element)
  return event
})

kintone.events.on(
  ['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'],
  (event: KintoneEvent) => {
    const { record } = event
    record.orderId.disabled = true
    // const element: HTMLElement = kintone.app.record.getHeaderMenuSpaceElement()!
    // const app = createApp(DetailShow)
    // app.use(pinia)
    // app.mount(element)
    return event
  },
)
