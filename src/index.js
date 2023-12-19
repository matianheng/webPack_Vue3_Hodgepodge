import { createApp } from 'vue'
import App from '@/app.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus' //全局引入
import DatePicker  from 'ant-design-vue';
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/reset.css';
import '@/teme/style.less'
import service from '@/service/bbs.service'

const app = createApp(App)
app.config.globalProperties.$service=service;
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(DatePicker)
app.mount('#app')

