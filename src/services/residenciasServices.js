import residencias from '@/bases_tratadas/residencias.json'

export default {
    getResidencias: () => new Promise(resolve => resolve({ data: residencias }))
}



