<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ phone }}</h1>
  </div>

  <InputBox :name="name" :phone="phone" @InputBox="changeUserInfo"/>

</template>

<script>
import InputBox from "@/components/InputBox";
export default {
  name: "UserView",
  components: {InputBox},
  data() {
    return {
      name: '김선홍',
      phone: '010',
    }
  },
  methods: {
    changeUserInfo(name, phone) {
      this.name = name;
      this.phone = phone;
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
</style>
