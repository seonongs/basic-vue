<template>
  <div>
    <h1>if/else</h1>
    <p v-if="random > 0.5">
      {{ random }} - ok, better than noting,
    </p>
    <p v-else>
      {{ random }} - Now you don't
    </p>
  </div>

  <div>
    <h1>for</h1>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="item.index">{{ index }} - {{ item.message }}</li>
    </ul>
  </div>

  <div>
    <h1>checkbox</h1>
    <input type="checkbox" id="ace" value="ace" v-model="checkedItem">
    <label for="ace">ace</label>
    <input type="checkbox" id="diamond" value="diamond" v-model="checkedItem">
    <label for="diamond">diamond</label>
    <input type="checkbox" id="heart" value="heart" v-model="checkedItem">
    <label for="heart">heart</label>
    <input type="checkbox" id="spade" value="spade" v-model="checkedItem">
    <label for="spade">spade</label>
    <p>선택: {{ checkedItem }}</p>
  </div>

  <div>
    <h1>compute</h1>
    <input v-model="firstname" placeholder="성"/>
    <input v-model="lastname" placeholder="이름"/>
    <p>{{ fullName }}</p>
  </div>

</template>

<script>

export default {
  name: 'App',
  methods: {

  },

  data() {
    return {
      items: [{ message: 'item1' }, { message: 'item2' }],
      arrayStar: {counting: 'star'},
      checkedItem: [],
      firstname: '',
      lastname: '',
      random: Math.random(),
    }
  },

  computed: {
    fullName() {
      return `${this.firstname} ${this.lastname}`
    }
  },

}
</script>

<style scoped>
html body{
  margin: 0;
}
div {
  border: 1px dotted gray;
  padding: 10px;
}
h1 {
  color: darkred;
}
input {
  width: 50px;
}
</style>
