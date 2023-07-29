import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 导入 vuex模块化的配置项 count 和 person
import countOptions from './count.js'
import personOptions from './person.js'

// 注册全局的Vuex 
Vue.use(Vuex)





// new Vuex.Store 实例 配置以上三个对象 并向外暴露
export default new Vuex.Store({
    // 记住 如果是配置模块化好的vuex 配置项 需要在外面套一个 modules 配置项 里面的才是上面配置的 那两个
    modules: {
        countOptions,
        personOptions
    }
})