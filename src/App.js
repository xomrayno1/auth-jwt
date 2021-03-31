import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import Profile from './components/Profile';
import 'react-notifications/lib/notifications.css';
import {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Category from './components/Category'
import Product from './components/Product'
import AuthenRoute from './components/AuthenRoute'

function App() {
  const [isLogin, setIsLogin] = useState({
      login : false,
      message : ''
  });
  const history = useHistory();

  function handleLogin({username,password}){     
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":username, "password":password});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/authenticate", requestOptions)
        .then(response => {
          if(response.ok){
            return response.json()
          }
          throw Error(response.statusText)
        })
        .then(result => {
          localStorage.setItem("accessToken", `Bearer ${result.token}`)
          setIsLogin({
            ...isLogin,
            login : true,
            message : 'Đăng Nhập thành công'
          })
        })
        .catch(error => { 
          setIsLogin({
            ...isLogin,
            message : 'Tài khoản hoặc mật khẩu không đúng'
          })
        });
         
  }
  
  function handleLogout(){
    localStorage.removeItem('accessToken')
    setIsLogin({
      ...isLogin,
      login : false,
      message: 'Đăng xuất thành công'
    })
     
  }
  return (
    <div className="App">
       <Router>
       <div>
       <Alert color="warning">
                 {
                   isLogin.message
                 }
          </Alert>
       
       { isLogin.login ? <Profile  logout={handleLogout}/> : <Login login={handleLogin}/> } 
       </div>
              <Switch>
                    <AuthenRoute path="/category" isLogin={isLogin} render={() => isLogin.login ? <Category/> : null}/> 
                    <AuthenRoute path="/products" isLogin={isLogin}  render={() => <Product/>}/> 
                </Switch>
      </Router>
    </div>
  );
}

export default App;
