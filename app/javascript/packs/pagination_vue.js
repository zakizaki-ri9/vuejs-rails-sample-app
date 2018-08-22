import Vue from 'vue/dist/vue.esm'
import Pagination from '../pagination.vue'

window.onload = () => {
  const app = new Vue({
    el: "#pagination-root",
    render: h => h(Pagination)
  })

  console.log(app)
}
