import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {LOG_OUT} from '../utils/Constant'
import {
    Link
} from 'react-router-dom'
function Home(props) {
    const dispatch =   useDispatch();
    
    const {user} = useSelector(state => state.auth)
    
     
   
    
    return (
        <div >
            <h1>Home</h1>
            <div>
                {
                    user.roles && user.roles.map((item,idx) => {
                    return (
                        <>
                            {
                                item.authority === 'ROLE_USER' ? <Link>Category</Link> : null
                            }
                            {
                                item.authority === 'ROLE_ADMIN' ? (
                                            <>
                                                <Link to="/products">Product</Link>
                                               
                                            </>
                                            ) : null
                            }
                        </>
                    )
                    })
                }
                
            </div>
            
        </div>
    );
}

export default Home;