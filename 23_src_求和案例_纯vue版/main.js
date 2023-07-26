// 导入 vue 
import Vue from 'vue'

// 导入 App 组件
import App from './App.vue'

// 引入vue-resource插件
import vueResource from 'vue-resource'

// 注册全局插件
Vue.use(vueResource) 

// 关闭生产提示
Vue.config.productionTip = false


// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    }
})