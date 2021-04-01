import React, { useState } from 'react';
import {useDispatch, useSelector}  from 'react-redux' 
import { Redirect, useHistory } from 'react-router';
import {loginAction} from '../redux/action/authAction'
import {Button } from 'antd'
import {Link} from 'react-router-dom'

function Login(props) {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.auth)
    
    function handleOnChange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    function handleLogin(e){
        e.preventDefault();
        dispatch(loginAction(user))
    }
        return (
            <div>
                { userLogin.isLogin ? history.replace('home')  :
                    <form onSubmit={handleLogin}>
                        <div>
                            <input  placeholder="Username..." 
                                onChange={handleOnChange}
                                name="username"
                                value={user.username} />
                        </div>
                        <div>
                            <input  placeholder="Password..." 
                                onChange={handleOnChange}
                                type="password"
                                name="password"
                                value={user.password} />
                        </div>
                        <div>
                            <Button type="primary" htmlType="submit" loading={userLogin.loading} >
                                    Login
                            </Button>
                            <div>
                                <Link to="/register">Register</Link>
                            </div>
                        </div>
                    </form>
                }
            </div>
        );
     
} 

export default Login;