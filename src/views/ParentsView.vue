<template>
  <div>
    <p>Parents</p>
    <h6>{{ title }}</h6>
  </div>
  <child :title="title" @change1="changeTitle1" @change2="changeTitle2"></child>
  <div>
    <p>Footer</p>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  name: "ParentsView",
  components: {
    Child
  },
  data() {
    return {
      title: "안녕하세요",
    }
  },

  methods: {
    changeTitle1() {
      this.title = "hi"
    },
    changeTitle2() {
      this.title = "hello"
    },
  }
}
</script>

<style scoped>
div {
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
</style>
