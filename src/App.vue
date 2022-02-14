<template>

  <div>
    <router-link to="/">
      <a>Home</a>
    </router-link>
    <router-link to="/simpleVue">
      <a>SimpleVue</a>
    </router-link>
    <router-link to="/parentsView">
      <a>Parents</a>
    </router-link>
    <router-link to="/exampleView">
      <a>Example</a>
    </router-link>
  </div>

  <router-view />

</template>

<script>
import "@/assets/css/main.css";
export default {
  name: 'App',
}
</script>

<style scoped>
  div {
    padding: 10px;
    margin: 10px;
    border: 1px dotted black;
  }
  a {
    color: gray;
    text-decoration-line: none;
    padding: 4px;
  }
</style>
