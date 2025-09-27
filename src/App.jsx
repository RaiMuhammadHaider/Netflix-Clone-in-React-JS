import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { Route , Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'


function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        // logged in 
        navigate('/')
      }else{
        // not logged in
        navigate('/login')
      }
    })
  },[])

  return (
  <div>
  <Routes>
    <Route path='/' element =  {<Home/>}  />
    <Route path='/login'  element = {<Login/>} />
    <Route path='/player/:id' element = {<Player/>} />
    
  </Routes>
  </div>
  )
}

export default App
