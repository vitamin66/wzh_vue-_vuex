// 导入 vue 
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'

// 引入ElementUI 组件库
import ElementUI from 'element-ui';
// 引入ElementUI 全部样式
import 'element-ui/lib/theme-chalk/index.css';

// 关闭生产提示
Vue.config.productionTip = false
// 注册全局ElementUI 插件
Vue.use(ElementUI);

// 创建vm 
new Vue({
    el: '#app',
    render: h => h(App),
})