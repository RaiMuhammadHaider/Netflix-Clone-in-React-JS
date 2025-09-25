import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  const [signIn , setSignIn]  = useState('Sign in')
  return (
    <div className='login'>
      <img src= {logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signIn}</h1>
        <form action="">
          {signIn === 'Sign in' ? <></>  : <input type="text" placeholder='Your name'  />  }
          
          <input type="email" placeholder='Your email'  />
          <input type="password" placeholder='Your password' />
          <button>{signIn}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="switch-account">
          {signIn === 'Sign in' ?   <p>New to Netflix ? <span onClick={()=>{setSignIn('Sign up')}}>Sinup Now</span></p>:
          <p>Already have accout ? <span onClick={()=> setSignIn('Sign in')}>Sign In Now </span></p>}
        
          
        </div>
      </div>
    </div>
  )
}

export default Login