
export default [
    {
        path: '/auth/login',
        name: 'auth.login',
        component: () => import('@/views/pages/auth/login/index.vue'),
        meta: {
            layout: 'Auth'
        },
    },
    {
        path: '/auth/register',
        name: 'auth.register',
        component: () => import('@/views/pages/auth/register/index.vue'),
        meta: {
            layout: 'Auth'
        },
    },
    {
        path: '/auth/forgot',
        name: 'auth.forgot',
        component: () => import('@/views/pages/auth/forgot/index.vue'),
        meta: {
            layout: 'Auth'
        },
    },
]
