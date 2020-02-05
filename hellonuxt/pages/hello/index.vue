<template>
  <section class="container">
    <div>
      <h1>Hello {{name}}!</h1>
      <input v-model="name" />
    </div>
  </section>
</template>

<script>
export default {
  layout: "generic",
  data() {
    return {
      name: "NUXTJS"
    };
  }
};
</script>