import React, {useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import blobby from './img9.svg';
import { auth } from '../../firebase';
import './register.css';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
   
    }
    return (
        <div>
            <div className="imagec">
                <img className="image" src={blobby} alt="blobbbyyy"/>
                <div className="form">
                    <form>
                        <h1>Sign up</h1>
                        <div className="input">
                            <input type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder="Email address" className="box"                               
                                />
                        </div>
                        <div className="input">
                            <input type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="Password" className="box"             
                                />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="buttons">
                            <button
                                type="submit" 
                                onClick={onSubmit}                        
                            >  
                            Create account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage