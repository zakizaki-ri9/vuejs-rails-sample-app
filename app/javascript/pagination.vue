<template>
  <div id="pagination-root">
    <nav>
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">prev</a></li>
        <li class="page-item"><a class="page-link" href="#">{{sample_page_number}}</a></li>
        <li class="page-item"><a class="page-link" href="#">{{sample_page_number}}</a></li>
        <li class="page-item"><a class="page-link" href="#">{{sample_page_number}}</a></li>
        <li class="page-item"><a class="page-link" href="#">next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  sample_page: function () {
    return {
      sample_page_number: "999"
    }
  }
}
</script>

<style>
</style>
