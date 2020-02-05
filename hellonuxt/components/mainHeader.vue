<template>
  <div class="header">
        <nuxt-link to="/" class="button--green">Home</nuxt-link>
        <nuxt-link to="/hello" class="button--green">Hello</nuxt-link>
        <nuxt-link to="/counter" class="button--green">Counter</nuxt-link>
        <nuxt-link to="/todo" class="button--green">ToDo</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
  .header {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>