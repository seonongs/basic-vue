<template>
  <div>
  <p></p>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Child</div>
    </q-card-section>

    <q-card-actions>
      <q-btn @click="$emit('changeTitleKoreanC')">Korean</q-btn>
      <q-btn @click="$emit('changeTitleEnglishC')">English</q-btn>
      <q-btn @click="changeUserInfoC">수정</q-btn>
    </q-card-actions>
    <q-card-actions>
      <q-input type="text" v-model="user.name"></q-input>
    </q-card-actions>
    <q-card-actions>
      <q-input type="text" v-model="user.phone"></q-input>
    </q-card-actions>
  </q-card>
  </div>
</template>

<script>
export default {
  name: "Child",
  components: {},

  created() {
    this.user.name = this.nameP
    this.user.phone = this.phoneP
  },

  props: {
    nameP: String,
    phoneP: String,
  },

  data() {
    return {
      user: {
      },
    }
  },

  methods: {
    changeUserInfoC() {
      this.$emit('changeUserInfoC', this.user)
    },
  },
}
</script>

<style scoped>
</style>
