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
      realTime: '',
    }
  },
  created() {
    setInterval(() => {
          this.realTime = new Date().toLocaleString();
    },1000);
  },
  methods: {
    test() {

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
