import React, { useState } from 'react';
 

function Login({login}) {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    function handleOnChange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    function handleLogin(e){
        e.preventDefault();
        login(user);
    }
    return (
        <div>
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
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;