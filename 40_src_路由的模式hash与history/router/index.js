// 引入vue路由
import VueRouter from 'vue-router'
// 引入 需要配置的组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 配置路由并导出
const router = new VueRouter({
    /*  路由模式 有三种 hash  history abstract 默认是 hash 可以用mode配置 指定模式 
        hash的特点是兼容性较好 但是url路径中会带有#好 不美观  请求服务器时会避开 # 号后面的前端路由
        history 的特点是 兼容性略差 url路径中不会带#号
        但是当你刷新页面重新请求服务器时是会把整个前端路由路径 都发给服务器 如果服务器没有做处理 则会报404
        在服务器端可以用 connect-history-api-fallback 中间件解决 history请求服务器把路由地址一并带过去的问题 
    */
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: true },
        },
        {
            path: '/home',
            component: Home,
            meta: { isAuth: false },
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: { isAuth: true },
                    // 独享路由守卫 只有单个组件可以用 用法和 beforeEach 全局前置路由守卫一样 注意:独享路由守卫 只有前置没有后置
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('name') === 'wzh') {
                                next()
                            } else {
                                alert('没有权限查看！')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true },
                            //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                            // props:{a:900}

                            //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
                            // props:true

                            //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件 可以接到 $route 参数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        },
                    ]
                }
            ]
        },

    ]
})
// 全局前置路由守卫 beforeEach(to ,from,next) 初始化时会调用一次 然后在切换路由之前会调用 to 是去哪个路由的信息  from是从哪个路由出发 next 是放行
// 另外在判断哪些路由是需要鉴权的 可以在 配置里 用 meta 来自定一个布尔值的 key-value 真就是代表这个路由需要鉴权 false则反之
/* router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'wzh') {
            next()
        } else {
            alert('没有权限查看！')
        }
    } else {
        next()
    }
}) */


// 全局后置路由守卫 在切换路由之后会调用  会在初始化时调用一次，以及在路由切换完毕后调用
/* router.afterEach((to, from) => {
    console.log('全局后置路由守卫', to, from)
}) */
// 在导出之前要做鉴权
export default router

