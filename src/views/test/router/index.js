import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            component: () =>
                import('@/views/test/components/home')
        },
        {
            path: '/test',
            component: () =>
                import('@/views/test/components/test')
        },

    ]
})
