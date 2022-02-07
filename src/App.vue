<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/errorPage">Error</router-link>
  </div>
  <router-view />
  <div>
    <p>next</p>
  </div>
</template>

<script>
//import SimpleVue from './views/SimpleVue.vue'

export default {
  name: 'App',
  components: {
    //SimpleVue
  }

}
</script>

<style scoped>
  html body{
    margin: 0;
  }
  div {
    padding: 10px;
    margin: 10px;
    border: 5px solid black;
  }
</style>
