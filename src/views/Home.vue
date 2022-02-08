<template>
  <div>
    {{ time }}
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      time: new Date().toLocaleString(),
    }
  }
}
</script>

<style scoped>

</style>
