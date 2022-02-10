<template>

  <div>
    <h1>random</h1>
    <span>
      <button @click="randomDice">Random-Dice</button>
      </span>
    <span v-text="random" class="ml"></span>
  </div>

  <div>
    <h1>compute</h1>
    <input v-model="firstname" placeholder="성" @keydown.enter="plus()"/>
    <input v-model="lastname" placeholder="이름"/>
    <span>{{ fullName }}</span>
  </div>

  <div>
    <h1>연산</h1>
    <span><button @click="plus" class="btn">+</button></span>
    <span><button @click="minus" class="btn">-</button></span>
    <span class="ml">{{ digit }}</span>
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
    <h1>radio</h1>
    <input type="radio" id="annie" value="annie" v-model="radioItem">
    <label for="annie">annie</label>
    <input type="radio" id="buddy" value="buddy" v-model="radioItem">
    <label for="buddy">buddy</label>
    <input type="radio" id="camel" value="camel" v-model="radioItem">
    <label for="camel">camel</label>
    <p>선택: {{ radioItem }}</p>
  </div>

  <div>
    <h1>for</h1>
    <ul>
      <li
          v-for="user in users"
          v-bind:key="user"
      >{{ user.title }}</li>
    </ul>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'SimpleVue',

  data() {
    return {
      checkedItem: [],
      radioItem: '',
      firstname: '',
      lastname: '',
      random: parseInt(Math.random() * 6 + 1),
      users: [],
      digit: 0,
    }
  },

  computed: {
    fullName() {
      return `${this.firstname} ${this.lastname}`
    }
  },

  methods: {
    plus() {
      this.digit++
    }    ,
    minus() {
      this.digit--
    },
    randomDice(){
      this.random = parseInt(Math.random() * 6 + 1)
    }
  },

  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(response => this.users = response.data)
    .catch()
  },

}
</script>

<style scoped>
div {
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
h1 {
  color: darkslateblue;
}
input {
  width: 50px;
}
button {
  color: white;
  background-color: darkblue;
  border: 1px solid black;
  margin: 1px;
  padding: 3px;
}
.ml {
  margin-left: 5px;
}
</style>
