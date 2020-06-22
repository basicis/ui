import DashboardLayout from './components/layout/DashboardLayout'
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
            component: DashboardLayout,
        },

        {
            path: "/dashboard",
            alias: '/dash',
            props: {
                page: 'dashboard'
            },
            component: DashboardLayout,
        },
    ]
}

export default router;