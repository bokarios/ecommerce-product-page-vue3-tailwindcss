import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const defaultTitle: string = 'Sneakers'

router.beforeEach((data) => {
  document.title = ((data.meta.title && `${data.meta.title}-${defaultTitle}`) ||
    defaultTitle) as string
})
