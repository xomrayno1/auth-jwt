import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect
  } from "react-router-dom";
function AuthenRoute(props) {
    const {isLogin} = props;
    if(isLogin.login){
        return (
            <Route  {...props}  >{props.children}</Route>
         );
    }else{
        return <Redirect  to="/" />
    }
    
}

export default AuthenRoute;