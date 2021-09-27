import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import eventos from '@/views/eventos.vue';
import inscricao from '@/views/inscricao.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato,
        meta: {  }
    },
    {
        path: '/eventos',
        name: 'Eventos',
        component: eventos,
        meta: {  }
    },
    {
        path: '/inscricao',
        name: 'inscricao',
        component: inscricao,
        meta: {  }
    },
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
