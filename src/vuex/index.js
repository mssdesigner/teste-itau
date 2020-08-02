import Vue from 'vue'
import Vuex from 'vuex'
import ResidenciaService from '@/services/residenciasServices';
import MediaService from '@/services/mediasServices';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        residencias: [],
        medias: []
    },
    mutations: {
        setResidencias(state, payload) {
            state.residencias = payload;
        },
        setMedias(state, payload) {
            state.medias = payload;
        }
    },
    actions: {
        async setResidencias(state) {
            const response = await ResidenciaService.getResidencias();
            state.commit("setResidencias", response.data)
        },
        async setMedias(state) {
            const response = await MediaService.getMedias();
            state.commit("setMedias", response.data)
        }
    },
    getters: {
        getResidencias: state => state.residencias,
        getMedias: state => state.medias
    }
})

