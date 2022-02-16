<template>

  <div>
    <h6>random</h6>
    <span>
      <q-btn @click="randomDice">Random-Dice</q-btn>
      </span>
    <h5 v-text="random" class="ml"></h5>
  </div>

  <div>
    <h3>compute</h3>
    <q-input v-model="firstname" label="first" style="width: 100px; display: inline-flex" />
    <q-input v-model="lastname" label="last" style="width: 100px; display: inline-flex" />
    {{fullName}}
  </div>

  <div>
    <h3>연산</h3>
    <q-btn @click="plus">+</q-btn>
    <q-btn @click="minus">-</q-btn>
    <q-field filled style="width: 150px; display: inline-flex">
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">{{ digit }}</div>
      </template>
    </q-field>
  </div>

  <div>
    <h3>checkbox</h3>
    <q-list>
      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="color" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Teal</q-item-label>
          <q-item-label caption>1</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="color" val="orange" color="orange" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Orange</q-item-label>
          <q-item-label caption>2</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section avatar top>
          <q-checkbox v-model="color" val="cyan" color="cyan" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Cyan</q-item-label>
          <q-item-label caption>
            3
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-px-sm q-mt-sm">
      Your selection is: <strong>{{ color }}</strong>
    </div>
  </div>

  <div>
    <h3>radio</h3>
    <input type="radio" id="annie" value="annie" v-model="radioItem">
    <label for="annie">annie</label>
    <input type="radio" id="buddy" value="buddy" v-model="radioItem">
    <label for="buddy">buddy</label>
    <input type="radio" id="camel" value="camel" v-model="radioItem">
    <label for="camel">camel</label>
    <p>선택: {{ radioItem }}</p>
  </div>

  <div>
    <h3>for</h3>
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
import { ref } from 'vue'
export default {
  setup () {
    return {
      val: ref(true)
    }
  },
  name: 'ExampleView',

  data() {
    return {
      checkedItem: {},
      ace: '',
      banana: '',
      radioItem: '',
      firstname: '',
      lastname: '',
      random: parseInt(Math.random() * 6 + 1),
      users: [],
      digit: 0,
      color: [],
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

</style>
