<template>
  <div class="child">
    <button @click="$emit('change1')">++</button>
    <button @click="$emit('change2')">++</button>
    {{ title }}
    {{ memoP }}
  </div>
</template>

<script>
export default {
  name: "ChildView",
  components: {},

  props: {
    title: String,
    memoP: String,
  },

  data() {
    return {
      memo: "메모",
    }
  },

  methods: {
    colorChange() {
      console.log(1)
    }
  }
}
</script>

<style scoped>
.child {
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
}
h1 {
  color: darkslateblue;
}
button {
  color: white;
  background-color: darkblue;
  border: 1px solid black;
  margin: 1px;
  padding: 3px;
}

</style>
