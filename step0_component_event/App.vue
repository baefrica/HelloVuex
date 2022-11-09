<template>
  <div id="app">
    <h1>당신이 좋아하는 STUDY 를 선택하세요</h1>
    <result-view :total="cnt"></result-view>
    <subject-view @add-cnt="addTotalCnt" title="코딩"></subject-view> |
    <subject-view @add-cnt="addTotalCnt" title="알고리듬"></subject-view>
  </div>
</template>

<script>
import SubjectView from "./components/SubjectView.vue"
import ResultView from "./components/ResultView.vue"

export default {
  name: 'App',
  components: {
    SubjectView,
    ResultView,
  },

  data() {
    return {
      cnt: 0,
    }
  },

  methods: {
    addTotalCnt() {
      this.cnt++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: rgb(26, 219, 155);
}
</style>
