// 导入 vue 
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'

// 引入 store 
import store from './store/index.js'

// 引入路由配置文件
import router from './router/index'

// 引入vue-router
import VueRouter from 'vue-router'
// 注册路由器插件
Vue.use(VueRouter)

// 关闭生产提示
Vue.config.productionTip = false

// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App),
    // 配置好路由后就可以添加新的配置项
    router,
    // 在Vue 示例对象里还需要配置 store 这样 vm 和 vc 身上才有 $store 方法
    store,
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    }
})