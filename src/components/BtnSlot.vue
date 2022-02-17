<template>
  <div>
    <h5>[ {{ number }} ]</h5>
    <p></p>
    <p>기존의 버튼</p>
    <q-btn @click="plus">+1</q-btn>
    <q-btn @click="minus">-1</q-btn>

    <slot name="BtnSlot" :number="number"/>

  </div>
</template>

<script>
export default {
  name: "Slot",
  data() {
    return {
      number: 1,
    }
  },
  methods: {
    plus() {
      return this.number++
    },
    minus() {
      this.number--
    },
  },
}
</script>

<style scoped>

</style>