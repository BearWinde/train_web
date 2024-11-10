import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// 自訂樣式
import './style/animate.sass'
import './style/global.sass'

import router from './router'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
