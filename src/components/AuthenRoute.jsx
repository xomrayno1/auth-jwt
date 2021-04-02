import React from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect
  } from "react-router-dom";
function AuthenRoute(props) {
    const userLogin = useSelector(state => state.auth)
    if(userLogin.isLogin){
        return (
            <Route  {...props}  >{props.children}</Route>
         );
    }else{
        return <Redirect  to="/" />
    }
    
}

export default AuthenRoute;