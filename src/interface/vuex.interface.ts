// 为 store state 声明类型
type info = {
  address:string
}
export interface State {
 name:string,
 age:number,
 info:info
}
export interface State1 {
  name1:string,
  age:number,
  address:string
}