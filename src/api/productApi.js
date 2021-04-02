import axiosClient from './axiosClient'

const productApi =  {
     
    getAll : ()=>{
        const auth =  JSON.parse(localStorage.getItem('auth'));
        const {jwt} = auth.user;
        console.log(jwt)
        return axiosClient.get('http://localhost:8080/products',{
            headers : { 
                'Authorization': `Bearer ${jwt}`
            }
        }) 
    },
     
}
export default productApi;