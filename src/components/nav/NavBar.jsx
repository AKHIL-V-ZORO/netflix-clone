import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import logo from "../../assets/logo.png"
import avatar from "../../assets/Netflix-avatar.png"
import { UserAuth } from '../../auth/AuthProvider'
import './NavBar.css'


function NavBar() {
  const [show, setShow] = useState(false)
  const { currentUser } = UserAuth()
  const location = useLocation().pathname
  const navigate = useNavigate()
  

  const toggle=()=>{
    location==='/account'||location==='/mylist' && currentUser ? navigate('/profile'):navigate('/account')
  }


  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    }

  }, [show]);



  return (
    <nav className={`${show && 'nav--black'}`} >
      <img onClick={()=>navigate('/account')} className='nav--logo ' src={logo} alt="logo" />
      {
        currentUser && location === '/account' || location==='/profile'||location=='/mylist' ?<img onClick={toggle} className='nav--avatar' src={avatar} alt="avatar" /> 
          :<div>
             <Link to='/signin'><button className='nav--button--signin'>signin</button></Link>
             <Link to='/signup'><button className='nav--button--signup'>sign up</button></Link>
          </div>
      }
    </nav>
  )
}

export default NavBar