<script setup>

</script>

<template>
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <a href="/" class="navbar-logo">logo</a>
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
export default {}
</script>

<style scoped lang="scss">

</style>