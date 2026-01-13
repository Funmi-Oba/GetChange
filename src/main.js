import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {counterStore} from './stores/counter'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(counterStore)

app.mount('#app')
