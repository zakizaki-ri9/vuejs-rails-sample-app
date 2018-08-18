<template>
  <div id="hello">
    <p>fixed message</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue, Modify, Too"
    }
  }
}
</script>

<style>
p {
  font-size: 5em;
  color: red;
  border-width: 1px;
  border-color: blue;
  text-align: center;
}
</style>
