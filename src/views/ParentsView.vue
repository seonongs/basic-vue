<template>
  <div>
    위
  </div>
  <div>
    {{ memoP }}
    <child-case :title="appTitle" :memoP="memoP" @change1="changeTitle2" @change2="changeTitle1"></child-case>
  </div>
  <div>
    아래
  </div>
</template>

<script>
import ChildCase from "@/views/ChildView";
export default {
  name: "ParentsView",
  components: {
    ChildCase
  },
  data() {
    return {
      appTitle: "갑니당",
      memoP: "memoPdddddddddd",
    }
  },

  methods: {
    sendChild(){
      alert('보내기');
    },
    changeTitle1() {
      this.appTitle = "hi"
    },
    changeTitle2() {
      this.appTitle = "hello"
    }

  }
}
</script>

<style scoped>
div {
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
h1 {
  color: darkslateblue;
}
</style>
