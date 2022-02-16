<template>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "LscSlot"
}
</script>

<style scoped>

</style>