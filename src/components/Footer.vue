<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a class="navbar-link" :href="link.url">{{link.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props:{
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