export default [
    {
        path: '/',
        component: () => import('../pages/Homepage.vue'),
        name: 'home',
    },
    {
        path: '/events',
        component: () => import('../pages/Events.vue'),
        name: 'events',
    },
    {
        path: '/ticket/:kode',
        component: () => import('../pages/Ticket.vue'),
        name: 'ticket',
    },
    {
        path: '/a/:id',
        component: () => import('../pages/PageA.vue'),
        name: 'a',
    },
    {
        path: '/b',
        component: () => import('../pages/PageB.vue'),
        name: 'b',
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: () => import('../pages/404.vue'),
    },
]
