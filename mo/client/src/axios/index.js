import axios from 'axios'

/*

const HTTP =axios.create({
    baseURL:'http://localhost:9000', timeout: 1000
})
export const login = async (formdata)=>await HTTP.post('/user/signin',formdata)
*/
export function api (){
    return axios.create({
        baseURL:'http://localhost:9000'
    })
}
