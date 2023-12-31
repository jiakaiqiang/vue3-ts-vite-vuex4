import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import {store,key} from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app =  createApp(App)
app.use(router).use(store,key).use(ElementPlus).mount('#app')
