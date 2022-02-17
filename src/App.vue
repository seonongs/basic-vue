<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf"  class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="whatshot" />
          <q-toolbar-title>Basic-vue</q-toolbar-title>
          <span style="text-align: right;">{{ realTime }}</span>
        </q-toolbar>
        <q-tabs>
          <router-link to="/">
            <q-tab name="Home" label="Home" style="color: white" />
          </router-link>
          <router-link to="/example">
            <q-tab name="Example" label="Example" style="color: white" />
          </router-link>
          <router-link to="/parents">
            <q-tab name="Parents" label="Parents" style="color: white" />
          </router-link>
          <router-link to="/table">
            <q-tab name="Table" label="Table" style="color: white" />
          </router-link>
        </q-tabs>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      realTime: '',
    }
  },
  created() {
    setInterval(() => {
      this.realTime = new Date().toLocaleString();
    }, 1000);
  },
}
</script>

<style>
a {
  text-decoration-line: none;
}

</style>
