<template>
  <section class="container">
    <h1 v-if="error.statusCode === 404">あれれ、ページがないよ!</h1>
    <h1 v-else>あわわ、エラーがおきちゃったよ!</h1>
    <h2>{{error.message}}</h2>

    <nuxt-link to="/" class="button--grey">Home</nuxt-link>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "default"
};
</script>