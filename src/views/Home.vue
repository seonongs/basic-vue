<template>
  <div>
    {{ realTime }}
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      realTime: new Date().toLocaleString(),
    }
  },
}
</script>

<style scoped>
div {
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
</style>
