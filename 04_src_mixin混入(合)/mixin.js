export const mixin = {
    // 混合/混入 可以把多个组件之间 相同的配置项 进行提取 封装
    methods: {
        showName() {
            alert(this.name)
        }
    },
    // 如果混合数据 组件里的data 没有的会混合成功 如果组件里有当前 x  就以组件的数据为主  
    // 另外 如果是生命周期钩子类函数 混合的和组件的全都执行  就是我全都要
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}