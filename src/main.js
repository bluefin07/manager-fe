import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import config from './config'
import request from './utils/request'

console.log('config=>', config)
console.log('环境配置=>', import.meta.env)

const app = createApp(App)
app.config.globalProperties.$request = request
app.use(router).use(ElementPlus).mount('#app')