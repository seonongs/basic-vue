<template>

  <information />
  <InputBox />

</template>

<script>
import Information from "@/components/Information";
import InputBox from "@/components/InputBox";
export default {
  name: "ExampleView",
  components: {Information, InputBox}
}
</script>

<style scoped>
div {
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
</style>
