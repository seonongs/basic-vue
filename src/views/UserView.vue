<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ phone }}</p>

  </div>
  <input-box :name="name" :phone="phone" @InputBox="changeUserInfo"/>
</template>

<script>
import InputBox from "@/components/InputBox";

export default {
  name: "UserView",
  components: { InputBox },
  data() {
    return {
      name: '김선홍',
      phone: '010-1234-1234',
    }
  },
  methods: {
    changeUserInfo(user) {
      this.name = user.name;
      this.phone = user.phone;
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
