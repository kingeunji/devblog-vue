<template>
  <div>
      {{ category }}
  </div>
</template>

<script>
export default {
    asyncData() {
        return {
            category : ''
        }
    },
    created() {
        this.category = this.$route.params.category
    }
}
</script>

<style>

</style>