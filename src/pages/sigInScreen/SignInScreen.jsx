import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../auth/AuthProvider'
import Message from '../../components/message/Message'
import './SignInScreen.css'


function SignInScreen() {

    const { signIn, signInErrorMessage } = UserAuth()

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }
    async function submitForm(e) {
        e.preventDefault()
        const { email, password } = userData
        try {
            await signIn(email, password)

        } catch (error) {
            console.log("signinError", error.code)
        }

    }
    return (
        <div className='signIn px-4 py-2 sm:px-6'>
            {signInErrorMessage ? <Message errorMessage={signInErrorMessage} duration={2000} /> : null}
            <h2>Sign in</h2>
            <form className="signIn--form" onSubmit={submitForm}>
                <input
                    type="email"
                    onChange={handleChange}
                    name='email'
                    className='signIn--input'
                    placeholder='Enter your email'
                    required
                />
                <input
                    type="password"
                    onChange={handleChange}
                    name='password'
                    className='signIn--input'
                    placeholder='Enter your password'
                    required
                />
                <button className='signIn--button'>sign in</button>
                <span className='signIn--content'>New to Netflix?
                    <span className='cursor-pointer'><Link to="/signup">sign up</Link></span></span>
            </form>
        </div>
    )
}

export default SignInScreen