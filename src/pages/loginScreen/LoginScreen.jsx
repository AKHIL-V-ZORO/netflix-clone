import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../redux/slice/userSlice'
import TextField from '@mui/material/TextField';
import './LoginScreen.css'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const currentUser = useSelector(selectUser)
  const navigate=useNavigate()


  function handleSubmit(e) {
    e.preventDefault()
    if (currentUser.email === email) {
      console.log("hiiiii")
      navigate('/account')
    } 
    else {
       navigate('/')
       console.log("wow")
    }
  }

  return (
    <div className='login--screen--body top-[10%] sm:top-[30%]'>
      <h2 >Unlimited Films,Tv programmes and more </h2>
      <h3 >Watch anywhere. Cancel at any time.</h3>
      <h5>Ready tro watch? Enter your email to create or restart your membership</h5>
      <div className="login--screen--input ">
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email Address' />
          <button type='submit' className='login--screen--button'>GET STARTED</button>
        </form>
      </div>
    </div>

  )
}

export default LoginScreen
