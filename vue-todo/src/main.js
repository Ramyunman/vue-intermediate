// main.js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store' // 수정된 store 파일 경로

const app = createApp(App)

app.use(store) // Vuex 스토어를 Vue 앱에 플러그인으로 추가합니다.

app.mount('#app')
