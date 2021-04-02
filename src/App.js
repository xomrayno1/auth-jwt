 
import './App.css';
import Login from './components/Login';
import {LOG_OUT} from './utils/Constant'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
 
  Route,
 
  useHistory,
 
} from "react-router-dom";
import Home from './components/Home'
import AuthenRoute from './components/AuthenRoute'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Product from './components/Product'
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/Register';
import AccessDenied from './components/AccessDenied';
import {notification} from 'antd' 

 
function App() {
  const dispatch =   useDispatch();
  const auth = useSelector(state =>state.auth);
  const {error} = useSelector(state=>state.product);

  function handleLogout(){
    dispatch({type: LOG_OUT})
    localStorage.removeItem('auth');
  }
 
   
  return (
    <div className="App">
       {auth.isLogin && <button onClick={handleLogout}>Logout</button>}
       <Router>
          <>
            <Route exact path="/" render={()=> <Login/>} />
            <Route  path="/register" render={()=> <Register/>} />
            <AuthenRoute  path="/home" >
              <Home/>
            </AuthenRoute>
            <AuthenRoute  path="/products" >
              <Product/>
            </AuthenRoute>
            <Route   path="/acess-denied" component={AccessDenied}/>
          </>
      </Router>
    </div>
  );
}

export default App;
