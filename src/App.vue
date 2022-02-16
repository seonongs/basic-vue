<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf"  class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="whatshot" />
          <q-toolbar-title>basic-vue</q-toolbar-title>
        </q-toolbar>
        <q-tabs>
          <router-link to="/">
            <q-tab name="Home" label="Home" style="color: white" />
          </router-link>
          <router-link to="/simpleVue">
            <q-tab name="SimpleVue" label="SimpleVue" style="color: white" />
          </router-link>
          <router-link to="/parentsView">
            <q-tab name="Parents" label="Parents" style="color: white" />
          </router-link>
          <router-link to="/UserView">
            <q-tab name="User" label="User" style="color: white" />
          </router-link>
          <router-link to="/TableView">
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
}
</script>

<style>
a {
  text-decoration-line: none;
}

</style>
