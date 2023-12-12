// store.js
import { createStore } from 'vuex'

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

const store = createStore({
  state: {
    todoItems: [], // 초기에 빈 배열로 설정
  },
  mutations: {
    setTodoItems(state, items) {
      state.todoItems = items;
    },
  },
  actions: {
    fetchTodoItems(context) {
      const items = storage.fetch(); // 로컬 스토리지에서 데이터를 가져옴
      context.commit('setTodoItems', items); // 상태 업데이트
    },
  },
  getters: {
    // 필요한 경우 추가적인 게터 정의
  },
});

export default store;
