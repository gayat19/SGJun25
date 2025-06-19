import axios from "axios";
import { baseURL } from "../environments/environment.dev";

export function GetProductById(id:number){
    const url = `${baseURL}products/${id}`;
    return axios.get(url)
}
export function GetProducts(){
    const url = `${baseURL}products`;
    return axios.get(url)
}
export function GetProductsBySearchKey(searchObject:string){
    const url = `${baseURL}products/search?q=${searchObject}`;
    return axios.get(url)
}