<template>
  <div class="wrapper">
    <Header :links="links" :title="title" />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello, Привет</h1>
        <p>Hello, Привет</p>
      </div>
    </div>
    <Footer :links="links" />
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, Header},
  data(){
    return{
      title: 'Template',
      links: [
        {
          title:'Home',
          alias: 'home',
          url: '/'
        },
        {
          title:'About',
          alias: 'about',
          url: '/about'
        },
        {
          title:'Vacancy',
          alias: 'vacancy',
          url: '/vacancy'
        },
      ]
    }
  }
}
</script>

<style lang="scss">


</style>
