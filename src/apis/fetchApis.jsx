import axios from "axios";

const instace = axios.create({
    baseURL: 'http://localhost:8080'
})
export const apiRequest = async (endpoint, method, data, token) =>{
    try{
        let headers = {}
        if(token){
            headers = {
                token: `Bearer ${token}`
            }
        }
        const response = await instace.request({
            url:endpoint,
            method,
            data:data,
            headers
        })
        console.log(instace)
        return response.data
    } catch(err){
        throw err
    }
}