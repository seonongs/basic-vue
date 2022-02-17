<template>
  <div>

    <p></p>
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Slot</div>
      </q-card-section>
      <q-separator />
      <q-card-actions>

        <BtnSlot @reset="reset">
          <template v-slot:BtnSlot="BtnSlot">
            <h5>[{{ BtnSlot.number }}]</h5>
            <p>슬롯버튼투입</p>
            <q-btn @click="$emit('reset')">reset</q-btn>
          </template>
        </BtnSlot>

      </q-card-actions>
    </q-card>

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
import BtnSlot from "@/components/BtnSlot";
export default {
  name: "ParentsView",
  components: { BtnSlot, Child },
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
    },
    reset(){
      alert(1)
    }
  }
}
</script>

<style scoped>
</style>
