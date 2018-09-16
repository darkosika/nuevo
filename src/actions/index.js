import axios from 'axios';
export const FETCH_LIBRARIES='fetch_libraries';
export const FETCH_LIBRARY='fetch_library';
export const CREATE_BOOKS='create_books';
const NEW_API='http://5b9e41b1133f660014c91950.mockapi.io/library'
export function fetchLibraries(){
    const request=axios.get(`${NEW_API}`);
    return{
        type:FETCH_LIBRARIES,
        payload:request
    };
}
export function createBook(values,callback){
    const request=axios.post(`${NEW_API}`,values)
    .then(()=> callback())
    return{
        type:CREATE_BOOKS,
        payload:request
    };
}
export function fetchLibrary(id){
    const request=axios.get(`${NEW_API}/${id}`)
    return{
        type:FETCH_LIBRARY,
        payload:request
    };
}
