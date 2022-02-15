<template>
  <div>
    <span class="material-icons-outlined">
    credit_card
    </span>
    <q-input type="text" v-model="user.name"></q-input>
    <span class="material-icons">
    phone_iphone
    </span>
    <q-input type="text" v-model="user.phone"></q-input>
    <q-btn @click="changeUserInfo">수정</q-btn>
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

</style>
