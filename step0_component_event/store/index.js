import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 공통된 데이터가 저장되는 영역
  state: {
  },
  // state 를 이용하여 값을 새롭게 뿌려주고 싶을 때 computed 와 같은 역할을 함
  getters: {
  },
  // state 를 변경하는 유일한 방법 / 동기적으로 작성해야함
  mutations: {
  },
  // mutations 호출 / back 과 비동기 통신을 하는 곳
  actions: {
  },
  // 여러개로 기능을 쪼개놓았을 때 등록해서 관리하는 느낌
  modules: {
  }
})
