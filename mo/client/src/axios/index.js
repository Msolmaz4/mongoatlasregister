import axios from 'axios'



const HTTP =axios.create({
    baseURL:'http://localhost:9000'
})
export const login = async (formdata)=>{
    await HTTP.post('/user/signin',formdata)
}