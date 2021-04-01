import axiosClient from './axiosClient'

const authAPI = {   
    login : (params)=>{
        const url  = 'http://localhost:8080/authenticate';
        return axiosClient.post(url,params)   
    },
    register : (params) => {
        const url = 'http://localhost:8080/register';
        return axiosClient.post(url,params);
    }
}
export default authAPI