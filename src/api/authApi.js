import axiosClient from './axiosClient'

const authAPI = {   
    login : (params)=>{
        const url  = 'http://localhost:8080/authenticate';
        return axiosClient.post(url,params)   
    },
    register : (params) => {
        const url = 'http://localhost:8080/register';
        return axiosClient.post(url,params);
    },
    uploadFile :(params)=>{
        const auth =  JSON.parse(localStorage.getItem('auth'));
        const {jwt,username} = auth.user;
        params.append('username',username);
        
        
        console.log(params)
        return axiosClient.put('http://localhost:8080/uploadFile',params,{
            headers : { 
                'Authorization': `Bearer ${jwt}`
            }
        }) 
    }
}
export default authAPI