// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    todoItems: []
  },
  mutations: {
    setTodoItems(state, items) {
      state.todoItems = items;
    }
  },
  actions: {
    fetchTodoItems(context) {
      if (localStorage.length > 0) {
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
        context.commit('setTodoItems', items);
      }
    }
  },
  getters: {
    // ...getters if needed
  }
});

export default store;

