import {GET_LATEST_NEWS,GET_OTHER_NEWS,GET_LATEST_GALLERY,GET_SELECTED_NEWS,CLEAR_SELECTED_NEWS} from './types'
import axios from 'axios';
const articlesUrl="http://localhost:3005/articles"
const galleriesUrl="http://localhost:3005/galleries"

export function latestNews(){
   const request=axios.get(`${articlesUrl}/?_limit=3`)
   .then(res=>res.data)
    return{
        type:GET_LATEST_NEWS,
        payload:request
    }
}
export function otherNews(){
    const request=axios.get(`${articlesUrl}/?_start=3&_end=10`)
    .then(res=>res.data)
     return{
         type:GET_OTHER_NEWS,
         payload:request
     }
 }
 export function latestGallery(){
    const request=axios.get(`${galleriesUrl}`)
    .then(res=>res.data)
     return{
         type:GET_LATEST_GALLERY,
         payload:request
     }
 }

 //////////////////////////////////////////////////get data by id////////////////////////////////
 export function selectedNews(id){
const request=axios.get(`${articlesUrl}/?id=${id}`)
.then(res=>res.data)
return{
    type:GET_SELECTED_NEWS,
    payload:request
}
 }
 export function clearSelectedNews(){
    return{
        type:CLEAR_SELECTED_NEWS,
        payload:[]
    }
     }