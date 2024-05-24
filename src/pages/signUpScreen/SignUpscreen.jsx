import React, { useContext, useState } from 'react'
import './SignUpScreen.css'
import { Link} from 'react-router-dom'
import { UserAuth } from '../../auth/AuthProvider'
import Message from '../../components/message/Message'

const SignUpscreen = () => {
    const { signUp,signUpErrorMessage } = UserAuth()
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        password: ""
    })
 

    function handleChange(e) {
        const { name, value } = e.target;
        setuserData({ ...userData, [name]: value })
    }

    async function submitForm(e) {
        const {email, password } = userData
        e.preventDefault()
        try {
            const response=await signUp(email, password)

        } catch (error) {
          console.log("signUperror:",error)

        }
    }

    return (
        <div className='signUp px-2 py-2 sm:px-6'>
            {signUpErrorMessage?<Message  errorMessage={signUpErrorMessage} duration={2000}  />:null}
            <h2>Sign up</h2>
            <form className="signUp--form" onSubmit={submitForm}>
                <input onChange={handleChange} name='name' className='signUp--input' type="text" placeholder='Enter your Name' />
                <input onChange={handleChange} name='email' autoComplete='email' className='signUp--input' type="email" placeholder='Enter your Email' />
                <input onChange={handleChange} name='password' autoComplete='current-password' className='signUp--input' type="password" placeholder='Enter your Password' />
                <button className='signUp--button' type='submit'>sign up</button>
                <span className='signUp--content'>Already subscribed to Netflix?
                    <span className='cursor-pointer'><Link to='/signin'>sign in</Link></span></span>
            </form>
        </div>
    )
}

export default SignUpscreen