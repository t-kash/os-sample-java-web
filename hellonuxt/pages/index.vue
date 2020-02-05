<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">hellonuxt</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <h3 class="message">{{message}}</h3>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  // async asyncData(context) {
  //   return { message: "asyncData呼出動作確認" };
  // }
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // 通信したつもり
      let resultFormAPI = "asyncData呼出動作確認";
      // resolve(resultFormAPI);
      reject();
    })
      .then(result => {
        return { message: result };
      })
      .catch(e => {
        return { message: "asyncData呼出動作確認(API通信不安定)" };
      });
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.message {
  font-weight: 300;
  font-size: 16px;
  color: #3d218b;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

