import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
type Result <T> = {
    code:number,
    message:string,
    data:T
}

//InternalAxiosRequestConfig 类型是对于axiosReqeustConfig 类型的继承后的重写 扩展了header部分
export class Request {
    //定义request 的实例
    instance!: AxiosInstance
    baseConfig: AxiosRequestConfig = { baseURL: "/", timeout: 3000 }
    constructor(config: AxiosRequestConfig) {
        //创建实例
        this.instance = axios.create(Object.assign(this.baseConfig, config))
        //封装请求拦截器
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            //获取token
            const token = localStorage.getItem('token') as string
            if (token) {
                config.headers!.Authorization = token
            }
            //处理header 
            const requestType =  config.method
            if(requestType=='post'){
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            }
            return config
        }, (error: any) => {
            return Promise.reject(error)
        })

        //封装相应拦截器
        this.instance.interceptors.response.use((config: AxiosResponse) => {
            return config.data
        }, (error: any) => {
            let message: string = ''
            switch (error.response.status) {
                case '400':
                    message = '请求错误';
                    break;
                case '404':
                    message = "请求未访问到资源";
                    break;
                default:
                    message = `${error.response.status}`
                    break;

            }
            return Promise.reject(error.response)
        })
    }
    //定义请求方法
    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.request(config)
    }
    //定义get 请求方法
    public  get<T=any>(url:string,config:AxiosRequestConfig):Promise<AxiosResponse<Result<T>>>{
        return this.instance.get(url,config)

    }
    //定义post 请求方法
    public  post <T=any>(url:string,config:AxiosRequestConfig,data:any):Promise<AxiosResponse<Result<T>>>{
        return this.instance.post(url,data,config)

    }
    public  put<T=any>(url:string,config:AxiosRequestConfig,data:any):Promise<AxiosResponse<Result<T>>>{
        return this.instance.put(url,data,config)

    }
    public  delete <T=any>(url:string,config:AxiosRequestConfig):Promise<AxiosResponse<Result<T>>>{
        return this.instance.delete(url,config)

    }



}
export default new Request({})
