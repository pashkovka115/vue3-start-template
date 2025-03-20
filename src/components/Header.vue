<script setup>

</script>

<template>
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <a href="/" class="navbar-logo">{{title}}</a>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.alias">
              <a class="navbar-link" :href="link.url">{{link.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    },
    links:{
      type: Array,
      default:[
        {
          title:'Home',
          alias: 'home',
          url: '/'
        },
      ],
      required: false
    },
  }
}
</script>

<style scoped lang="scss">

</style>