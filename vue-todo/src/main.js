// main.js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

const app = createApp(App)

// 데이터 로딩 액션 호출
store.dispatch('fetchTodoItems')

app.use(store)
app.mount('#app')
