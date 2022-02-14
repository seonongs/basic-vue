<template>
  <div>
    이름: <input type="text" v-model="user.name">
    전화번호: <input type="text" v-model="user.phone">
    <button @click="changeUserInfo">수정</button>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data() {
    return{
      user: {},
    }
  },
  props: {
    name: String,
    phone: String,
  },
  created() {
    this.user.name = this.name
    this.user.phone = this.phone
  },
  methods: {
    changeUserInfo() {
      this.$emit('InputBox', this.user)
    },

  },
  emits: {

  },
  mounted() {
    this.emitter.on("eventDate", this.addData);
  }
}
</script>

<style scoped>
button {
  color: white;

  background-color: darkblue;
  border: 1px solid black;
  margin: 1px;
  padding: 3px;
}
</style>
