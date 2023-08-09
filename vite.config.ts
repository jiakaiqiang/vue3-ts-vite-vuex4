import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置扩展名和别名
  resolve:{
    extensions:['.js','.ts','.vue','.json'],
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  //配置服务器代理
  server:{
    port:9999,
    hmr:{
      host:"127.0.0.1",
      port:8080
    },
    proxy:{
      '/api':{
        ws:true,
        target:"",
        rewrite: (path) => path.replace(/^\/api/, ''), //代理
      }

    }
  }
})
