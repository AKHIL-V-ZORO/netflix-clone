import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import loginPoster from '../../assets/poster.webp'
import { UserAuth } from '../../auth/AuthProvider'
import NavBar from '../../components/nav/NavBar'
import LoginScreen from '../loginScreen/LoginScreen'
import SignInScreen from '../sigInScreen/SignInScreen'
import SignUpscreen from '../signUpScreen/SignUpscreen'
import './DefaultLogin.css'


const DefaultLogin = () => {
    const { currentUser } = UserAuth()
    const navigate = useNavigate()
    const location = useLocation().pathname

    useEffect(() => {
        currentUser ? navigate('/') : navigate('/signin')
    }, [currentUser])

    return (
        <>
            <NavBar />
            <div className='login--screen'>
                <div style={{ backgroundImage: `url(${loginPoster})` }} className='login--screen--poster' />
                <div className="login--screen--overlay"></div>
                {
                    !currentUser ? (location === '/signin' ? <SignInScreen /> : <SignUpscreen />)
                        : (location === '/signin' ? <SignInScreen /> : (location === '/signup' ? <SignUpscreen />
                            : <LoginScreen />
                            ))
                }
            </div>
        </>
    )
}

export { DefaultLogin }
