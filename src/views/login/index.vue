<template>
  <div>
    <span>测试</span>
    <el-button type="primary">测试</el-button>
  </div>
</template>
<script lang="ts" setup> 
import { useStore } from 'vuex';
import {key} from '@/store'
const data  =  useStore(key)
console.log(data.commit('changName'),data.state.user.name1)
</script>
<style lang="scss">
div{
  span{
    color:pink
  }
}
</style>