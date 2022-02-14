<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "EditedDate",
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    eventDate() {
      this.emitter.emit('eventDate', 'hi');
    }
  }

}
</script>

<style scoped>

</style>
