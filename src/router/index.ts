//创建路由配置文件
import {createRouter, createWebHashHistory,RouteRecordRaw}  from 'vue-router'
const routes:RouteRecordRaw[] =[
    {path:"/",
    name:"login",
    component:()=>import('@/views/login/index.vue')
    }
]
const router  = createRouter({
    history:createWebHashHistory(), //hash 模式
    routes
})
export default router