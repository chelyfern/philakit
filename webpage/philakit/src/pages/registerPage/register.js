import React from "react";
import './register.css'

export default function RegisterPage() {
    return (
        <div>
            <h1>Sign up page</h1>
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
                    </div>
                </form>
            </div>
        </div>
    )
}