import React from "react";
import './login.css'

export default function LoginPage() {
    return (
        <div>
            <h1>Login/sign up page</h1>
            <div className="form">
                <form>
                    <div className="input">
                        <label>Username</label>
                        <input type="text" name="uname" required/>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="password" name="pass" required/>
                    </div>
                    <div className="buttons">
                        <button>Create account</button>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}