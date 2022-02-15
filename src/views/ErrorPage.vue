<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
          :text="['It`s Error Page.']"
          sent
      />
      <q-chat-message
          :text="['Ok, I got it.']"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage"
}
</script>
