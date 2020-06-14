import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

let router = {
    mode: 'hash',
    routes:[

        {
            path: "/",
            component: Home,
        },

        {
            path: "/login",
            component: Login,
        },

        {
            path: "/dashboard",
            alias: '/dash',
            component: Dashboard,
        },
    ]
}

export default router;