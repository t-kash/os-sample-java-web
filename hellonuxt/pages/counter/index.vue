<template>
  <section class="container">
    <div>
      <h1>ようこすだよ</h1>
      <p>{{count}}回目のカウントアップだよ</p>
      <button @click="addCount">カウントアップ</button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "generic",
  computed: {
    count() {
      return this.$store.state.counter.count;
    }
  },
  methods: {
    ...mapMutations({
      addCount: "counter/add"
    })
  }
};
</script>