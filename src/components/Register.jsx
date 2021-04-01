import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {registerAction} from '../redux/action/authAction'
import {Link} from 'react-router-dom'
function Register(props) {
    const [user, setUser] = useState({
        username : '',
        password :''
    });
    const dispatch = useDispatch();

    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(registerAction(user)); 
    }
    function handleOnChange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input placeholder="username" name="username"
                            value={user.username} onChange={handleOnChange}    
                        />
                </div>
                <div>
                    <input placeholder="password" name="password"
                            value={user.password} onChange={handleOnChange}
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                    <Link   to="/">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;