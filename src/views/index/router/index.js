import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: '/index',
    routes: [{
            path: '/',
            component: () =>
                import('@/views/index/components/home')
        },
        {
            path: '/test',
            component: () =>
                import('@/views/index/components/test')
        },

    ]
})
