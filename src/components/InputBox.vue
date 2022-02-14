<template>
  <div>
    <input type="text" v-model="inputText"/>

    <input type="checkbox" id="annie" value="annie">
    <label for="annie">annie</label>
    <input type="checkbox" id="buddy" value="buddy">
    <label for="buddy">buddy</label>
    <input type="checkbox" id="camel" value="camel">
    <label for="camel">camel</label>

  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return{
      inputText: '',
    }
  },
  props: {
    inputBox: String,
  }
}
</script>

<style scoped>

</style>
