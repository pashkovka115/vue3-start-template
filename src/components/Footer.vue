<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a class="navbar-link" :href="link.url">{{ link.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {links} from "@/_config";

export default {
  data() {
    return {
      links: links
    }
  }
}
</script>

<style scoped lang="scss">

</style>