<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello, Привет</h1>
        <p>Hello, Привет</p>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, Header}
}
</script>

<style lang="scss">


</style>
