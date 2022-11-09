<template>
  <div>
    <h2>전체 {{ total }} 회 클릭 됨</h2>
    <h3>{{ cntMsg }}</h3>
  </div>
</template>

<script>
export default {
    name: "ResultView",

    computed: {
        total() {
            return this.$store.state.total
        },

        cntMsg() {
          return this.$store.getters.cntMsg
        }
    }
}
</script>

<style>

</style>