// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State,State1 } from '@/interface/vuex.interface'
import user from './modules/user'



export const store  =  createStore<State>({
  state: {
    name: 'ceshi1',
    age: 12,
    info: {
      address: 'wew'
    }
  },
  getters:{
    getName(state:State):string{
      return state.name
    }
  },
  mutations: {},
  actions: {},
  modules:{
    user
  }
})
type Modules ={
  user:State1
}

// 定义 injection key
export const key: InjectionKey<Store<State & Modules >> = Symbol()