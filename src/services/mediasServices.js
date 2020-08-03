import medias from '@/bases_tratadas/media_preco.json' 

export default {   
    getMedias:() => new Promise(resolve => resolve({ data: medias }))
}



