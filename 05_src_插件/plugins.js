export default {
    // install方法可以接收到 vue 构造函数 可以在这里面写过滤器自定义属性 混合配置等等等等 在main.js中引入然后 Vue.use()使用即可
    // 这个相当于自定义的插件 
    install(Vue) {
        console.log('install', Vue)
        // ................代码
    }
}
