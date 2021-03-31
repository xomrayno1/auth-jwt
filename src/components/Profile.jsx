import React from 'react';
import Category from './Category';
import Product from  './Product';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


function Profile({logout}) {
    const history = useHistory();
    function handleLogout(){
        logout();
        history.push("/")
    }
    
    return (
            <div>
                <Link   to="/category" >Category</Link>
                <Link   to="/products">Products</Link>
            <div>
                <button  onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;