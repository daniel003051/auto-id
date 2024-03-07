import IndexShow from '../views/IndexShow.vue'
import DetailShow from '../views/DetailShow.vue'

export default {
  'app.record.index.show': {
    page: IndexShow,
    element: kintone.app.getHeaderSpaceElement(),
  },
  'app.record.detail.show': {
    page: DetailShow,
    element: kintone.app.record.getHeaderMenuSpaceElement(),
  },
}
