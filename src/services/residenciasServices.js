import residencias from '@/json/residencias.json'

export default {
    getResidencias: () => new Promise(resolve => resolve({ data: residencias }))
}



