import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import eventos from '@/views/eventos.vue';
import inscricao from '@/views/inscricao.vue';
import cadastro from '@/views/cadastro.vue';
import finalizado from '@/views/finalizado.vue';
import perfil from '@/views/perfil.vue';
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
        name: 'Inscricao',
        component: inscricao,
        meta: {  }
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: cadastro,
        meta: {  }
    },
    {
        path: '/finalizado',
        name: 'finalizado',
        component: finalizado,
        meta: {  }
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: perfil,
        meta: {  }
    },
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
