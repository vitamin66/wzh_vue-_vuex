// 导入 vue 
import Vue from 'vue'

// 导入 App 组件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 然后如果要全局的混入 可以 引入然后 调用Vue.mixin 方法注册全局的 mixin
// import { mixin } from "./mixin.js";

// Vue.mixin(mixin);

// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App)
})