<template>
<p>Home page</p>
  <p>{{getItem}}</p>
</template>

<script>
export default {
  computed:{
    getItem(){
      return this.$store.getters.getItem
    }
  }
}
</script>

<style scoped lang="scss">

</style>