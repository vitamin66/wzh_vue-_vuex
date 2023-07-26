import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 注册全局的Vuex 
Vue.use(Vuex)

// 配置actions 对象 响应动作
const actions = {
    // 像这种没有其他业务逻辑只是单纯 传递消息的 可以直接跳过 在 mutations 里处理即可
    // jia(context, value) {
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value)
    // },

    jiaOdd(context, value) {
        if (context.state.first % 2) {
            context.commit('JIAODD', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIAWAIT', value)
        }, 500);
    }
}
// 配置 mutations 操作state 
const mutations = {
    JIA(state, value) {
        state.first += value
    },
    JIAN(state, value) {
        state.first -= value
    },
    JIAODD(state, value) {
        state.first += value
    },
    JIAWAIT(state, value) {
        state.first += value
    },

}
// 配置 state 储存数据
const state = {
    first: 0,
    school: "武汉交通",
    subject: '前端',
}

//配置 getters  如果 state 中的数据需要加工计算后再使用 就可以使用 getters 他们的关系有点像 data 和 computed
const getters = {
    // 跟计算属性类似 需要指定一个函数名 然后在里面处理数据 最后 return 处理好的数据
    // 有一个参数 就是 state
    bigSum(state) {
        return state.first * 10
    }
}

// new Vuex.Store 实例 配置以上三个对象 并向外暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})