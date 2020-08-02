import medias from '@/json/media_preco.json' 

export default {   
    getMedias:() => new Promise(resolve => resolve({ data: medias }))
}



