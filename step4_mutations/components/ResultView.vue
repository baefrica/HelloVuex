<template>
  <div>
    <h2>전체 {{ total }} 회 클릭 됨</h2>
    <h3>{{ cntMsg }}</h3>
  </div>
</template>

<script>
// 헬퍼를 이용해서 작성을 편하게
import { mapGetters } from 'vuex';

export default {
    name: "ResultView",

    computed: {
        total() {
            return this.$store.state.total
        },

        // cntMsg() {
        //   return this.$store.getters.cntMsg
        // }

        ...mapGetters([
          'cntMsg'
        ])
    }
}
</script>

<style>

</style>