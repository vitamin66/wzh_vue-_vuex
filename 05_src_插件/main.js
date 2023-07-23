// 导入 vue 
import Vue from 'vue'

// 导入 App 组件
import App from './App.vue'

// 引入插件
import plugins from './plugins.js'

// 使用插件
Vue.use(plugins)

// 关闭生产提示
Vue.config.productionTip = false


// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App)
})