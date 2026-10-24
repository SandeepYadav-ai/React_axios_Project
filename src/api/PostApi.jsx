import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});// instance create of axios

//get method
export const getPost = ()=> {
    return api.get("/posts");
};