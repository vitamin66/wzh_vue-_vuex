export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSONLIST', value)
            } else {
                alert('必须姓王')
            }
        }
    },
    mutations: {
        ADD_PERSONLIST(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ],
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}