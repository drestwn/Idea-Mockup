import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vue3GoogleLogin, {
    clientId: '469420427583-i709v2g1bi8ngq12d9rj516h8kp0ocil.apps.googleusercontent.com'
})

app.mount('#app')
