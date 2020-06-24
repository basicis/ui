import UI from './components/layout/UI'
import Home from './components/Home'

let router = {
    mode: 'history',
    routes:[

        {
            path: "/",
            component: Home,
        },

        {
            path: "/login",
            props: {
                page: 'login'
            },
            component: UI,
        },

        {
            path: "/form",
            props: {
                page: 'form'
            },
            component: UI,
        },

        {
            path: "/dashboard",
            alias: '/dash',
            props: {
                page: 'dashboard'
            },
            component: UI,
        },
    ]
}

export default router;