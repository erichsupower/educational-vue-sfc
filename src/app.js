import './assets/main.css'

import App from './app.vue'
import router from './router.js'

import { createApp } from 'vue'
const app = createApp(App)

app.use(router)

app.mount('#app')
