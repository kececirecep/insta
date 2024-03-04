import React from 'react'
import './Login.scss'
import { FcGoogle } from "react-icons/fc"; 

const Login = () => {
    const myStyle={
        fontSize: "26px",
    }
    return (
        <div className='loginWrapper'>
            <img src="/images/login.png" className='firstImg' width="400px" alt="" />
            <div className='formWrapper'>
                <form className='loginForm'>
                    <img src="/images/logo.png" alt="" />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Login</button> 
                    <p>OR</p>
                    <span><FcGoogle style={myStyle} />Log in with Google</span>
                </form>
                <div className='signUp'>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login