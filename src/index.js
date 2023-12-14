import { createApp } from 'vue'

import App from '@/app.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
