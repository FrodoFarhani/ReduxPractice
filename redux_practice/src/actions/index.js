import axios from 'axios'

const url='http://localhost:3004';

export function artistList(keyword){
    const request=axios.get(`${url}/artists?q=${keyword}`)
                        .then(response=>response.data)
    return {
        type:'GET_ARTISTS',
        payload:request
    }
}
export function artistListAll(){
    const request=axios.get(`${url}/artists?_limit=6`)
                        .then(response=>response.data)
    return {
        type:'GET_ARTISTS_ALL',
        payload:request
    }
}
export function artistDetail(id){
    const request=axios.get(`${url}/artists?id=${id}`)
                        .then(response=>response.data)
    return {
        type:'GET_ARTIST_DETAIL',
        payload:request
    }
}
export function clearArtistDetail(id){
   
    return {
        type:'CLEAR_ARTIST_DETAIL',
        payload:''
    }
}