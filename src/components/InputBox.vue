<template>
  <div>
    <input type="text" v-model="user.name">
    <input type="text" v-model="user.phone">
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
      console.log(this.user)
      this.$emit('InputBox',this.user.name, this.user.phone)
    }
  }
}
</script>

<style scoped>

</style>
