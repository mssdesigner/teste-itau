import Vue from 'vue'
import Router from 'vue-router'
import Residencias from '@/components/Residencias'
import Detalhes from '@/components/Detalhes'
import Medias from '@/components/Medias'

Vue.use(Router)

const routes = [
    {
        name: 'residencias',
        path: '/',
        component: Residencias,
        props: { title: 'Welcome to residence list!' }
    },
    {
        name: 'detalhes',
        path: '/detalhes',
        component: Detalhes
    },
    {
        name: 'medias',
        path: '/medias',
        component: Medias
    }
]

export default new Router({ routes })