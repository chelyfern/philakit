import React, {useState, useEffect} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';
import {NavLink, useNavigate} from 'react-router-dom';
import './login.css'

const LoginPage = ( { isUser, setisUser, user, setUser }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/profile")
            console.log(user);
            sessionStorage.setItem('isUser', true)
            sessionStorage.setItem('user', email)
            setisUser(true)
            setUser(email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return (
        <div>
            <h1>Login page</h1>
            <div className="form">
                <form>
                    <div className="input">
                        <label>Email Address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)} 
                            required/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"                                                                                                                  
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            required/>
                    </div>
                    <div className="buttons">
                        <button
                        onClick={onLogin}
                        >
                            Sign in
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage