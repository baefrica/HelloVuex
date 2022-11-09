import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 공통된 데이터가 저장되는 영역
  state: {
    total: 0
  },
  // state 를 이용하여 값을 새롭게 뿌려주고 싶을 때 computed 와 같은 역할을 함
  getters: {
    cntMsg(state) {
      let msg = "10회";

      if(state.total > 10) {
        msg += " 초과"
      }
      else {
        msg += " 이하"
      }

      return `${msg} 호출됨`
    }
  },
  // state 를 변경하는 유일한 방법 / 동기적으로 작성해야함
  mutations: {
    ADD_ONE(state) {
      state.total++;
    },

    ADD_TEN(state, payload) {
      // 숫자 값을 넘겼기 때문에
      state.total += payload;
    },

    ADD_RANDOM(state, payload) {
      // 객체를 받아서 사용함
      state.total += payload.num;
    }
  },
  // mutations 호출 / back 과 비동기 통신을 하는 곳
  actions: {
    // addOne(context) {
    //   // console.log(context);
    //   context.commit('ADD_ONE');
    // },
    // 심플하게..
    addOne({ commit }) {
      commit('ADD_ONE')
    },

    asyncAddOne(context) {
      setTimeout(() => {
        context.commit('ADD_ONE')
      }, 1000)
    }
  },
  // 여러개로 기능을 쪼개놓았을 때 등록해서 관리하는 느낌
  modules: {
  }
})
