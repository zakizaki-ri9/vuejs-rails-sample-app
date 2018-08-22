<template>
  <nav>
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">prev</a></li>
      <li class="page-item"><a class="page-link" href="#">{{sample_page_number}}</a></li>
      <li class="page-item"><a class="page-link" href="#">{{sample_page_number}}</a></li>
      <li class="page-item"><a class="page-link" href="#">{{sample_page_number}}</a></li>
      <li class="page-item"><a class="page-link" href="#">next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      sample_page_number: "999"
    }
  }
}
</script>

<style>
</style>
