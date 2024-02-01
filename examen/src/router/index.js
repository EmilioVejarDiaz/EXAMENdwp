import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

const routes = [
    {
        path: '/',
        redirect: '/menu'
    },
    {
        path: '*',
        component: () => import('../components/screens/ErrorPage/ErrorPage.vue')
    },

    {
        path: '/',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: '/layout',
                name: 'layout',
                component: () => import('../components/screens/Layout.vue'),

                children: [
                    {
                        path: '/menu',
                        name: 'menu',
                        component: () => import('../components/screens/Menu.vue')
                    },
                    {
                        path: '/formulario',
                        name: 'formulario',
                        component: () => import('../components/screens/Formulario.vue')
                    },
                    {
                        path: '/paginacion',
                        name: 'paginacion',
                        component: () => import('../components/screens/Paginacion.vue')
                    }


                ]
            },

        ]

    }
]

const router = new vueRouter({ routes })
export default router;