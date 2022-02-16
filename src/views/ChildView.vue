<template>
  <div class="child">
    <p>Child</p>
    <q-btn @click="$emit('change1')">change</q-btn>
    <q-btn @click="$emit('change2')">change</q-btn>
  </div>
</template>

<script>
export default {
  name: "ChildView",
  components: {},

  props: {
    title: String,
  },

  data() {
    return {
    }
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
