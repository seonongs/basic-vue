<template>
  <div>
  <p></p>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Parents</div>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <p>{{ user.title }}</p>
    </q-card-actions>
    <q-card-actions>
      <p>{{ user.name }}</p>
    </q-card-actions>
    <q-card-actions>
      <p>{{ user.phone }}</p>
    </q-card-actions>
  </q-card>

  <child
      :nameP="user.name"
      :phoneP="user.phone"
      @changeTitleKoreanC="changeTitleKorean"
      @changeTitleEnglishC="changeTitleEnglish"
      @changeUserInfoC="changeUserInfo">
  </child>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  name: "ParentsView",
  components: { Child },
  data() {
    return {
      user: {
        title: "안녕하세요",
        name: '김선홍',
        phone: '010-1234-5678',
      },
    }
  },

  methods: {
    changeTitleKorean() {
      this.user.title = "안녕하세요"
    },
    changeTitleEnglish() {
      this.user.title = "Hello"
    },
    changeUserInfo(user) {
      this.user.name = user.name;
      this.user.phone = user.phone;
    }
  }
}
</script>

<style scoped>
</style>
