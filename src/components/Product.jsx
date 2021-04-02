import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAll} from '../redux/action/productAction'

function Product(props) {
    const {data} = useSelector(state => state.product); 
    const {isLoading} = useSelector(state => state.product);
    const dispatch = useDispatch();
    const fetch = ()=>{
        dispatch(getAll())
    }
    useEffect(()=>{
        fetch();
    },[])
    console.log(data)
    return (
        <div>
            <h1>Products</h1>
            <div>
                {
                    data && data.map((item,idx) => {
                        return <h4 key={idx}>{item.name}</h4>
                    })
                }
            </div>
        </div>
    );
}

export default Product;