
import { Module } from 'vuex'
import {State,State1} from '@/interface/vuex.interface'
//定义子模块
const user:Module<State1,State> = {
    state:{
        name1:'cehsi2',
        age:12,
        address:"ceshi"
    },
    getters:{
        getNames(state:State1,rootState:State){
            return  state.name1 + rootState.info.address
        }
    },
    mutations:{
        changName(state:State1,rootState:State){
            state.name1 = 'modulesChangeName'
           
        }
    }
}
export default user