import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { signup, login } from '../../firebase/firebase'

const Login = () => {
  const [signIn, setSignIn] = useState('Sign in')
  const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const user_auth = async(e)=>{
  e.preventDefault()
  if(signIn === 'Sign in'){
    await login(email,password)
  }else{
    await signup(name,email,password)
  }
}
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signIn}</h1>
        <form action="">
          {signIn === 'Sign in' ? <></> : <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your name' />}

          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Your email' />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Your password' />
          <button type='submit'>{signIn}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="switch-account">
          {signIn === 'Sign in' ? <p>New to Netflix ? <span onClick={() => { setSignIn('Sign up') }}>Sinup Now</span></p> :
            <p>Already have accout ? <span onClick={() => setSignIn('Sign in')}>Sign In Now </span></p>}


        </div>
      </div>
    </div>
  )
}

export default Login