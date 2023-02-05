import React, {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';
import {NavLink, useNavigate} from 'react-router-dom';
import blobby from './img9.svg'
import './login.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return (
        <div>
            <img className="image" src={blobby} alt="blobbbyyy"/>
            <div className="form">
                <form>
                    <h1>Login</h1>
                    <div className="input">
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)} 
                            required className="box"/>
                    </div>
                    <div className="input">
                        <input
                            id="password"
                            name="password"
                            type="password"                                                                                                                  
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            required className="box"/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="buttons">
                        <button
                        onClick={onLogin}
                        >
                            Login
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage