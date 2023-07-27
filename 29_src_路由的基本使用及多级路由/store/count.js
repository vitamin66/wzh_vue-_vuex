// 模块化vuex 不同的区域的配置要进行分类配置 且需要额外配置一个 属性 namespaced:true 这样用 在组件里map系列的方法时 才可以指定模块 
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
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
    },
    state: {
        first: 0,
        school: "武汉交通",
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.first * 10
        }
    }
}

