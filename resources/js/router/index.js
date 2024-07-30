import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Pages/Home.vue'
import Dashboard from '@/Pages/Dashboard.vue'
import Customers from '@/Pages/Customers.vue'
import Deals from '@/Pages/Deals.vue'
import Options from '@/Pages/Options.vue'
import Parameters from '@/Pages/Parameters.vue'
import Reports from '@/Pages/Reports.vue'

/* provide permissions for admin, top manager, manager */
import Permissions from '@/Pages/Permissions.vue'
import PermissionsShow from '@/Components/Permissions/PermissionsShow.vue'

/* provide users wth permissions */
import Users from '@/Pages/Users.vue'
import UsersShow from '@/Components/Users/UsersShow.vue'
import UsersCreate from '@/Components/Users/UsersCreate.vue'


const routes = [
    { path: '/', component: Home, name: 'page.home' },
    { path: '/dashboard', component: Dashboard },
    { path: '/customers', component: Customers },
    { path: '/deals', component: Deals },
    { path: '/reports', component: Reports },

    {
        path: '/permissions',
        component: Permissions,
        name: 'permissions.index'
    },
    {
        path: '/permissions/:id/show',
        name: 'permissions.show',
        component: PermissionsShow,
        props: true,
    },



    { path: '/parameters', component: Parameters },
    {
        path: '/users',
        component: Users,
        name: 'users.index'
    },
    {
        path: '/users/:id/show',
        component: UsersShow,
        name: 'users.show',
        props: true,
    },
    {
        path: '/users/create',
        component: UsersCreate,
        name: 'users.store',
    },

    { path: '/options', component: Options },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    })

export default router
