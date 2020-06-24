import UI from './components/layout/UI'
import Home from './components/Home'
import NotFound from './components/NotFound'


let router = {
    mode: 'history',
    routes:[

        {
            path: "/",
            component: Home,
        },

        {
            path: "*",
            component: NotFound,
            props:{
                btn: {
                    text: 'Back to Home',
                    link:'/',
                },
                msg: 'Page not Found!'
            }
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