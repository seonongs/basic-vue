<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ phone }}</h3>

  </div>
  <InputBox :name="name" :phone="phone" @InputBox="changeUserInfo"/>
  <EditedDate></EditedDate>
</template>

<script>
import InputBox from "@/components/InputBox";
import EditedDate from "@/components/EditedDate";

export default {
  name: "UserView",
  components: { InputBox, EditedDate },
  data() {
    return {
      name: '김선홍',
      phone: '010',
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
