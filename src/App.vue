<template>

  <div id="nav">
    <router-link to="/">
      <a>Home</a>
    </router-link>
    <router-link to="/simpleVue">
      <a>SimpleVue</a>
    </router-link>
  </div>

  <router-view />

  <div>
    <p style="text-align: center">b a s i c v u e p r o j e c t</p>
  </div>

</template>

<script>
import "./assets/css/main.css";
export default {
  name: 'App',
}
</script>

<style scoped>
  #nav {
    border: 1px dotted black;
  }
  div {
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
  }
  a {
    color: gray;
    text-decoration-line: none;
    padding: 4px;
  }
</style>
